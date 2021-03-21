import styled from 'styled-components'

export const Container = styled.button`
  border: none;
  background: ${props => props.theme.colors.primary};
  color: white;
  font-size: 30px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  cursor: pointer;
  outline: none;
  &:active{
    outline: none;
  }
`
