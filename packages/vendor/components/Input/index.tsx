import cn from 'clsx'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { useGetId } from '../../hooks/useGetId'

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
  required?: boolean
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
  required = false,
  ...rest
}: InputProps) => {
  const titleSm = title.replace(/ /gi, '').toLocaleLowerCase()
  const textId = useGetId(titleSm)

  const labelSize = smallLabel ? 'text-normal' : 'text-xl'

  return (
    <>
      <label htmlFor={textId} className={`textLabel ${labelSize}`}>
        {title}{' '}
        {required && (
          <span className="text-red-500 font-normal text-base" title="required">
            *
          </span>
        )}
      </label>
      <input
        name={titleSm}
        id={textId}
        placeholder={placeholder}
        className={cn(styles.input, className)}
        type={type}
        {...rest}
      />
    </>
  )
}
