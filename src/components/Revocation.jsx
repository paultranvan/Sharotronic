import React from 'react'
import { translate } from '../lib/I18n'
import classNames from 'classnames'

const appData = document.querySelector('[role=application]').dataset

class RevocationForm extends React.Component {
    constructor(props) {
        super(props)
        var instance = appData.cozyDomain
        if(instance != "cozy.tools:8080") {
            instance = "https://"+instance
        }
        else {
            instance = "http://"+instance
        }
        this.state = {
            instance: instance,
            sharingid: '',
            clientid: '',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onRevokeSharingSubmit = this.onRevokeSharingSubmit.bind(this);
        this.onRevokeRecipientSubmit = this.onRevokeRecipientSubmit.bind(this);

    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({[name]: value});
    }
    onRevokeSharingSubmit(event) {
        event.preventDefault()
        this.setState({}, this.revokeSharing);
    }
    onRevokeRecipientSubmit(event) {
        event.preventDefault()
        this.setState({}, this.revokeRecipient);
    }


    render() {
        return (
          <div>
            <div>
                <h3>Revoke Sharing</h3>
                <form onSubmit={this.onRevokeSharingSubmit}>
                    <div>
                    <label>Which sharing?</label>
                    <input
                        type='text'
                        name="instance"
                        placeholder={this.state.instance}
                        value={this.state.instance}
                        onInput={this.handleInputChange} >
                    </input>
                    <input
                        type='text'
                        name="sharingid"
                        placeholder='SharingID'
                        value={this.state.sharingid}
                        onInput={this.handleInputChange} >
                    </input>
                    </div>
                    <button type='submit'>
                        Revoke Sharing
                    </button>
                </form>
              </div>
              <div>
                  <h3>Revoke Recipient</h3>
                  <form onSubmit={this.onRevokeRecipientSubmit}>
                      <div>
                      <label>Which sharing?</label>
                      <input
                          type='text'
                          name="instance"
                          placeholder={this.state.instance}
                          value={this.state.instance}
                          onInput={this.handleInputChange} >
                      </input>
                      <input
                          type='text'
                          name="sharingid"
                          placeholder='SharingID'
                          value={this.state.sharingid}
                          onInput={this.handleInputChange} >
                      </input>
                      <input
                          type='text'
                          name="clientid"
                          placeholder='ClientID'
                          value={this.state.clientid}
                          onInput={this.handleInputChange} >
                      </input>
                      </div>
                      <button type='submit'>
                          Revoke Recipient
                      </button>
                  </form>
                </div>
          </div>
        )
    }

    revokeSharing() {
      var sid = this.state.sharingid
      console.log("revoke sharing " + sid)
      var target = this.state.instance+"/sharings/" + sid
      this.sendXHR("DELETE", target, null, function(res) {
          console.log("revoke sharing : ", JSON.stringify(res))
      })
    }

    revokeRecipient () {
      var sid = this.state.sharingid
      var cid = this.state.clientid
      console.log("revoke " + cid + " for sharing " + sid)
      var target = this.state.instance+"/sharings/" + sid + "/recipient/" + cid
      this.sendXHR("DELETE", target, null, function(res) {
          console.log("revoke recipient : ", JSON.stringify(res))
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
      xmlhttp.setRequestHeader('Authorization', 'Bearer ' + appData.cozyToken);
      xmlhttp.send(JSON.stringify(data));
    }
}

const Revocation = ({ t }) => (
    React.createElement(RevocationForm, {})
)

export default translate()(Revocation)
