import React, { Component, useState } from "react";
import avatar from "../images/avatar.svg";

const Message = ({ image, text, self }) => {
  const [value, setValue] = useState("");
  return (
    <div className={`message${self ? " self" : ""}`}>
      <img className="message__image" alt="" src={avatar} />
      <div className="message__text">{text}</div>
    </div>
  );
};

export default Message;
