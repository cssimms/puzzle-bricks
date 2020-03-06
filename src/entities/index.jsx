import React from 'react';
import { Block } from '../renderers/block';

import constants from './constants';
// {
// -- Notice that each entity has a unique id (required)
// -- and a renderer property (optional). If no renderer
// -- is supplied with the entity - it won't get displayed.
// box1: { x: 200, y: 200, renderer: <Block /> },
// }

const entities = {
  grid: () => {
    const { GRID_WIDTH, GRID_HEIGHT } = constants;
  },

  rows: () => {

  },

  blocks: () => {
    const entityMap = {};
    const { GRID_SIZE } = constants;

    for (let i = 1; i < GRID_SIZE; i += 1) {
      const blockKey = `block-${i}`;
      entityMap[blockKey] = {
        x: 100 * i,
        y: 100 * i,
        renderer: <Block />,
      };
    }
    return entityMap;
  },
};
export default entities;
