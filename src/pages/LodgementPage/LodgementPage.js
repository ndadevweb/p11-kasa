import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { useFindLodgement } from '../../hooks/useFindLodgement'
import { Slideshow, Host, Rating, Tags, Dropdown } from '../../components'
import {
  STATUS as DropdownStatus,
  OPTION_STYLE as DropdownOptionStyle
} from '../../components/Dropdown/Dropdown'
import classes from './LodgementPage.module.css'

export default function LodgementPage() {
  const { id } = useParams()
  const [lodgement, isLoading, error] = useFindLodgement(id)
  const optionStyle = DropdownOptionStyle.thin

  useEffect(() => {
    document.title = `${ lodgement.title } - ${ lodgement.location }`
  }, [lodgement])

  return (
    error !== null
      ? <Navigate to="/error" replace="true" />
      : isLoading === true ? 'Loading'
      : (<>
          <Slideshow pictures={ lodgement.pictures } />

          <section className={ classes.informations }>
            <header className={ classes.header }>
              <h2 className={ classes.mainTitle }>{ lodgement.title }</h2>
              <h3 className={ classes.locationTitle }>{ lodgement.location }</h3>
            </header>

            <aside className={ classes.complementary }>
              <Host name={ lodgement.host.name } picture={ lodgement.host.picture }/>
              <Rating rating={ lodgement.rating } />
            </aside>

            <Tags tags={ lodgement.tags } />

            <div className={ classes.details }>
              <div>
                <Dropdown title={ 'Description' } defaultStatus={ DropdownStatus.open } optionStyle={ optionStyle }>
                  <p>{ lodgement.description }</p>
                </Dropdown>
              </div>

              <div>
                <Dropdown title={ 'Équipements' } defaultStatus={ DropdownStatus.open }>
                  <ul>{ lodgement.equipments.map((equipment, index) => (<li key={ index }>{ equipment }</li>)) }</ul>
                </Dropdown></div>
              </div>
          </section>
        </>)
  )
}
