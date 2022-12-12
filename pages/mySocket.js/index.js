import React, { useState } from "react";
import { WebSocket } from "ws";

export default function mySocket() {
  const [data, setData] = useState(null);

  const ws = new WebSocket("wss://localhost:3000");

  ws.onopen = () => {
    console.log("Web socket connection opened!");
  };

  ws.onmessage = (event) => {
    setData(event.data);
  };

  return (
    <div>
      {data ? <p>Received data: {data}</p> : <p>No data received yet</p>}
    </div>
  );
}
