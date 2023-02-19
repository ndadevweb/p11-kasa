import classes from './Header.module.css'

/**
 * Component for display a Header page
 *
 * @component
 *
 * @param {children} children
 * @returns (<Header>{ children }</Header>)
 */
export default function Header({ children }) {
  return (
    <header className={ classes.headerPrimary }>
      { children }
    </header>
  )
}
