import React, { PureComponent } from 'react';
import { GameEngine } from 'react-game-engine';
import './App.css';
import { MoveBox, Gravity } from './systems';
import entities from './entities';

class App extends PureComponent {
  render() {
    return (
      <GameEngine
        style={{ width: 800, height: 600, backgroundColor: 'blue' }}
        systems={[MoveBox, Gravity]}
        entities={entities.blocks()}
      />
    );
  }
}

export default App;
