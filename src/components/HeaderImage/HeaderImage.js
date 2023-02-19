import classes from './HeaderImage.module.css'

/**
 * Component for display a header containing an image and an alternative text
 *
 * @component
 *
 * @param {Object} param
 * @param {String} image
 * @param {String} alternativeText
 * @param {Array} customClasses
 * @returns (
 *   <HeaderImage
 *     image={ image }
 *     alternativeText={ alternativeText }
 *     title={ title }
 *     customClasses={ ['one', 'two', 'three'] }
 *   />
 * )
 */
export default function HeaderImage({ image, alternativeText, title, customClasses = [] }) {
  const componentClasses = classes.headerImage + ' ' + customClasses.map(customClass => classes[customClass])

  return (
    <header className={ componentClasses }>
      { title && <h3>{ title }</h3> }
      <img src={ image } alt={ alternativeText } />
    </header>
  )
}
