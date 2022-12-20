import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("LOl");
});

io.on("disconnect", (socket) => {
  console.log("disconnected");
});

httpServer.listen(8000, () => {
  console.log("I am listening");
});
