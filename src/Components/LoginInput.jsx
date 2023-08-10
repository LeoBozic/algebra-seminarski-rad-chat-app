import "../App.css";
import React, { useState } from "react";
import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  avatar9,
  avatar10,
} from "../Avatars";

function LoginInput({ logIn }) {
  const [nickname, setNickname] = useState("");
  const [color, setColor] = useState("#ec4a4aaa");
  const [avatar, setAvatar] = useState("");
  const colors = [
    "#ec4a4aaa",
    "#ffd050aa",
    "#32cd32aa",
    "#ffff00aa",
    "#af61afaa",
    "#8cffffaa",
  ];
  const avatars = [
    avatar1,
    avatar6,
    avatar2,
    avatar7,
    avatar3,
    avatar8,
    avatar4,
    avatar9,
    avatar5,
    avatar10,
  ];
  const avatarStyle = {
    backgroundColor: color,
    borderRadius: "20px",
    margin: "10px",
    boxSizing: "border-box",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nickname && color && avatar) {
      logIn(color, nickname, avatar);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="Ovdje unesi svoje ime"
        />
        <div className="loginColors">
          {colors.map((arrColor, index) => (
            <div
              style={{
                backgroundColor: arrColor,
                width: "30px",
                height: "30px",
                margin: "15px",
                boxSizing: "border-box",
                borderRadius: "50%",
              }}
              onClick={() => setColor(arrColor)}
              key={index}
              className={color === arrColor && "selectedColor"}
            ></div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {avatars.map((arrAvatar, index) => (
            <img
              src={arrAvatar}
              alt="avatar"
              height={"80px"}
              width={"80px"}
              style={avatarStyle}
              onClick={() => setAvatar(arrAvatar)}
              key={index}
              className={avatar === arrAvatar && "selectedAvatar"}
            />
          ))}
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginInput;
