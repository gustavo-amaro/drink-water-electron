import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

import { Container, HistoryItem } from './styles'

const DrinkHistory: React.FC = () => {
  const { registersDays, getFormattedDate } = useContext(AppContext)
  return <Container >
    {registersDays[getFormattedDate()] && registersDays[getFormattedDate()].map((register) => (
      <HistoryItem key={new Date(register.datetime).toLocaleTimeString()}>
        <span className="consumption">{register.consumption}</span>
        <span>{new Date(register.datetime).toLocaleTimeString()}</span>
      </HistoryItem>
    ))}
  </Container>
}

export default DrinkHistory
