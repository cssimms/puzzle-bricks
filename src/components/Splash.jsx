import React from 'react';
import PropTypes from 'prop-types';

function Splash({ setGameRunning }) {
  return (
    <div>
      Here is a game involving bricks. I don't remember what it was supposed to be but it's nice
      to start from somewhere.
      <br />
      <button type="button" onClick={setGameRunning}>Start!</button>
      <p>the game is not running</p>
    </div>
  );
}
Splash.propTypes = {
  setGameRunning: PropTypes.func.isRequired,
};

export default Splash;
