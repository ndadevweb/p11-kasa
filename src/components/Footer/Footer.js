import React from "react"
import classes from './Footer.module.css'

/**
 * Component for display a page footer
 *
 * @component
 *
 * @param {children} children
 * @returns (<Footer>{ children }</Footer>)
 */
export default function Footer({ children }) {
  return (
    <footer className={ classes.mainFooter }>
      { children }
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
