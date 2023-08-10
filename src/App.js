import "./App.css";
import { useEffect, useRef, useState } from "react";
import Messages from "./Components/Messages";
import Input from "./Components/Input";
import LoginInput from "./Components/LoginInput";
import logout from "./Icons/logout.png";

function App() {
  const droneRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [thisUser, setThisUser] = useState("");

  const sendMessage = (message) => {
    droneRef.current.publish({
      room: "observable-room",
      message: {
        text: message,
        member: thisUser.member,
        avatar: thisUser.avatar,
      },
    });
  };

  const logIn = (color, nickname, avatar) => {
    setThisUser({
      member: { color: color, username: nickname, avatar: avatar },
    });
  };

  const logOut = () => {
    setThisUser("");
    setMessages([]);
  };

  useEffect(() => {
    const drone = new window.Scaledrone("ZIqkyZn5IYMnyVR7");
    droneRef.current = drone;

    drone.on("open", (error) => {
      if (error) {
        return console.log(error);
      }
    });

    const room = drone.subscribe("observable-room");
    room.on("message", (message) => {
      console.log(message);
      console.log(message.clientId);
      setMessages((prevMessages) => [...prevMessages, message.data]);
    });

    return () => {
      room.unsubscribe();
    };
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <h1>HeyApp</h1>
        <button onClick={() => logOut()}>
          <img src={logout} alt="logout icon" />
        </button>
      </div>
      {thisUser === "" ? (
        <LoginInput logIn={logIn} />
      ) : (
        <>
          <Messages messages={messages} currentMember={thisUser.member} />
          <Input sendMessage={sendMessage} />
        </>
      )}
    </div>
  );
}

export default App;
