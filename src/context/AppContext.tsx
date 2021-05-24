import { ipcRenderer } from 'electron'
import React, { createContext, useEffect, useState } from 'react'

interface DrinkRegister {
  datetime: string;
  consumption: number;
}

interface AppContextType {
  waterRemaining: number;
  waterGoal: number;
  waterConsumption: number;
  measure: number;
  changeMeasure(measure: number): void;
  setWaterGoal: React.SetStateAction<number>;
  increaseConsumption(): void;
  getFormattedDate(): string;
  registersDays: Array<Array<DrinkRegister>>;
}

const AppContext = createContext<AppContextType | null>(null)

const AppProvider: React.FC = ({ children }) => {
  const [waterRemaining, setWaterRemaining] = useState(0)
  const [waterGoal, setWaterGoal] = useState(3000)
  const [waterConsumption, setWaterConsumption] = useState(0)
  const [measure, setMeasure] = useState(300)
  const [registersDays, setRegistersDays] = useState({})
  const [waterTimeInterval, setWaterTimerInterval] = useState(60)

  function increaseConsumption () {
    setWaterRemaining((value) => {
      const newState = value > measure ? value - measure : 0
      ipcRenderer.send('store-set', 'waterRemaining', newState)
      return newState
    })
    setWaterConsumption((value) => {
      const newState = value + measure
      ipcRenderer.send('store-set', 'waterConsumption', newState)
      return newState
    })
    const registersDays =
      ipcRenderer.sendSync('store-get', 'registersDays') ?? {}

    const currentDate = getFormattedDate()
    registersDays[currentDate].push({
      datetime: new Date(),
      consumption: measure
    })
    setRegistersDays(registersDays)
    ipcRenderer.send('store-set', 'registersDays', registersDays)

    const date60MinutesLater = new Date()
    date60MinutesLater.setTime(new Date().getTime() + (1000 * 60 * waterTimeInterval))
    ipcRenderer.send('register-schedule-job', date60MinutesLater)
  }

  function changeMeasure (measure: number) {
    setMeasure(measure)
    ipcRenderer.send('store-set', 'measure', measure)
  }

  function getFormattedDate (): string {
    const data = new Date()
    const formattedDate =
      data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear()

    return formattedDate
  }

  useEffect(() => {
    const measure = ipcRenderer.sendSync('store-get', 'measure') ?? 300
    if (measure) setMeasure(measure)

    const waterConsumption =
      ipcRenderer.sendSync('store-get', 'waterConsumption') ?? 0

    const waterRemaining =
      ipcRenderer.sendSync('store-get', 'waterRemaining') ?? 0

    const currentDate = getFormattedDate()

    const registersDays = ipcRenderer.sendSync('store-get', 'registersDays')

    if (registersDays) {
      if (!registersDays[currentDate]) {
        setWaterConsumption(0)
        setWaterRemaining(waterGoal)
        ipcRenderer.send('store-set', 'waterConsumption', 0)
        ipcRenderer.send('store-set', 'waterRemaining', waterGoal)

        registersDays[currentDate] = []
        ipcRenderer.send('store-set', 'registersDays', registersDays)
      } else {
        setWaterConsumption(waterConsumption)
        setWaterRemaining(waterRemaining)
      }
      setRegistersDays(registersDays)
    } else {
      setWaterConsumption(0)
      setWaterRemaining(waterGoal)

      ipcRenderer.send('store-set', 'waterConsumption', 0)
      ipcRenderer.send('store-set', 'waterRemaining', waterGoal)

      const registersDays = {
        [currentDate]: []
      }
      setRegistersDays(registersDays)
      ipcRenderer.send('store-set', 'registersDays', registersDays)
    }
  }, [waterGoal])

  const contextData = {
    waterRemaining,
    waterGoal,
    waterConsumption,
    measure,
    registersDays,
    increaseConsumption,
    setWaterGoal,
    changeMeasure,
    getFormattedDate
  }

  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  )
}

export { AppProvider, AppContext }
