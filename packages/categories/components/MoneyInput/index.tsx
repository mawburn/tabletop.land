import cn from 'clsx'
import NumberFormat from 'react-number-format'
import { useGetId } from '../../hooks/useGetId'

import styles from './styles.module.css'

interface MoneyInputProps {
  title: string
  smallLabel?: boolean
  className?: string
  noEmpty?: boolean
  defaultValue?: string
  required?: boolean
}

export const MoneyInput = ({
  title,
  smallLabel,
  className,
  noEmpty = false,
  required = false,
  defaultValue,
}: MoneyInputProps) => {
  const titleSm = title.replace(/ /gi, '').toLocaleLowerCase()
  const textId = useGetId(titleSm)

  const labelSize = smallLabel ? 'text-normal' : 'text-xl'

  return (
    <div className="flex justify-center items-center">
      <label htmlFor={textId} className={`block font-bold whitespace-nowrap ${labelSize} my-1`}>
        {title}{' '}
      </label>
      <NumberFormat
        id={textId}
        prefix={'$'}
        allowNegative={false}
        decimalScale={2}
        fixedDecimalScale={true}
        isNumericString={true}
        className={cn(styles.input, className)}
        allowEmptyFormatting={noEmpty}
        defaultValue={defaultValue}
      />
      {required && (
        <span className="text-red-500 font-normal text-base" title="required">
          *
        </span>
      )}
    </div>
  )
}
