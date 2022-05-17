import React, { useState } from "react";
import Splash from "./components/Splash";

export default () => {
  const [gameRunning, setGameRunning] = useState(false);

  if (gameRunning) {
    return <>Game is running</>;
  } else {
    return (
      <>
        <h1>Puzzle Bricks!</h1>
        <Splash setGameRunning={setGameRunning} />
      </>
    );
  }
};
