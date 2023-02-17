import { NavLink } from 'react-router-dom'
import classes from './ErrorPage.module.css'

export default function ErrorPage() {
  return (
    <div className={ classes.content }>
      <h1 className={ classes.statusCode }>404</h1>
      <p className={ classes.statusMessage }>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/" className={ classes.link }>Retourner sur la page d'accueil</NavLink>
    </div>
  )
}