import React, { Component } from "react";
import classes from "./ContactForm.module.css";
import Axios from "axios";

export default class ContactForm extends Component {
  state = {
    form: {
      name: {
        text: "",
        valid: true
      },
      email: {
        text: "",
        valid: true
      },
      organization: {
        text: "",
        valid: true
      },
      message: {
        text: "",
        valid: true
      }
    },
    sending: false
  };

  handleChange = event => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: {
          text: event.target.value,
          valid: true
        }
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  defaultState = () => {
    return {
      form: {
        name: {
          text: "",
          valid: true
        },
        email: {
          text: "",
          valid: true
        },
        organization: {
          text: "",
          valid: true
        },
        message: {
          text: "",
          valid: true
        }
      },
      sending: false
    };
  };

  handleSubmit = event => {
    event.preventDefault();
    let { email, message, name, organization } = this.state.form;
    let form = {
      email: { ...email },
      message: { ...message },
      name: { ...name },
      organization: { ...organization }
    };
    var error = false;
    if (this.sending) return;

    if (email.text === "") {
      form.email.valid = false;
      error = true;
    }
    if (name.text === "") {
      form.name.valid = false;
      error = true;
    }
    if (organization.text === "") {
      form.organization.valid = false;
      error = true;
    }
    if (message.text === "") {
      form.message.valid = false;
      error = true;
    }
    this.setState({ form });
    if (error) return;

    console.log("sending");
    this.setState({
      sending: true
    });
    let formData = new FormData();
    formData.set("email", email.text);
    formData.set("name", name.text);
    formData.set("organization", organization.text);
    formData.set("message", message.text);
    Axios.post("https://www.disarmamentsolutions.com/contact.php", formData)
      .then(response => {
        console.log("response", response);
        if (response.data === "success") {
          setTimeout(() => this.setState(this.defaultState()), 2000);
        } else throw new Error(response.data);
      })
      .catch(error => {
        console.log("error", error);
      });
  };

  render() {
    let { contactDetails } = this.props;
    let { name, email, organization, message } = this.state.form;
    let { sending } = this.state;
    return (
      <div>
        <div className={classes.content}>
          <form onSubmit={this.handleSubmit}>
            <label>{contactDetails.name} *</label>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={name.text}
              className={name.valid ? "" : classes.invalid}
            />
            <label>{contactDetails.organization} *</label>
            <input
              type="text"
              name="organization"
              onChange={this.handleChange}
              value={organization.text}
              className={organization.valid ? "" : classes.invalid}
            />
            <label>{contactDetails.email} *</label>
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              value={email.text}
              className={email.valid ? "" : classes.invalid}
            />
            <label>{contactDetails.message} *</label>
            <textarea
              name="message"
              onChange={this.handleChange}
              value={message.text}
              className={message.valid ? "" : classes.invalid}
            />
            <div className={classes.button}>
              <button
                onClick={this.handleSubmit}
                className={sending ? classes.disabled : ""}
              >
                {sending ? contactDetails.sending : contactDetails.submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
