import React, { useState } from "react";

// I fight for the users

function App() {
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target["0"]) {
      setMessageList((list) => {
        return [
          ...list,
          {
            value: event.target["0"].value,
            date: new Date(),
            username: "superghetti",
          },
        ];
      });
      setMessage("");
    }
  };
  return (
    <div>
      <h1>Welcome to Chit-Chat</h1>
      <div>
        {messageList.map((message) => {
          return (
            <div
              key={message.date}
            >{`${message.username}: ${message.value} --- ${message.date}`}</div>
          );
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
