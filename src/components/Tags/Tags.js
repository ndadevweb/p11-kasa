import Tag from './Tag/Tag'
import classes from './Tags.module.css'

export default function Tags({ tags }) {

  return (
    <section className={ classes.tags }>
      { tags.map((tag, index) => <Tag name={ tag } key={ index } />) }
    </section>
  )
}
