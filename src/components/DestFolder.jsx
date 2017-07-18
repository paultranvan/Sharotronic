import React from 'react'
import { translate } from '../lib/I18n'
import classNames from 'classnames'

const appData = document.querySelector('[role=application]').dataset

class DestForm extends React.Component {
    constructor(props) {
        super(props)
        var instance = appData.cozyDomain
        if(appData.cozyDomain.indexOf(':8080') > -1) {
            instance = "http://"+instance
        }
        else {
            instance = "https://"+instance
        }
        this.state = {
            instance: instance,
            slug: '',
            dirID: ''
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
            <h3>Set destination folder</h3>
            <form onSubmit={this.onSubmit}>
                <div>
                <label>Which directory? </label>
                <input
                    type='text'
                    name="instance"
                    placeholder={this.state.instance}
                    value={this.state.instance}
                    onInput={this.handleInputChange} >
                </input>
                <input
                    type='text'
                    name="slug"
                    placeholder='App slug'
                    value={this.state.slug}
                    onInput={this.handleInputChange} >
                </input>
                <input
                    type='text'
                    name="dirID"
                    placeholder='Destination folder ID'
                    value={this.state.dirID}
                    onInput={this.handleInputChange} >
                </input>
                </div>
                <button type='submit'>
                    Set folder
                </button>
            </form>
            <hr></hr>
          </div>
        )
    }

    sendFormData() {
      var target = this.state.instance+"/sharings/app/destinationDirectory?App_slug="+this.state.slug+"&Doctype=io.cozy.files&Dir_id="+this.state.dirID
      console.log("target : " + target)

      this.sendXHR("POST", target, null, function(res) {
          console.log("set dest : ", JSON.stringify(res))
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

const DestFolder = ({ t }) => (
    React.createElement(DestForm, {})
)

export default translate()(DestFolder)
