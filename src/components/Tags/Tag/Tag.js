import classes from './Tag.module.css'

/**
 * Component for display a Tag
 *
 * @component
 *
 * @param {Object} param
 * @param {String}  param.name
 * @returns (<Tag name={ name } />)
 */
export default function Tag({ name }) {
  return <span className={ classes.tag }>{ name }</span>
}
