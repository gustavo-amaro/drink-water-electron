import React from 'react'
import Wave from '@ahwui/react-wave'

import { Container, ProgressInfoContainer } from './styles'

const ProgressWave: React.FC = () => {
  return (
    <Container>
      <Wave
        radius={100}
        progress={58}
        borderColor={'#fff'}
        color={'#0098FA'}
        lineWidth={5}
        textColor={'#fff'}
      >
        <ProgressInfoContainer>
          <span className="description">Consumo</span>
          <span>1605ml</span>
        </ProgressInfoContainer>
      </Wave>
    </Container>
  )
}

export default ProgressWave
