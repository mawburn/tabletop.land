import cn from 'clsx'
import uniqueId from 'lodash/uniqueId'
import { useRef } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

import styles from './styles.module.css'

interface InputProps extends Partial<UseFormRegister<FieldValues>> {
  title: string
  placeholder?: string
  type?: string
  className?: string
}

export const Input = ({
  title,
  placeholder = '',
  type = 'text',
  className,
  ...rest
}: InputProps) => {
  const titleSm = title.replace(/ /gi, '').toLocaleLowerCase()
  const textId = useRef(uniqueId(titleSm))

  return (
    <>
      <label htmlFor={textId.current} className="block font-bold text-xl my-1">
        {title}
      </label>
      <input
        name={titleSm}
        id={textId.current}
        placeholder={placeholder}
        className={cn(styles.input, className)}
        {...rest}
      />
    </>
  )
}
