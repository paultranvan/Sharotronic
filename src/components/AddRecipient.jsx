import React from 'react'
import { translate } from '../lib/I18n'
import classNames from 'classnames'

const data = document.querySelector('[role=application]').dataset

class AddRecipientForm extends React.Component {
    propTypes: {
        instance: React.PropTypes.string;
    }

    constructor(props) {
        super(props);
        var instance = data.cozyDomain
        if(instance != "cozy.tools:8080") {
            instance = "https://"+instance
        }
        else {
            instance = "http://"+instance
        }
        this.state = {
            instance: instance,
            sharingid: '',
            recid: '',
            email: '',
            url: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({[name]: value});
    }
    onSubmit(event) {
        event.preventDefault()
        console.log("state : ", this.state)
        this.setState({}, this.createRecipient);
    }


    render() {
        return (
            <div>
                <h3>Add recipient to sharing</h3>
                <form onSubmit={this.onSubmit}>
                    <div>
                    <label>Which sharing?</label>
                    <input
                        type='text'
                        name="sharingid"
                        placeholder='Sharing DocID'
                        value={this.state.sharingid}
                        onInput={this.handleInputChange} >
                    </input>
                    </div>
                    <div>
                    <label>Which recipient?</label>
                    <input
                        type='text'
                        name="recid"
                        placeholder='RecipientID'
                        value={this.state.recid}
                        onInput={this.handleInputChange} >
                    </input>
                    <label> OR (create new one)</label>
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
                    <button type='submit'>
                        Add Recipient
                    </button>
                </form>
            </div>
        )
    }
    createRecipient() {
        var sid = this.state.sharingid
        var rid = this.state.recid
        if(rid != '') {
            this.addRecipient(rid)
        } else {
            var target = this.state.instance+"/sharings/recipient"
            var args = {
                email: this.state.email,
                url: this.state.url
            }
            var _this = this
            this.sendXHR("POST", target, args, function(res) {
                console.log("create rec : ", JSON.stringify(res))
                var rid = res.id
                _this.addRecipient(rid)
            })
        }
    }

    addRecipient(rid) {
        var target = this.state.instance + "/sharings/"+sid
        var args = {
            ID: rid,
            Type: "io.cozy.recipients"
        }
        this.sendXHR("PUT", target, args, function(res) {
            console.log("res add : ", JSON.stringify(res))
        })
    }

    sendXHR(method, target, data, callback) {
        var xmlhttp = new XMLHttpRequest();
        var _this = this;
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState === 4) {
                var response = xmlhttp.responseText;
                if (xmlhttp.status === 200 || xmlhttp.status === 201) {
                    var data = JSON.parse(response).data
                    callback(data)
                }
                else {
                    console.log("error : ", JSON.stringify(response))
                }
            }
        };
        xmlhttp.open(method, target, true);
        xmlhttp.setRequestHeader('Content-type', 'application/json');
        xmlhttp.send(JSON.stringify(data));
    }
}

const AddRecipient = ({ t }) => (
    React.createElement(AddRecipientForm, {})
)

export default translate()(AddRecipient)
