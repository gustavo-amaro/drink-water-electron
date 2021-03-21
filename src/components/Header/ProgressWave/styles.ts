import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  position: absolute;
  top: 10%;
  left: calc(50% - 102px); 
`

export const ProgressInfoContainer = styled.div`
    font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
    span.description{
        font-size: 18px;
    }
`
