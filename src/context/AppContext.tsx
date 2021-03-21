import React, { createContext, useEffect, useState } from 'react'

interface AppContextType {
  waterRemaining: number;
  waterGoal: number;
  waterConsumption: number;
  measure: number;
  changeMeasure(measure: number): () => void;
  setWaterGoal: React.SetStateAction<number>;
  increaseConsumption(): () => void;
}

const AppContext = createContext<AppContextType | null>(null)

const AppProvider: React.FC = ({ children }) => {
  const [waterRemaining, setWaterRemaining] = useState(1200)
  const [waterGoal, setWaterGoal] = useState(3000)
  const [waterConsumption, setWaterConsumption] = useState(1800)
  const [measure, setMeasure] = useState(300)

  function increaseConsumption () {
    setWaterRemaining((value) => {
      const newState = value > measure ? value - measure : 0
      localStorage.setItem('waterRemaining', newState)
      return newState
    })
    setWaterConsumption((value) => {
      const newState = value + measure
      localStorage.setItem('waterConsumption', newState)
      return newState
    })
    const registersDays = JSON.parse(
      localStorage.getItem('registersDays') ?? '{}'
    )
    const currentDate = getFormattedDate()
    registersDays[currentDate].push({
      datetime: new Date(),
      consuption: measure
    })

    localStorage.setItem('registersDays', JSON.stringify(registersDays))
  }

  function changeMeasure (measure: number) {
    setMeasure(measure)
    localStorage.setItem('measure', measure)
  }

  function getFormattedDate (): string {
    const data = new Date()
    const formattedDate =
      data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear()

    return formattedDate
  }

  useEffect(() => {
    const measure = parseInt(localStorage.getItem('measure') ?? '300')
    if (measure) setMeasure(measure)

    const waterConsumption = parseInt(
      localStorage.getItem('waterConsumption') ?? '0'
    )
    const waterRemaining = parseInt(
      localStorage.getItem('waterRemaining') || '0'
    )

    const currentDate = getFormattedDate()

    const registersDaysString = localStorage.getItem('registersDays')

    if (registersDaysString) {
      const registersDays = JSON.parse(registersDaysString)
      if (!registersDays[currentDate]) {
        setWaterConsumption(0)
        setWaterRemaining(waterGoal)
        localStorage.setItem('waterConsumption', '0')
        localStorage.setItem('waterRemaning', waterGoal)

        registersDays[currentDate] = []
        localStorage.setItem('registersDays', JSON.stringify(registersDays))
      } else {
        setWaterConsumption(waterConsumption)
        setWaterRemaining(waterRemaining)
      }
    } else {
      setWaterConsumption(0)
      setWaterRemaining(waterGoal)
      localStorage.setItem('waterConsumption', '0')
      localStorage.setItem('waterRemaning', waterGoal)

      const registersDays = JSON.stringify({
        [currentDate]: []
      })

      localStorage.setItem('registersDays', registersDays)
    }
  }, [waterGoal])

  const contextData = {
    waterRemaining,
    waterGoal,
    waterConsumption,
    measure,
    increaseConsumption,
    setWaterGoal,
    changeMeasure
  }

  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  )
}

export { AppProvider, AppContext }
