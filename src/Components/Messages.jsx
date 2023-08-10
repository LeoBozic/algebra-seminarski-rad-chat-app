import React, { useEffect, useRef } from "react";

function renderMessage(message, currentMember) {
  const { member, text } = message;
  const className =
    member.username === currentMember.username &&
    member.color === currentMember.color &&
    member.avatar === currentMember.avatar
      ? "Messages-message currentMember"
      : "Messages-message";
  return (
    <li className={className}>
      <img
        alt="avatar"
        src={member.avatar}
        className="avatar"
        style={{ backgroundColor: member.color }}
      />
      <div className="Message-content">
        <div className="username">{member.username}</div>
        <div className="text">{text}</div>
      </div>
    </li>
  );
}

function Messages({ messages, currentMember }) {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <ul className="Messages-list">
      {messages.map((message) => renderMessage(message, currentMember))}
      <div ref={endRef} />
    </ul>
  );
}

export default Messages;
