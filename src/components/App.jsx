import styles from '../styles/app'

import React from 'react'
import { translate } from '../lib/I18n'
import classNames from 'classnames'
import AddRecipient from './AddRecipient'
import Share from './ShareForm'

const App = ({ t }) => (
    React.createElement('div', {},
        React.createElement(Share, {}),
        React.createElement(AddRecipient, {})
    )
)

export default translate()(App)
