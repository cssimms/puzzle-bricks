import React, { PureComponent } from 'react';

class Box extends PureComponent {
  render() {
    const size = 100;
    const { props: { x, y } } = this;
    const xCoord = x - size / 2;
    const yCoord = y - size / 2;
    return (
      <div style={{
        position: 'absolute', width: size, height: size, backgroundColor: 'red', left: xCoord, top: yCoord,
      }}
      />
    );
  }
}

export default Box;
