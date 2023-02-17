import starFill from '../../assets/icons/star-fill.svg'
import starEmpty from '../../assets/icons/star-empty.svg'
import classes from './Rating.module.css'

export default function Rating({ rating }) {

  function buildRating(rating) {
    const MAX = 5

    return Array(MAX).fill().map( (_, index) => (<img src={ rating > index ? starFill : starEmpty } key={ index } alt="" />) )
  }

  return (
    <div className={ classes.rating }>
      { buildRating(rating) }
    </div>
  )
}
