import "./Contact.css";
import ContactForm from "./ContactForm";
import React from "react";
import SocialLinks from "./SocialLinks";

const Contact = () => {
  return (
    <React.Fragment>
      <div className="header-text">
        <h5>Got A Question?</h5>
        <p className="contact-message">
          Please leave us a message we'd love to help. We have different social
          media platforms you can reach us on.
        </p>
        <p className="polish-tag">- We speak Polish -</p>
      </div>

      <div className="contact-container">
        <div>
          <ContactForm />
          <p className="contact-message">Or see below! 👇</p>
        </div>
        <div className="social">
          <SocialLinks />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
