import classes from './Loading.module.css'

/**
 * A component for display a loading message
 *
 * @component
 *
 * @param {Object} param
 * @param {Boolean} param.isLoading
 * @returns (<Loading />)
 */
export default function Loading({ isLoading }) {
  return <p className={ classes.loading }>Chargement en cours...</p>
}
