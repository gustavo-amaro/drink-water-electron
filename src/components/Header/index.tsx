import React, { useCallback, useContext } from 'react'
import { MdCheckBoxOutlineBlank, MdClose, MdRemove } from 'react-icons/md'

import AnimatedNumber from 'react-animated-number'

import { remote } from 'electron'
import os from 'os'

import {
  Container,
  ActionButton,
  ActionContainer,
  QuantityInfo,
  QuatityContainer
} from './styles'
import ProgressWave from './ProgressWave'
import { AppContext } from '../../context/AppContext'

const Header: React.FC = () => {
  const context = useContext(AppContext)

  const handleCloseWindow = useCallback(() => {
    const window = remote.getCurrentWindow()

    window.close()
  }, [])

  const handleMaximize = useCallback(() => {
    const window = remote.getCurrentWindow()

    const isMacSystem = os.platform() === 'darwin'
    if (isMacSystem) {
      return window.setFullScreen(!window.isFullScreen())
    }

    const isMaximized = window.isMaximized()

    if (!isMaximized) {
      window.maximize()
    } else {
      window.unmaximize()
    }
  }, [])

  const handleMinimize = useCallback(() => {
    const window = remote.getCurrentWindow()

    window.minimize()
  }, [])

  return (
    <Container>
      <ActionContainer>
        <ActionButton onClick={handleMinimize}>
          <MdRemove />
        </ActionButton>
        <ActionButton onClick={handleMaximize}>
          <MdCheckBoxOutlineBlank />
        </ActionButton>
        <ActionButton onClick={handleCloseWindow}>
          <MdClose />
        </ActionButton>
      </ActionContainer>

      <ProgressWave />

      <QuatityContainer>
        <QuantityInfo>
          <span>Faltam:</span>
          <span className="quantity">
            <AnimatedNumber
              style={{
                transition: '0.8s ease-out',
                transitionProperty: 'background-color, color, opacity',
                fontSize: 24
              }}
              value={context?.waterRemaining}
              formatValue={(n: number) => `${n}`}
              duration={500}
              stepPrecision={0}
            />
            ml
          </span>
        </QuantityInfo>
        <QuantityInfo>
          <span>Meta:</span>
          <span className="quantity">{context?.waterGoal}ml</span>
        </QuantityInfo>
      </QuatityContainer>
    </Container>
  )
}

export default Header
