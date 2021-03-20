import styled from 'styled-components'

export const Container = styled.div`
  background: ${props => `linear-gradient(to bottom, ${props.theme.colors.lightBlue}, ${props.theme.colors.darkBlue})`};
  width: 100%;
  height: 60%;
`
