import { Games } from './Games'

export enum SubCats {
  THREE_D = '3D print',
  BASES = 'bases',
  BITS = 'bits',
  BUILDING = 'building',
  DICE = 'dice',
  FLOCKING = 'flocking',
  FURNITURE = 'furniture',
  ADDONS = 'game addons',
  OTHER = 'other',
  PAINTING = 'painting',
  PARTIAL_TERRAIN = 'partial terrain',
  SCATTER_TERRAIN = 'scatter terrain',
  TABLETOP = 'tabletop',
  TILE = 'tile',
}

export type SubCategories = Games | SubCats
