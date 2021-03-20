import React from 'react'

import { Icon } from '@iconify/react'

import { Container, InfoContainer } from './styles'

import { IconifyIcon } from '@iconify/types'

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
  return (
    <Container>
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
