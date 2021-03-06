import React from 'react'
import ReactDOM from 'react-dom'

import Root from './Root'
import App from 'components/App'
import './index.scss'

import { initApi } from './api'
import { config } from 'config'

initApi(config.API_KEY)

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById('root')
)
