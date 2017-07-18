import styles from '../styles/app'

import React from 'react'
import { translate } from '../lib/I18n'
import classNames from 'classnames'
import AddRecipient from './AddRecipient'
import GetSharing from './GetSharing'
import Revocation from './Revocation'
import Share from './ShareForm'
import DestFolder from './DestFolder'
import Tips from './Tips'

const App = ({ t }) => (
    React.createElement('div', {},
        React.createElement(Share, {}),
        React.createElement(GetSharing, {}),
        React.createElement(AddRecipient, {}),
        React.createElement(Revocation, {}),
        React.createElement(DestFolder, {}),
        React.createElement(Tips, {})
    )
)

export default translate()(App)
