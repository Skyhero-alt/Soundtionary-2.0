import { useEffect } from "react";
import { io } from "Socket.IO-client";
let socket;

const MySocket = () => {
  useEffect(() => socketInitializer(), []);

  const socketInitializer = async () => {
    await fetch("/api/server");
    socket = io();

    socket.on("connect", () => {
      console.log("connected");
    });
  };

  return null;
};

export default MySocket;
