import styles from '../styles/app'

import React from 'react'
import { translate } from '../lib/I18n'
import classNames from 'classnames'



class ShareForm extends React.Component {
    propTypes: {
        instance: React.PropTypes.string
    }
    constructor(props) {
        super(props);
        this.state = {
            instance: props.instance,
            docType: '',
            id: '',
            email: '',
            url: '',
            sharingType: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    handleInputChange(event) {
        const target = event.target;

        if(target.type === 'checkbox') {
            if(!target.checked){
                return;
            }
        }
        const value = target.value;
        const name = target.name;

        this.setState({[name]: value});


    }
    onSubmit(event) {
        event.preventDefault()
        this.setState({}, this.sendFormData);
    }

    render() {
        return (
            <div>
                <h1>Sharotronic 2000</h1>
                <form onSubmit={this.onSubmit} className={'ShareForm'}>
                    <label>Share what?</label>
                        <input
                            type='text'
                            name="instance"
                            placeholder={this.props.instance}
                            value={this.state.instance}
                            onInput={this.handleInputChange} >
                        </input>
                    <input
                        type='text'
                        name="docType"
                        placeholder='DocType'
                        value={this.state.docType}
                        onInput={this.handleInputChange} >
                    </input>
                    <input
                        type='text'
                        name="id"
                        placeholder='ID'
                        value={this.state.id}
                        onInput={this.handleInputChange} >
                    </input>
                    <div>
                        <label>With who?</label>
                        <input
                            type='text'
                            name="email"
                            placeholder='Email'
                            value={this.state.email}
                            onInput={this.handleInputChange} >
                        </input>
                        <input
                            type='text'
                            name="url"
                            placeholder='URL'
                            value={this.state.url}
                            onInput={this.handleInputChange} >
                        </input>
                    </div>
                    <div>
                        <label>
                            One-shot
                            <input
                                name="sharingType"
                                value="one-shot"
                                type="checkbox"
                                onChange={this.handleInputChange} />
                        </label>
                        <label>
                            Master-slave
                            <input
                                name="sharingType"
                                value="master-slave"
                                type="checkbox"
                                onChange={this.handleInputChange} />
                        </label>
                    </div>
                    <button type='submit'>
                        Share it!
                    </button>

                </form>
            </div>

        )
    }
    sendFormData() {

        var perm = {
            tests: {
                description: "desc",
                type: this.state.docType,
                verbs: ["GET", "POST", "PUT"],
                values: [this.state.id]
            }
        }

        var formData = {
            sharing_type: this.state.sharingType,
            permissions: perm,
            desc: "Share it share it !"
        }

        var recipient = {
            email: this.state.email,
            url: this.state.url
        }
        console.log("instance : ", this.state.instance)
        
        var _this = this;
        var recipientTarget = this.state.instance + "/sharings/recipient"
        // Create the recipient
        this.sendXHR(recipientTarget, recipient, function(res) {
            var rec = {
                type: "io.cozy.recipients",
                id: res.id
            };
            var recipients = [{
                recipient: rec
            }];
            formData.recipients = recipients
            console.log("data : ", JSON.stringify(formData))
            var sharingTarget = _this.state.instance + "/sharings/"
            // Create the sharing
            _this.sendXHR(sharingTarget, formData, function(res) {
                console.log("Sharing ok : ", JSON.stringify(res))
            })
        })


    }

    sendXHR(target, data, callback) {
        var xmlhttp = new XMLHttpRequest();
        var _this = this;
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState === 4) {
                var response = JSON.parse(xmlhttp.responseText);
                if (xmlhttp.status === 200 || xmlhttp.status === 201) {
                    callback(response.data)
                }
                else {
                    console.log("error : ", response.errors)
                }
            }
        };
        xmlhttp.open('POST', target, true);
        xmlhttp.setRequestHeader('Content-type', 'application/json');
        xmlhttp.send(JSON.stringify(data));
    }
}

const App = ({ t }) => (
    React.createElement(ShareForm, {instance: "http://cozy1.local:8080"})
)

export default translate()(App)
