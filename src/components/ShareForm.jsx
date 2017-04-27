import React from 'react'
import { translate } from '../lib/I18n'
const data = document.querySelector('[role=application]').dataset

class ShareForm extends React.Component {
    propTypes: {
        instance: React.PropTypes.string;
    }
    constructor(props) {
        super(props);
        var instance = data.cozyDomain

        if(data.cozyDomain.indexOf(':8080') > -1) {
            instance = "http://"+instance
        }
        else {
            instance = "https://"+instance
        }
        console.log('instance : ', instance)
        this.state = {
            instance: instance,
            docType: '',
            id: '',
            selector: '',
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
        let promise = cozy.client.settings.getInstance()
        promise.then(function(res) {
            console.log('promise res : ', JSON.stringify(res))
        })
        return (
            <div>
                <h1>Sharotronic 2000</h1>
                <form onSubmit={this.onSubmit} className={'ShareForm'}>
                    <h3>Create sharing</h3>
                    <label>Share what?</label>
                    <input
                        type='text'
                        name="instance"
                        placeholder={this.state.instance}
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
                    <input
                        type='text'
                        name="selector"
                        placeholder='Selector'
                        value={this.state.selector}
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
                        <label>
                            Master-Master
                            <input
                                name="sharingType"
                                value="master-master"
                                type="checkbox"
                                onChange={this.handleInputChange} />
                        </label>
                    </div>
                    <button type='submit'>
                        Share it!
                    </button>
                </form>
                <hr></hr>
            </div>
        )
    }
    sendFormData() {


        var perm = {
            tests: {
                description: "desc",
                type: this.state.docType,
                values: [this.state.id]
                selector: this.state.selector
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

const Share = ({ t }) => (
    React.createElement(ShareForm, {})
)

export default translate()(ShareForm)
