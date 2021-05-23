import React, { useContext, useEffect, useState } from 'react'
import Wave from '@ahwui/react-wave'

import AnimatedNumber from 'react-animated-number'

import { Container, ProgressInfoContainer } from './styles'
import { AppContext } from '../../../context/AppContext'
import { ipcRenderer } from 'electron'

const ProgressWave: React.FC = () => {
  const context = useContext(AppContext)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    try {
      const percent = (context?.waterConsumption * 100) / context?.waterGoal
      setTimeout(() => {
        setProgress(percent > 100 ? 100 : percent)
      }, 500)
    } catch (error) {
      setProgress(0)
    }
  }, [context])
  return (
    <Container >
      <Wave
        radius={100}
        progress={progress}
        borderColor={'#fff'}
        color={'#0098FA'}
        lineWidth={5}
        textColor={'#fff'}
      >
        <ProgressInfoContainer>
          <span className="description">Consumo</span>
          <span>
            <AnimatedNumber
              style={{
                transition: '0.8s ease-out',
                transitionProperty: 'background-color, color, opacity',
                fontSize: 24
              }}
              value={context?.waterConsumption}
              formatValue={(n: number) => `${n}`}
              duration={500}
              stepPrecision={0}
            />
            ml
          </span>
        </ProgressInfoContainer>
      </Wave>
    </Container>
  )
}

export default ProgressWave
