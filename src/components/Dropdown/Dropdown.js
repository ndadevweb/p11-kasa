import { useState } from 'react'
import arrowTop from '../../assets/icons/arrow-top.svg'
import classes from './Dropdown.module.css'

export const STATUS = {
  open: 'open',
  close: 'close'
}

export default function Dropdown({ defaultStatus, title, children }) {
  const [ status, setStatus ] = useState(defaultStatus || STATUS.close)

  function handleClick() {
    setStatus(status === STATUS.open ? STATUS.close : STATUS.open)
  }

  return (
    <section className={ `${ classes.dropdown + ' ' + classes[status] }` }>
      <h3 className={ classes.title }>
        { title }
        <button type="button" onClick={ handleClick } className={ classes.buttonChangeStatus }>
          <img src={ arrowTop } alt={ status === STATUS.open ? STATUS.close : STATUS.open } className={ classes[status] } />
        </button>
      </h3>
      <article className={ classes.content }>{ children }</article>
    </section>
  )
}