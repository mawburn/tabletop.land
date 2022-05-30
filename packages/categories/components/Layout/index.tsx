import { ReactNode } from 'react'

import Footer from '../Footer'
import NavBar from '../NavBar'
import styles from './styles.module.css'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <NavBar />
    <main className={styles.main}>{children}</main>
    <Footer />
  </>
)

export default Layout
