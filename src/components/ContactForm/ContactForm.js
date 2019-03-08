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
        let { name, phone, email, message } = this.state.form
        return (
            <div>
                <div className={ classes.content }>
                    <form onSubmit={ this.handleSubmit }>
                        <input 
                            name="name"
                            placeholder="NAME:"
                            onChange={ this.handleChange }
                            value={ name }
                        />
                        <div className={ classes.flex }>
                            <input 
                                name="phone"
                                placeholder="PHONE:"
                                onChange={ this.handleChange }
                                value={ phone }
                            />
                            <input
                                name="email"
                                placeholder="E-MAIL:"
                                onChange={ this.handleChange }
                                value={ email }
                            />
                        </div>
                        <textarea 
                            name="message"
                            placeholder="MESSAGE:"
                            onChange={ this.handleChange }
                            value={ message }
                        />
                        <button>SEND MESSAGE</button>
                    </form>
                </div>
            </div>
        )
    }
}