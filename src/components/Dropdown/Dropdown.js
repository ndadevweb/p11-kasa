import { useState } from 'react'
import arrowTop from '../../assets/icons/arrow-top.svg'
import classes from './Dropdown.module.css'

/**
 * @typedef PropertiesSTATUS
 * @type {Object}
 * @property [String} open
 * @property [String} close
 */
export const STATUS = {
  open: 'open',
  close: 'close'
}

/**
 * @typedef PropertiesOPTION_STYLE
 * @type {Object}
 * @property [String} thin
 * @property [String} large
 */
export const OPTION_STYLE = {
  thin: 'thin',
  large: 'large'
}

/**
 * Component for display a dropdown
 * - It is possible to set default status on open or close
 * - thin and large values defined the size of component
 *
 * @component
 *
 * @param {Object} param
 * @param {String} (open|close) use STATUS constant
 * @param {String} title
 * @param {String} (thin|large) use OPTION_STYLE constant
 * @param {{ children: JSX.Element}}
 * @returns (
 *   <Dropdown
 *     defaultStatus={ defaultStatus }
 *     title={ title }
 *     optionStyle={ optionStyle }
 *   >...</Dropdown>
 * )
 */
export default function Dropdown({ defaultStatus, title, optionStyle, children }) {
  const [ status, setStatus ] = useState(defaultStatus || STATUS.close)
  const optionStyleDefault = optionStyle || OPTION_STYLE.thin

  function handleClick() {
    setStatus(status === STATUS.open ? STATUS.close : STATUS.open)
  }

  return (
    <section className={ `${ classes.dropdown + ' ' + classes[status] + ' ' + classes[optionStyleDefault]}` }>
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
