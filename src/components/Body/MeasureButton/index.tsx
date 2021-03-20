import React, { ReactNode } from 'react'

import { Container, InfoContainer } from './styles'

interface MeasureButtonProps {
  Icon: ReactNode;
  measure: number;
  type: string;
}

const MeasureButton: React.FC<MeasureButtonProps> = ({
  Icon,
  measure,
  type
}) => {
  return (
    <Container>
      <Icon />
      <InfoContainer>
        <h1>{measure}ml</h1>
        <span>{type}</span>
      </InfoContainer>
    </Container>
  )
}

export default MeasureButton
