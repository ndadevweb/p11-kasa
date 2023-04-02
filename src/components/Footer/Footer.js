import React from 'react'
import classes from './Footer.module.css'
import { Logo, TYPE } from '../Logo/Logo'

/**
 * Component for display a page footer
 *
 * @component
 *
 * @returns (<Footer />)
 */
export default function Footer() {
  return (
    <footer className={ classes.mainFooter }>
      <Logo type={ TYPE.secondary } />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
