import { Kin } from '../data'

export enum Gender {
  M = 'male',
  F = 'female',
  T = 'transgender',
  O = 'other',
}

export enum Type {
  BOSS = 'boss',
  CHAR = 'player character',
  MONSTER = 'monster',
  MOUNT = 'mount',
  VEHICLE = 'vehicle',
  OTHER = 'other',
}

export interface Mini {
  type: Type[]
  kin: Kin[]
  gender?: Gender
}
