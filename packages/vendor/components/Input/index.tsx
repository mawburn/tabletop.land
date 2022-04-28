import cn from 'clsx'
import uniqueId from 'lodash/uniqueId'
import { useRef } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import NumberFormat from 'react-number-format'

import styles from './styles.module.css'

interface InputProps extends Partial<UseFormRegister<FieldValues>> {
  title: string
  placeholder?: string
  type?: string
  smallLabel?: boolean
  inlineLabel?: boolean
  className?: string
  noEmpty?: boolean
  defaultValue?: string
}

export const Input = ({
  title,
  placeholder = '',
  type = 'text',
  smallLabel,
  inlineLabel,
  className,
  noEmpty = false,
  defaultValue,
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
      {type === 'currency' ? (
        <NumberFormat
          prefix={'$'}
          allowNegative={false}
          decimalScale={2}
          fixedDecimalScale={true}
          isNumericString={true}
          className={cn(styles.input, className)}
          allowEmptyFormatting={noEmpty}
          defaultValue={defaultValue}
          {...rest}
        />
      ) : (
        <input
          name={titleSm}
          id={textId.current}
          placeholder={placeholder}
          className={cn(styles.input, className)}
          type={type}
          {...rest}
        />
      )}
    </>
  )
}
