import React, { PureComponent } from 'react';

class Block extends PureComponent {
  render() {
    const size = 50;
    const { props: { x, y } } = this;
    const xCoord = x - size / 2;
    const yCoord = y - size / 2;
    return (
      <div style={{
        position: 'absolute',
        width: size,
        height: size,
        backgroundColor: 'red',
        left: xCoord,
        top: yCoord,
        border: '2px solid black',
      }}
      />
    );
  }
}

export { Block };
