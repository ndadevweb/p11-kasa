import classes from './Tag.module.css'

export default function Tag({ name }) {
  return (
    <span className={ classes.tag }>{ name }</span>
  )
}
