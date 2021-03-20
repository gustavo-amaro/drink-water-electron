import React from 'react'
import { render } from 'react-dom'
import { GlobalStyle } from './styles/GlobalStyle'
import Main from './components/Main'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme'

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Main />
      <GlobalStyle />
    </ThemeProvider>
  )
}

render(<App />, mainElement)
