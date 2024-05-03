import { theme } from '@/context/theme'
import GlobalStyle from '@/presentation/global/globalstyle'
import { Header } from '@/presentation/pages/header/header'
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <ThemeProvider theme={ theme }>
    <GlobalStyle />
    <Header />
    <hr />
  </ThemeProvider>,
  document.getElementById('main')
)
