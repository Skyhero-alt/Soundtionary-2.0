import { io } from "socket.io-client";
import React from "react";

export default function Server() {
  // let socket = null;
  return (
    <div>
      {/* {socket.connected ? <h1>Connected</h1> : <h2>Not connected</h2>} */}
      <button
        onClick={() => {
          let socket = io("http://localhost:8000");
          socket.on("connect", (socket) => {
            console.log("Yahooo");
          });
        }}
      >
        Lol button
      </button>
    </div>
  );
}
