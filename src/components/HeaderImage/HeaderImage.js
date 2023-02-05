import classes from './HeaderImage.module.css'

export default function HeaderImage({ image, alternativeText, title }) {
  return (
    <header className={ classes.headerImage }>
      { title && <h3>{ title }</h3> }
      <img src={ image } alt={ alternativeText } />
    </header>
  )
}
