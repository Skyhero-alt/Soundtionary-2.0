import { io } from "socket.io-client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/router";

export default function Server() {
  // let socket = null;
  let name = null;
  const inpRef = useRef();
  const router = useRouter();
  const route = router.query;

  return (
    <div>
      <input ref={inpRef} placeholder="enter name" />

      <button
        onClick={() => {
          name = inpRef.current.value;
          console.log(name);
          let socket = io("http://localhost:8000");
          socket.emit("join server", { name, route });
        }}
      >
        Join
      </button>
    </div>
  );
}
