import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const GameRoom = () => {
  const router = useRouter();
  const { gameid } = router.query;

  return <div className={styles.container}>{gameid}</div>;
};

export default GameRoom;
