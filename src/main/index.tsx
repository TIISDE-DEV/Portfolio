import { theme } from '@/context/theme'

import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <ThemeProvider theme={ theme }>
  </ThemeProvider>,
  document.getElementById('main')
)
