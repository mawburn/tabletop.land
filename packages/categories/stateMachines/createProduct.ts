import { createMachine } from 'xstate';

export const createProduct= createMachine({
  id: 'productCreator',
  initial: 'name',
  context: {},
  states: {
    nameDescription: {},
    price: {},
    variations: {},
    mainType: {},
    mini: {},
    terrain: {},
    accessories: {},
    buildYourOwn: {},
    miniType: {},
    kinGender: {},
    terrainType: {},
    accessoryType: {},
    buildYourOwnType: {},
    simulatedType: {},
    setting: {},
    materials: {},
    finish: {},
  }
});
