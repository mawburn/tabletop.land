import clsx from 'clsx'
import { ReactNode } from 'react'

import styles from './style.module.css'

interface TipProps {
  children: ReactNode
  className?: string | null
}

const Tip = ({ children, className = null }: TipProps) => (
  <span className={clsx(styles.tip, className)}>{children}</span>
)

export default Tip
