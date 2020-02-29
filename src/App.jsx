import React, { PureComponent } from 'react';
import { GameEngine } from 'react-game-engine';
import './App.css';
import { Box } from './renderers/box';
import { MoveBox, Gravity } from './systems';

class App extends PureComponent {
  render() {
    return (
      <GameEngine
        style={{ width: 800, height: 600, backgroundColor: 'blue' }}
        systems={[MoveBox, Gravity]}
        entities={{
          // -- Notice that each entity has a unique id (required)
          // -- and a renderer property (optional). If no renderer
          // -- is supplied with the entity - it won't get displayed.
          box1: { x: 200, y: 200, renderer: <Box /> },
        }}
      />
    );
  }
}

export default App;
