import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: ${props => props.theme.backgrounds.light};
  position: absolute;
  flex-direction: column;
  align-items: center;
`
