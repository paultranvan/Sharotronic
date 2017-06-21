/* global cozy */
import 'babel-polyfill'

import './styles/main'

import React from 'react'
import { render } from 'react-dom'
import { I18n } from './lib/I18n'

import App from './components/App'

const context = window.context
const lang = document.documentElement.getAttribute('lang') || 'en'

document.addEventListener('DOMContentLoaded', () => {
  const data = document.querySelector('[role=application]').dataset
  cozy.client.init({
    cozyURL: '//' + data.cozyDomain,
    token: data.cozyToken
  })

  cozy.bar.init({
    appName: data.cozyAppName,
    iconPath: data.cozyIconPath
  })

  render((
    <I18n context={context} lang={lang}>
      <App />
    </I18n>
  ), document.querySelector('[role=application]'))
})
