import React, { useCallback } from 'react'
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdClose,
  MdRemove
} from 'react-icons/md'

import { remote } from 'electron'
import os from 'os'

import { Container, ActionButton, ActionContainer } from './styles'

const Header: React.FC = () => {
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
    </Container>
  )
}

export default Header
