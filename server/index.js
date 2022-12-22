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

// Server is created here
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let users = new Map();
// io.on("connection", socket => {
//   console.log(socket.id);
//   socket.join("room1");
// });

io.on("connection", (socket) => {
  socket.on("join server", (username, roomName) => {
    const user = {
      username,
      id: socket.id,
    };
    console.log(user);

    // users.push(user);
    users.set(socket.id, username);
    io.to(roomName).emit("new user", user);
    socket.join(roomName);

    // cb(messages[roomName]);
  });

  socket.on("send ans", ({ ans, sender }) => {
    const payload = {
      ans,
      sender,
      isRoom,
    };
  });
});

// A tp comment

httpServer.listen(8000, () => {
  console.log("I am listening");
});
