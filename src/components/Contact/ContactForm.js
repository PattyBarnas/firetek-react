import React from "react";
import { useRef, useState } from "react";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";

const publicKey = "qm_baMBq4t7rgLwj_";
const templateId = "template_5xmbk0n";
const serviceId = "service_9ccn71t";

const isEmpty = (value) => value.trim() === "";
const isEmail = (value) =>
  value.trim() !== "" && value.length > 5 && value.includes("@");

const ContactForm = () => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    number: true,
    email: true,
    message: true,
  });
  const [didSubmit, setDidSubmit] = useState(false);

  const fullNameRef = useRef();
  const numberRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const form = useRef();

  const sendEmailHandler = (e) => {
    e.preventDefault();

    let enteredName = fullNameRef.current.value;
    let enteredNumber = numberRef.current.value;
    let email = emailRef.current.value;
    let message = messageRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredNumberIsValid = !isEmpty(enteredNumber);
    const enteredEmailIsValid = isEmail(email);
    const enteredMessageIsValid = !isEmpty(message);
    setFormInputsValidity({
      name: enteredNameIsValid,
      number: enteredNumberIsValid,
      email: enteredEmailIsValid,
      message: enteredMessageIsValid,
    });

    const formIsValid =
      enteredEmailIsValid &&
      enteredNumberIsValid &&
      enteredMessageIsValid &&
      enteredNameIsValid;

    if (!formIsValid) {
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    fullNameRef.current.value =
      numberRef.current.value =
      emailRef.current.value =
      messageRef.current.value =
        "";

    setDidSubmit(true);
  };

  const nameControlClasses = `control ${
    formInputsValidity.name ? "" : "control error"
  }`;
  const emailControlClasses = `control ${
    formInputsValidity.email ? "" : "error"
  }`;
  const numberControlClasses = `control ${
    formInputsValidity.number ? "" : "error"
  }`;
  const messageControlClasses = `control ${
    formInputsValidity.message ? "" : "error"
  }`;

  return (
    <form onSubmit={sendEmailHandler} ref={form}>
      <div className="inputContainer">
        <label htmlFor="fullName" className="label">
          Full Name
        </label>
        <input
          className={nameControlClasses}
          name="from_name"
          type="text"
          id="fullName"
          ref={fullNameRef}
        />
        {!formInputsValidity.name && (
          <p className="center invalid-input">Please enter a valid name!</p>
        )}
      </div>
      <div className="inputContainer">
        <label htmlFor="phone-number" className="label">
          Phone Number
        </label>
        <input
          className={numberControlClasses}
          type="text"
          id="phone-number"
          name="phone_number"
          ref={numberRef}
        />
        {!formInputsValidity.number && (
          <p className="center invalid-input">
            Please enter a valid phone number!
          </p>
        )}
      </div>
      <div className="inputContainer">
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          className={emailControlClasses}
          type="text"
          id="email"
          name="email"
          ref={emailRef}
        ></input>
        {!formInputsValidity.email && (
          <p className="center invalid-input">Your email must contain '@'</p>
        )}
      </div>
      <div className="inputContainer">
        <label htmlFor="message" className="label">
          Message
        </label>
        <textarea
          className={messageControlClasses}
          type="text"
          id="message"
          name="message"
          rows="6"
          cols="5"
          ref={messageRef}
        ></textarea>
        {!formInputsValidity.message && (
          <p className="center invalid-input">Please enter a message!</p>
        )}
      </div>
      <button className="btn-send-msg">Send</button>
    </form>
  );
};

export default ContactForm;
