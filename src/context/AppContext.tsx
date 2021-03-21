import React, { createContext, useState } from 'react'

// import { Container } from './styles';

interface AppContextType {
  waterRemaining: number;
  waterGoal: number;
  waterConsumption: number;
  measure: number;
  setMeasure: React.SetStateAction<number>;
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
    setWaterRemaining((value) => (value > measure ? value - measure : 0))
    setWaterConsumption((value) => value + measure)
  }

  const contextData = {
    waterRemaining,
    waterGoal,
    waterConsumption,
    measure,
    increaseConsumption,
    setWaterGoal,
    setMeasure
  }

  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  )
}

export { AppProvider, AppContext }
