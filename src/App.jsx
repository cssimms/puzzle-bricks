import React, { useState } from 'react';
import Splash from './components/Splash';


export default () => {
  const [gameRunning, setGameRunning] = useState(false);

  return (
    <>
      <h1>Welcome to React Parcel Micro App!</h1>
      <Splash setGameRunning={setGameRunning} />
    </>
  );
};
