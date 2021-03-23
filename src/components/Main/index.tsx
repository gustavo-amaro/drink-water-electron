import React from 'react'
import Body from '../Body'
import DrinkButton from '../DrinkButton'
import DrinkHistory from '../DrinkHistory'
import Header from '../Header'

import { Container } from './styles'

const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <Body />
      <DrinkButton />
      <DrinkHistory />
    </Container>
  )
}

export default Main
