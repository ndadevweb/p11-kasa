import classes from './HeaderImage.module.css'

export default function HeaderImage({ image, alternativeText, title, customClasses = [] }) {
  const componentClasses = classes.headerImage + ' ' + customClasses.map(customClass => classes[customClass])

  return (
    <header className={ componentClasses }>
      { title && <h3>{ title }</h3> }
      <img src={ image } alt={ alternativeText } />
    </header>
  )
}
