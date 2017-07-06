import React from 'react'
import { translate } from '../lib/I18n'
import classNames from 'classnames'

const data = document.querySelector('[role=application]').dataset

class GetForm extends React.Component {
    constructor(props) {
        super(props)
        var instance = data.cozyDomain
        if(instance != "cozy.tools:8080") {
            instance = "https://"+instance
        }
        else {
            instance = "http://"+instance
        }
        this.state = {
            instance: instance,
            sharingid: ''
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
        this.setState({}, this.sendFormData);
    }

    render() {
        return (
          <div>
            <h3>Get Sharing</h3>
            <form onSubmit={this.onSubmit}>
                <div>
                <label>Which sharing? </label>
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
                    Get Sharing
                </button>
            </form>
            <hr></hr>
          </div>
        )
    }

    sendFormData() {
      var sid = this.state.sharingid
      console.log("get sharing " + sid)
      var target = this.state.instance+"/sharings/" + sid
      this.sendXHR("GET", target, null, function(res) {
          console.log("get sharing : ", JSON.stringify(res))
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
      xmlhttp.setRequestHeader('Authorization', 'Bearer ' + data.cozyToken);
      xmlhttp.send(JSON.stringify(data));
    }
}

const GetSharing = ({ t }) => (
    React.createElement(GetForm, {})
)

export default translate()(GetSharing)
