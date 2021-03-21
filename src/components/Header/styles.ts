import styled from 'styled-components'

export const Container = styled.div`
  background: ${props => `linear-gradient(to bottom, ${props.theme.colors.lightBlue}, ${props.theme.colors.darkBlue})`};
  width: 100%;
  height: 60%;
  -webkit-user-select: none;
  -webkit-app-region: drag;
`

export const ActionContainer = styled.div`
  display: flex;
  position: absolute;
  right: 10px;
  top: 5px;
`

export const ActionButton = styled.button`
  background: none;
  border: none;
  outline: none;
  color: white;
  font-size: 32px;
  margin-left: 8px;
  -webkit-app-region: no-drag;
  &:active{
    outline: none;
  }
`
