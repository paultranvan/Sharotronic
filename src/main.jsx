import 'babel-polyfill'

import './styles/main'

import React from 'react'
import { render } from 'react-dom'
import { I18n } from './lib/I18n'

import App from './components/App'

const context = window.context
const lang = document.documentElement.getAttribute('lang') || 'en'

document.addEventListener('DOMContentLoaded', () => {
    const context = window.context
    const root = document.querySelector('[role=application]')
    const data = root.dataset

    cozy.client.init({
        //cozyURL: '//' + data.cozyDomain,
        cozyURL: 'http://cozy1.local:8080',
        oauth: {
            clientParams: {/*...*/},
            scopes: ["io.cozy.files:GET"],
            onRegistered: (client, url) => { /* */ },
            //storage: new cozy.auth.LocalStorage(window.localStorage)
        }
        //token: data.cozyToken
    })

    cozy.bar.init({
        appName: 'sharing',
        lang: data.cozyLocale
    })
    render((
        <I18n context={context} lang={lang}>
            <App />
        </I18n>
    ), document.querySelector('[role=application]'))
})
