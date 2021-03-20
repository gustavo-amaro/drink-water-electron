import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  font-size: 40px;
  .icon{
        color: ${props => props.theme.colors.primary};
    }
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    h1{
        font-size: 18px;
        color: ${props => props.theme.colors.primary};
    }
    span{
        font-size: 16px;
        color: #d8d8d8;
    }
`
