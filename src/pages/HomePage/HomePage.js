import { useEffect } from 'react'
import image from '../../assets/images/mountain-and-ocean.png'
import { useFetchLodgements } from '../../hooks/useFetchLodgement'
import { HeaderImage, Loading, Cards } from '../../components'

export default function HomePage() {
  const [lodgements, isLoading] = useFetchLodgements()

  const title = `Chez vous,
  partout ailleurs
  `

  useEffect(() => {
    document.title = 'Kasa - Accueil'
  }, [])

  return (
    <>
      <HeaderImage image={ image } alternativeText="Mountain and ocean" title={ title } customClasses={ ['mobileSmall'] } />
      { isLoading ===  true
        ? <Loading isLoading={ isLoading } />
        : <Cards lodgements={ lodgements } />
      }

    </>
  )
}
