import classes from './Host.module.css'

export default function Host({ name, picture }) {
  return (
    <div className={ classes.user }>
      <p className={ classes.fullName }>{ name }</p>
      <img src={ picture } className={ classes.picture } alt="Housing Host" />
    </div>
  )
}
