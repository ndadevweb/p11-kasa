import classes from './Host.module.css'

/**
 * A component for display details of host person
 *
 * @component
 *
 * @param {Object} lodgement
 * @param {String} lodgement.name
 * @param {String} lodgement.picture
 * @returns (<Host name={ name } picture={ picture } />)
 */
export default function Host({ name, picture }) {
  return (
    <div className={ classes.user }>
      <p className={ classes.fullName }>{ name }</p>
      <img src={ picture } className={ classes.picture } alt="Housing Host" />
    </div>
  )
}
