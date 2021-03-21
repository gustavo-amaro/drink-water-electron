import React, { useContext } from 'react'
import { Icon } from '@iconify/react'
import beerIcon from '@iconify/icons-mdi/beer'
import coffeeIcon from '@iconify/icons-mdi/coffee'
import glassMug from '@iconify/icons-mdi/glass-mug'
import bottleIcon from '@iconify/icons-mdi/bottle-soda-classic'

import { IconifyIcon } from '@iconify/types'

import { Container } from './styles'
import { AppContext } from '../../context/AppContext'

const DrinkButton: React.FC = () => {
  const appContext = useContext(AppContext)

  function getIcon (): IconifyIcon {
    let icon = beerIcon
    if (appContext?.measure === 200) {
      icon = coffeeIcon
    } else if (appContext?.measure === 300) {
      icon = beerIcon
    } else if (appContext?.measure === 400) {
      icon = glassMug
    } else if (appContext?.measure === 500) {
      icon = bottleIcon
    }

    return icon
  }

  return (
    <Container onClick={appContext?.increaseConsumption}>
      <Icon icon={getIcon()} />
    </Container>
  )
}

export default DrinkButton
