import React from "react";
import "./Modal.css";

const Modal = (props) => {
  return (
    <div className="modal" onClick={props.onClick}>
      <p className="center">
        Your form has been submitted, We will get back to you ASAP 👍!
      </p>
    </div>
  );
};

export default Modal;
