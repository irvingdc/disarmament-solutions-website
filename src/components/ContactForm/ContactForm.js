import React, { Component } from "react"
import classes from "./ContactForm.module.css"

export default class ContactForm extends Component{

    state={
        form: {
            name: "",
            email: "",
            phone: "",
            message: "",
        }
    }

    handleChange = event => {
        this.setState({
            form: {
                ...this.state.form,
                [event.target.name]: event.target.value,
            }
        })
    }

    handleSubmit = event => {
        event.preventDefault()
    }
    render(){
        let { contactDetails } = this.props
        let { name, phone, email, message } = this.state.form
        return (
            <div>
                <div className={ classes.content }>
                    <form onSubmit={ this.handleSubmit }>
                        <label>{ contactDetails.name } *</label>
                        <input 
                            name="name"
                            onChange={ this.handleChange }
                            value={ name }
                        />
                        <label>{ contactDetails.organization } *</label>
                        <input 
                            name="organization"
                            onChange={ this.handleChange }
                            value={ phone }
                        />
                        <label>{ contactDetails.email } *</label>
                        <input
                            name="email"
                            onChange={ this.handleChange }
                            value={ email }
                        />
                        <label>{ contactDetails.message } *</label>
                        <textarea 
                            name="message"
                            onChange={ this.handleChange }
                            value={ message }
                        />
                        <div className={ classes.button }>
                            <button>{ contactDetails.submit }</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}