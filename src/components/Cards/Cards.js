import classes from './Cards.module.css'
import Card from './Card/Card'

export default function Cards({ lodgements }) {
  return (
    <div className={ classes.cards }>
      {
        lodgements.length === 0
          ? 'Pas de logement'
          : lodgements.map(lodgement => <Card key={ lodgement.id } { ...lodgement } />)
      }
    </div>
  )
}
