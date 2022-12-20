import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";

const Login = () => {
  const [avatar, setAvatar] = useState(
    "https://avatars.dicebear.com/api/adventurer/.svg"
  );
  const [rules, setRules] = useState(false);

  return (
    <div className="place-content-center h-screen justify-center flex-col lg:flex">
      <h1 className="hero-content text-5xl font-extrabold place-self-center mb-10">
        🎶 Soundtionary!
      </h1>
      <div className="card w-96 bg-base-300 shadow-xl h-fit place-self-center m-4">
        <div className="card-body items-center text-center flex-column justify-center">
          <h2 className="card-title">Choose your avatar!</h2>

          <div className="flex flex-row w-full">
            <img
              id="haha"
              src={avatar}
              className="inline w-1/4 rounded m-2"
              alt="avatar"
            />
            <input
              placeholder="Enter your name"
              className="name inline input input-bordered w-3/4 max-w-xs mt-4"
              onChange={(event) => {
                let temp =
                  "https://avatars.dicebear.com/api/adventurer/" +
                  event.target.value +
                  ".svg";
                setAvatar(temp);
              }}
            />
          </div>

          <div className="flex card-actions justify-end">
            <button className="btn btn-primary">Join room</button>
            <button className="btn btn-primary">Play</button>
          </div>
        </div>
      </div>
      <button
        className="btn btn-outline btn-secondary w-fit place-self-center"
        onClick={() => {
          setRules(!rules);
        }}
      >
        How to play
      </button>

      {rules && (
        <div className="card">
          <p className="card-body bg-base-300 shadow-xl h-fit place-self-center m-4 rounded">
            When its your turn to select a song, you will have to choose a song
            from three options and play that song for 10-20 seconds,
            alternatively when somebody else is playing a song you have to type
            your guess into the chat to gain points, be quick, the earlier you
            guess a word the more points you get!
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
