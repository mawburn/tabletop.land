import cn from 'clsx'
import uniqueId from 'lodash/uniqueId'
import { useRef } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

import styles from './styles.module.css'

interface InputProps extends Partial<UseFormRegister<FieldValues>> {
  title: string
  placeholder?: string
  type?: string
  smallLabel?: boolean
  inlineLabel?: boolean
  className?: string
}

export const Input = ({
  title,
  placeholder = '',
  type = 'text',
  smallLabel,
  inlineLabel,
  className,
  ...rest
}: InputProps) => {
  const titleSm = title.replace(/ /gi, '').toLocaleLowerCase()
  const textId = useRef(uniqueId(titleSm))

  const labelSize = smallLabel ? 'text-normal' : 'text-xl'

  return (
    <>
      <label
        htmlFor={textId.current}
        className={`block font-bold whitespace-nowrap ${labelSize} my-1`}
      >
        {title}
      </label>
      <input
        name={titleSm}
        id={textId.current}
        placeholder={placeholder}
        className={cn(styles.input, className)}
        type={type}
        {...rest}
      />
    </>
  )
}
