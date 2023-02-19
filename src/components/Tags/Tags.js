import Tag from './Tag/Tag'
import classes from './Tags.module.css'

/**
 * Component for display a list of Tag component
 *
 * @component
 *
 * @param {Object} param
 * @param {Array[String]}
 * @returns (<Tags name={ tag } />)
 */
export default function Tags({ tags }) {

  return (
    <section className={ classes.tags }>
      { tags.map((tag, index) => <Tag name={ tag } key={ index } />) }
    </section>
  )
}
