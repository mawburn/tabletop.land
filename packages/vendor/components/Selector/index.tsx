import cn from 'clsx'
import { Fragment } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

import styles from './styles.module.css'

import { useGetId } from '../../hooks/useGetId'

interface SelectorProps extends Partial<UseFormRegister<FieldValues>> {
  title: string
  options: KeyValue<string | null>[]
  multiple?: boolean
  smallLabel?: boolean
  className?: string
  selected?: string
}

const Selector = ({
  title,
  options,
  smallLabel,
  className,
  selected,
  multiple = false,
  ...rest
}: SelectorProps) => {
  const titleSm = title.replace(/ /gi, '').toLocaleLowerCase()
  const textId = useGetId(titleSm)

  const labelSize = smallLabel ? 'text-normal' : 'text-xl'

  return multiple ? (
    <>
      {options.map(({ key, value }) => (
        <div key={`${textId}key`} className={styles.container}>
          <label className={styles.label}>
            <input
              type="checkbox"
              className={styles.checkbox}
              id={`${textId}${key}`}
              name={titleSm}
              value={key}
              {...rest}
            />
            <span className={styles.text}>{value}</span>
          </label>
        </div>
      ))}
    </>
  ) : (
    <>
      <label htmlFor={textId} className={`block font-bold whitespace-nowrap ${labelSize} my-1`}>
        {title}
      </label>
      <select id={textId} className={cn(className)} defaultValue={selected} {...rest}>
        {options.map(({ key, value }) => (
          <option key={key ?? `${textId}Default`} value={key}>
            {value}
          </option>
        ))}
      </select>
    </>
  )
}

export default Selector
