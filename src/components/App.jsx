import styles from '../styles/app'

import React from 'react'
import { translate } from '../lib/I18n'
import classNames from 'classnames'


var RecipientForm = React.createClass({
    propTypes: {
        email: React.PropTypes.string.isRequired,
        url: React.PropTypes.string.isRequired
    },
    onEmailInput: function(e) {
        this.props.email = e.target.value
    },
    onUrlInput: function(e) {
        this.props.url = e.target.value
    },
    render: function() {
        return (
            React.createElement('div', {},
                React.createElement('label', {}, "With who?"),
                React.createElement('input', {
                    type: 'text',
                    placeholder: 'Email',
                    value: this.props.email,
                    onInput: this.onEmailInput,
                }),
                React.createElement('input', {
                    type: 'text',
                    placeholder: 'URL',
                    value: this.props.url,
                    onInput: this.onUrlInput,
                }),
            )
        )
    }
})

var ShareForm = React.createClass({
    propTypes: {
        target: React.PropTypes.string.isRequired,
        docType: React.PropTypes.string.isRequired,
        id: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.func.isRequired,
    },
    onDocTypeInput: function(e) {
        this.props.docType = e.target.value
    },
    onIdInput: function(e) {
        this.props.id = e.target.value
    },
    onSubmit: function(e) {
        //e.preventDefault()
        console.log('LOG submit : ' + this.props.docType)
        console.log('LOG submit : ' + this.props.id)
        //this.props.onSubmit()
    },

    render: function() {
        return (
            React.createElement('form', {method: "POST", action: this.props.target, onSubmit: this.onSubmit, className: 'ShareForm'},
                React.createElement('label', {}, "Share what?"),
                React.createElement('input', {
                    type: 'text',
                    placeholder: 'DocType',
                    value: this.props.docType,
                    onInput: this.onDocTypeInput,
                }),
                React.createElement('input', {
                    type: 'text',
                    placeholder: 'Doc id',
                    value: this.props.id,
                    onInput: this.onIdInput,
                }),
                React.createElement(RecipientForm, {email: "", url: ""}),
                React.createElement('button', {type: 'submit'}, "Share it!")
            )
        )
    },
    sendFormData: function () {
        // Fetch form values.
        var formData = {
            budget: React.findDOMNode(this.refs.budget).value,
            company: React.findDOMNode(this.refs.company).value,
            email: React.findDOMNode(this.refs.email).value
        };

        // Send the form data.
        var xmlhttp = new XMLHttpRequest();
        var _this = this;
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState === 4) {
                var response = JSON.parse(xmlhttp.responseText);
                if (xmlhttp.status === 200 && response.status === 'OK') {
                    _this.setState({ type: 'success', message: 'We have received your message and will get in touch shortly. Thanks!' });
                }
                else {
                    _this.setState({ type: 'danger', message: 'Sorry, there has been an error. Please try again later or send us an email at info@example.com.' });
                }
            }
        };
        xmlhttp.open('POST', 'send', true);
        xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xmlhttp.send(this.requestBuildQueryString(formData));
    },
});

const App = ({ t }) => (
    React.createElement(ShareForm, {
        target: "http://cozy1.local:8080/sharings/",
        docType: "",
        id: "",
        onChange: function(share) {
            console.log('LOG  change')
        }
    })
)

export default translate()(App)
