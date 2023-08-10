import React, { useState } from "react";
import sendIcon from "../Icons/send.png";
import "../App.css";

function Input({ sendMessage }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      sendMessage(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="messageForm">
        <input
          type="text"
          value={text}
          className="messageInput"
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="sendButton">
          <img src={sendIcon} alt="send" />
        </button>
      </form>
    </div>
  );
}

export default Input;
