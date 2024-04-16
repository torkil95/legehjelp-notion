import * as React from 'react'
import styles from './styles.module.css'

export const FooterImpl: React.FC = () => {
  return (
    <footer className={styles.footer}>
      {/* Removed content */}
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
