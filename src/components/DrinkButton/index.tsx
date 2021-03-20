import React from 'react'
import { Icon } from '@iconify/react'
import beerIcon from '@iconify/icons-mdi/beer'

import { Container } from './styles'

const DrinkButton: React.FC = () => {
  return (
    <Container onClick={() => alert('bebeu agua')}>
      <Icon icon={beerIcon} />
    </Container>
  )
}

export default DrinkButton
