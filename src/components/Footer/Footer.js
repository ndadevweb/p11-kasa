import React from "react"
import classes from './Footer.module.css'

export default function Footer({ children }) {
  return (
    <footer className={ classes.mainFooter }>
      { children }
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
