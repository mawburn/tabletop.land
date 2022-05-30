import uniqueId from 'lodash/uniqueId'
import { useRef } from 'react'

export const useGetId = (key: string = '') => {
  const id = useRef(uniqueId(key))

  return id.current;
}
