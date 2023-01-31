import React from "react";
import { useRef } from "react";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";

const publicKey = "qm_baMBq4t7rgLwj_";
const templateId = "template_5xmbk0n";
const serviceId = "service_9ccn71t";

const isValid = (val) => val.trim() !== "";

const ContactForm = () => {
  const fullNameRef = useRef();
  const numberRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const form = useRef();

  const clearFormHandler = () => {
    let fullName = fullNameRef.current.value;
    let number = numberRef.current.value;

    number = number.toString();
    let email = emailRef.current.value;
    let message = messageRef.current.value;
    if (
      isValid(fullName) &&
      number.length > 8 &&
      isValid(email) &&
      email.includes("@") &&
      isValid(number) &&
      number.length > 8 &&
      isValid(message)
    ) {
      fullNameRef.current.value =
        numberRef.current.value =
        emailRef.current.value =
        messageRef.current.value =
          "";
    } else {
      console.log("error bro");
    }
  };

  const sendEmailHandler = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <form onSubmit={sendEmailHandler} ref={form}>
      <div className="nameInputClasses">
        <label htmlFor="fullName" className="label">
          Full Name
        </label>
        <input
          className="input-form"
          name="from_name"
          type="text"
          id="fullName"
          ref={fullNameRef}
        />
      </div>
      <div className="nameInputClasses">
        <label htmlFor="phone-number" className="label">
          Phone Number
        </label>
        <input
          className="input-form"
          type="text"
          id="phone-number"
          name="phone_number"
          ref={numberRef}
        />
      </div>
      <div className="nameInputClasses">
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          className="input-form"
          type="text"
          id="email"
          name="email"
          ref={emailRef}
        ></input>
      </div>
      <div className="nameInputClasses">
        <label htmlFor="message" className="label">
          Message
        </label>
        <textarea
          className="message-area"
          type="text"
          id="message"
          name="message"
          rows="6"
          cols="5"
          ref={messageRef}
        ></textarea>
      </div>
      <button onClick={clearFormHandler} className="btn-send-msg">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
