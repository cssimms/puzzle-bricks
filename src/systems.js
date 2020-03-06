const MoveBox = (entities, { input }) => {
  // -- I'm choosing to update the game state (entities) directly for the sake of brevity and simplicity.
  // -- There's nothing stopping you from treating the game state as immutable and returning a copy..
  // -- Example: return { ...entities, t.id: { UPDATED COMPONENTS }};
  // -- That said, it's probably worth considering performance implications in either case.

  // cs - leaving this here for easy reference to when we
  // put in a cursor / user input
  // const { payload } = input.find((x) => x.name === 'onMouseDown') || {};

  // if (payload) {
  //   const { block1 } = entities;

  //   block1.x = payload.pageX;
  //   block1.y = payload.pageY;
  // }

  console.log('MoveBox');
  return entities;
};

const Gravity = (entities) => {
  const newEntities = Object.keys(entities).map((entityKey) => {
    const newEntity = { ...entities[entityKey] };
    newEntity.y -= 0.25;
    return newEntity;
  });
  return newEntities;
};

export { MoveBox, Gravity };
