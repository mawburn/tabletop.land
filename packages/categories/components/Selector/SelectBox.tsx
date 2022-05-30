import { FieldValues, UseFormRegister } from 'react-hook-form'
import cn from 'clsx'

import styles from './styles.module.css'

interface SelectBoxProps extends Partial<UseFormRegister<FieldValues>> {
  id: string
  name: string
  keyVal: KeyValue<string | null>
  className?: string
}

const SelectBox = ({ id, name, keyVal, className, ...rest }: SelectBoxProps) => (
  <>
    <div className={cn('form-check form-switch', className)}>
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id={id}
        value={keyVal.key}
        {...rest}
      />
      <label className="form-check-label" htmlFor={id}>
        {keyVal.value}
      </label>
    </div>
  </>
)

export default SelectBox
