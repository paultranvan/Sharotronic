import styles from '../styles/app'

import React from 'react'
import { translate } from '../lib/I18n'
import classNames from 'classnames'
import AddRecipient from './AddRecipient'
import Share from './ShareForm'
import Tips from './Tips'

const App = ({ t }) => (
    React.createElement('div', {},
        React.createElement(Share, {}),
        React.createElement(AddRecipient, {}),
        React.createElement(Tips, {})
    )
)

export default translate()(App)
