import { io } from "socket.io-client";

const socket = io("http://localhost:8000");

export default function Server() {
  return (
    <div>
      {socket ? console.log("hello ahaha") : null}
      Lol
      <button>lol again</button>
    </div>
  );
}
