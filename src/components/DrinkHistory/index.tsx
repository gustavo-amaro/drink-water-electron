import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

import { Container, HistoryItem } from './styles'

interface DrinkRegister {
  datetime: string;
  consumption: number;
}

const DrinkHistory: React.FC = () => {
  const context = useContext(AppContext)
  const formattedDate = context?.getFormattedDate()
  return (
    <Container>
      {formattedDate &&
        context?.registersDays[formattedDate] &&
        context.registersDays[formattedDate].map((register: DrinkRegister) => (
          <HistoryItem key={new Date(register.datetime).toLocaleTimeString()}>
            <span className="consumption">{register.consumption}ml</span>
            <span>{new Date(register.datetime).toLocaleTimeString()}</span>
          </HistoryItem>
        ))}
    </Container>
  )
}

export default DrinkHistory
