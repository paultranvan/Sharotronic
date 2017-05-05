import React from 'react'
import { translate } from '../lib/I18n'
import classNames from 'classnames'

const data = document.querySelector('[role=application]').dataset

class ProTips extends React.Component {


    render() {
        return (
            <div>

            <hr></hr>
                <h3>Pro Tips to use Sharotronic 2000</h3>
                <div> Sharotronics 2000 is the ultime app to share
                    everything you always wanted to. Its smooth interface
                    will litterally blow your mind and improve your life.
                    For this, here are few tips to use it:
                </div>
                <ul>
                    <li><strong>Create Sharing</strong></li>
                    <ul>
                        <li> Share what?</li>
                        <ul>
                        <li>The sharer instance url should already be completed.
                            If not (typically in local), you need to provide it.</li>
                        <li>The DocType field is the data type to share, e.g.
                            <i>io.cozy.files</i>, <i>io.cozy.photos.albums</i>, <i>io.cozy.tests</i>, etc</li>
                        <li>The Values field is the id of the shared object.
                            It can be a "static" id, e.g. a file, or a "container" id,
                            e.g. an album</li>
                        <li>The selector field is useful if you need a "container".
                            For example, a photo album will require <i>referenced_by</i>
                        </li>
                        </ul>
                        <li> With who?</li>
                        <ul>
                            <li>You must provide the mail and complete Cozy URL of your recipient.
                                For example, <i>paul@cozycloud.cc</i> and <i>https://paulsharing2.cozy.works</i>
                            </li>
                        </ul>
                    </ul>
                    <li><strong>Add recipient to sharing</strong></li>
                    <ul>
                        <li>Which sharing?</li>
                        <ul>
                            <li>The sharer instance url should already be completed.
                                If not (typically in local), you need to provide it.
                            </li>
                            <li>The Sharing DocID field expect the id of the sharing doc.
                                You can retrieve it from the browser's logs, after the
                                sharing creation. Be careful, it is NOT the
                                SharingID field.
                            </li>
                        </ul>
                        <li>Which recipient?</li>
                        <ul>
                            <li>You can provide a recipientID, or create a new one.
                                For the latter, just give the mail and URL, just like
                                for the sharing creation
                            </li>
                        </ul>
                    </ul>
                </ul>
                <img src="src/assets/science_works.png"/>
            </div>
        )
    }
}

const Tips = ({ t }) => (
    React.createElement(ProTips, {})
)

export default translate()(Tips)
