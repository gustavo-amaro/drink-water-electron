import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-height: 10vh;
  overflow-y: scroll;
`

export const HistoryItem = styled.div`
    display: flex;
    padding: 5px;
    border-bottom: 1px solid #d8d8d8;
    color: #000;
    margin-top: 5px;
    .consumption{
        margin-right: 10px;
    }
`
