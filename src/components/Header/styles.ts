import styled from 'styled-components'

import { defaultTheme } from '../../styles/theme'
export const Container = styled.div`
  background: ${props => `linear-gradient(to bottom, ${props.theme.colors.lightBlue}, ${props.theme.colors.darkBlue})`};
  width: 100%;
  height: 60%;
  position: relative;
`

interface ActionContainerProps {
  shouldUseMacOSWindowActions: boolean
}

export const ActionContainer = styled.div<ActionContainerProps>`
  display: flex;
  position: absolute;
  right: 0px;
  top: 0px;
  padding: 0 10px;
  width: 100%;
  justify-content: ${props => props.shouldUseMacOSWindowActions ? 'flex-start' : 'flex-end'};
  align-items: center;
  height: 28px;
  -webkit-user-select: none;
  -webkit-app-region: drag;
  @media (prefers-color-scheme: dark) {
    & { 
      background: #333; 
      color: white;
      button{
        color: white;
      }
    }
  }

  @media (prefers-color-scheme: light) {
    & { 
      background: #ddd; 
      color: black; 
    }
  }
`

export const ActionButton = styled.button`
  background: none;
  border: none;
  outline: none;
  font-size: 20px;
  margin-left: 8px;
  -webkit-app-region: no-drag;
  &:active{
    outline: none;
  }
`

interface MacActionButtonProps {
  color: 'close' | 'minimize' | 'maximize'
}

const colors = {
  close: defaultTheme.colors.red,
  minimize: defaultTheme.colors.yellow,
  maximize: defaultTheme.colors.green
}

export const MacActionButton = styled.button<MacActionButtonProps>`
  background: ${props => colors[props.color]};
  -webkit-app-region: no-drag;
  border: 0;
  width: 12px;
  height: 12px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  & + button {
    margin-left: 8px;
  }
  svg {
    width: 8px;
    height: 8px;
    opacity: 0.9;
    display: none;
  }
  &:hover svg {
    display: block;
  }
  &:active {
    opacity: 0.6;
  }
  &:focus {
    outline: 0;
  }
`

export const QuantityInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  span{
    font-size: 18px;
  }
  .quantity{
    font-size: 24px;
    transition: all 3s;
  }
`

export const QuatityContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  position: absolute;
  left: 10%;
  bottom: 25%;
`
