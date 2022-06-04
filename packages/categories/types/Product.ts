import { Materials, Settings, Terrain } from '../data'
import { Categories } from './Categories'
import { Mini } from './Mini'
import { SubCategories } from './SubCategories'

interface Price {
  base: number
  sale: number
  originalCost: number
}

export enum Finish {
  FINISHED = 'finished',
  UNFINISHED = 'unfinished',
  PARTIAL = 'partially finished',
  PRIMED = 'primed',
  TEXTURED = 'textured',
}

export interface Product {
  title: string
  description: string
  price: Price
  categories: Categories[]
  subCategories: SubCategories[]
  settings: Settings[]
  mini?: Mini
  terrain?: Terrain[]
  simulated?: []
  accessoryType?: []
  materials: Materials[]
  finish: Finish[]
}
