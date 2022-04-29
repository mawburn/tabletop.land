import cn from 'clsx'
import uniqueId from 'lodash/uniqueId'
import { useRef } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import NumberFormat from 'react-number-format'

import styles from './styles.module.css'

interface MoneyInputProps extends Partial<UseFormRegister<FieldValues>> {
  title: string
  smallLabel?: boolean
  className?: string
  noEmpty?: boolean
  defaultValue?: string
}

export const MoneyInput = ({
  title,
  smallLabel,
  className,
  noEmpty = false,
  defaultValue,
}: MoneyInputProps) => {
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
      <NumberFormat
        prefix={'$'}
        allowNegative={false}
        decimalScale={2}
        fixedDecimalScale={true}
        isNumericString={true}
        className={cn(styles.input, className)}
        allowEmptyFormatting={noEmpty}
        defaultValue={defaultValue}
      />
    </>
  )
}
