import classes from './Card.module.css'
import { NavLink } from 'react-router-dom'

export default function Card({ id, cover, title, location }) {
  return (
    <article className={ classes.card }>
      <NavLink end to={ `/lodgement/${id}` }>
        <h3><span>{ title }</span></h3>
        <img src={ cover } alt={ location } />
      </NavLink>
    </article>
  )
}
