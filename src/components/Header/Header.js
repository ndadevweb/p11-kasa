import classes from './Header.module.css'
import { Logo, TYPE } from '../Logo/Logo'
import { NavLink } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'

/**
 * Component for display a Header page
 *
 * @component
 *
 * @returns (<Header />)
 */
export default function Header() {
  return (
    <header className={ classes.headerPrimary }>
      <NavLink to="/">
        <Logo type={ TYPE.primary } responsiveClass={ true } />
      </NavLink>
      <Navigation />
    </header>
  )
}
