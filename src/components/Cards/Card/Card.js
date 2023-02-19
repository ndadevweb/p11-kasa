import classes from './Card.module.css'
import { NavLink } from 'react-router-dom'

/**
 * Component for display some informations about a lodgement
 *
 * @component
 *
 * @param {Object} lodgement
 * @param {String} lodgement.id
 * @param {String} lodgement.cover
 * @param {String} lodgement.title
 * @param {String} lodgement.location
 * @returns (
 *   <Card id={ id } cover={ cover } title={ title } location={ location } />
 * )
 */
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
