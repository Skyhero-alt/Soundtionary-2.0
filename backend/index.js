import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.join("room1");
});

io.on("disconnect", (socket) => {
  console.log("disconnected");
});

httpServer.listen(8000, () => {
  console.log("I am listening");
});
