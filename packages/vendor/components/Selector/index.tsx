import cn from 'clsx'
import { FieldValues, UseFormRegister } from 'react-hook-form'

import { useGetId } from '../../hooks/useGetId'
import SelectBox from './SelectBox'
import styles from './styles.module.css'

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
    <div className={styles.switch}>
      {options.map(({ key, value }) => (
        <SelectBox
          key={`${textId}${key}`}
          id={`${textId}${key}`}
          name={titleSm}
          keyVal={{ key, value }}
          className={className}
          {...rest}
        />
      ))}
    </div>
  ) : (
    <>
      <label htmlFor={textId} className={`textLabel ${labelSize}`}>
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
