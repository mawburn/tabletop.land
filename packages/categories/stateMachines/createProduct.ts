import { Product } from './../types/Product'
import { createMachine } from 'xstate'

export const createProduct = createMachine<Partial<Product>>({
  id: 'productCreator',
  initial: 'name',
  context: {},
  states: {
    nameDescription: {},
    price: {},
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
    variations: {},
    finish: {},
  },
})
