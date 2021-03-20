import React from 'react'
import MeasureButton from './MeasureButton'

import beerIcon from '@iconify/icons-mdi/beer'
import coffeeIcon from '@iconify/icons-mdi/coffee'
import glassMug from '@iconify/icons-mdi/glass-mug'
import bottleIcon from '@iconify/icons-mdi/bottle-soda-classic'

import { Container, MeasureWrapper } from './styles'

const Body: React.FC = () => {
  return (
    <Container>
      <MeasureWrapper>
        <MeasureButton icon={coffeeIcon} measure={200} type="café" />
        <MeasureButton icon={beerIcon} measure={300} type="xícara" />
      </MeasureWrapper>
      <MeasureWrapper>
        <MeasureButton icon={glassMug} measure={400} type="leite" />
        <MeasureButton icon={bottleIcon} measure={500} type="garrafa" />
      </MeasureWrapper>
    </Container>
  )
}

export default Body
