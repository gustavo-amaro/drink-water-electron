import React, { useContext } from 'react'

import { Icon } from '@iconify/react'

import { Container, InfoContainer } from './styles'

import { IconifyIcon } from '@iconify/types'
import { AppContext } from '../../../context/AppContext'

interface MeasureButtonProps {
  icon: IconifyIcon;
  measure: number;
  type: string;
}

const MeasureButton: React.FC<MeasureButtonProps> = ({
  icon,
  measure,
  type
}) => {
  const appContext = useContext(AppContext)
  return (
    <Container onClick={() => appContext?.changeMeasure(measure)}>
      <span className="icon">
        <Icon icon={icon} />
      </span>
      <InfoContainer>
        <h1>{measure}ml</h1>
        <span>{type}</span>
      </InfoContainer>
    </Container>
  )
}

export default MeasureButton
