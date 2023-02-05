import classes from './Header.module.css'

export default function Header({ children }) {
  return (
    <header className={ classes.headerPrimary }>
      { children }
    </header>
  )
}
