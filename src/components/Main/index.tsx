import React from 'react'
import Body from '../Body'
import DrinkButton from '../DrinkButton'
import Header from '../Header'

import { Container } from './styles'

const Main: React.FC = () => {
  return (
    <Container >
      <Header />
      <Body />
      <DrinkButton />
    </Container>
  )
}

export default Main
