import classes from './Loading.module.css'

export default function Loading({ isLoading }) {
  return <p className={ classes.loading }>Chargement en cours...</p>
}
