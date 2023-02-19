import classes from './Navigation.module.css'
import { NavLink, useMatch } from 'react-router-dom'

/**
 * Compoent for display the main navigation
 *
 * @component
 *
 * @returns (<Navigation />)
 */
export default function Navigation() {
  return (
    <nav className={ classes.navigationPrimary }>
      <ul>
        <li><NavLink to="/" className={ useMatch('/') !== null && classes.active }>Accueil</NavLink></li>
        <li><NavLink to="/about" className={ useMatch('/about') !== null && classes.active }>A Propos</NavLink></li>
      </ul>
    </nav>
  )
}
