import styled from 'styled-components'

export const Container = styled.div`
  background: ${props => `linear-gradient(to bottom, ${props.theme.colors.lightBlue}, ${props.theme.colors.darkBlue})`};
  width: 100%;
  height: 60%;
  -webkit-user-select: none;
  -webkit-app-region: drag;
  position: relative;
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
