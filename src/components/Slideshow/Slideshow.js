import { useState } from 'react'
import arrowLeft from '../../assets/icons/arrow-left.svg'
import arrowRight from '../../assets/icons/arrow-right.svg'
import classes from './Slideshow.module.css'

export default function Slideshow({ pictures }) {
  const [pictureIndexActive, setPictureIndexActive] = useState(0)

  const PICTURES_TOTAL = pictures.length
  const MIN_INDEX = 0
  const MAX_INDEX = PICTURES_TOTAL - 1
  const DIRECTION_LEFT = 'left'
  const DIRECTION_RIGHT = 'right'

  function handleChangePicture(event) {
    const { direction } = event.currentTarget.dataset
    let newIndex = 0

    if(direction === DIRECTION_LEFT) {
      newIndex = pictureIndexActive === MIN_INDEX
        ? MAX_INDEX
        : pictureIndexActive - 1
    } else if(direction === DIRECTION_RIGHT) {
      newIndex = pictureIndexActive === MAX_INDEX
        ? MIN_INDEX
        : pictureIndexActive + 1
    }

    setPictureIndexActive(newIndex)
  }

  return (
    <aside className={ classes.slideshow } data-has-many-images={ PICTURES_TOTAL > 1 }>
      {
        pictures.map((picture, index) => {
          const classNameIsActive = index === pictureIndexActive ? classes.active : ''

          return (<img
            src={ picture }
            alt={ picture }
            className={ classes.picture + ' ' + classNameIsActive }
            key={ index }
          />)
        })
      }

      <button type="button" className={ classes.buttonLeft } data-direction={ DIRECTION_LEFT } onClick={ handleChangePicture }>
        <img src={ arrowLeft } alt="Left" />
      </button>

      <button type="button" className={ classes.buttonRight } data-direction={ DIRECTION_RIGHT } onClick={ handleChangePicture }>
        <img src={ arrowRight } alt="Right" />
      </button>
    </aside>
  )
}