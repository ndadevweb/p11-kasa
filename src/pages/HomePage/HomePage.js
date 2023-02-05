import image from '../../assets/images/mountain-and-ocean.png'
import { useFetchLodgements } from '../../hooks/useFetchLodgement'
import { HeaderImage, Loading, Cards } from '../../components'

export default function HomePage() {
  const [lodgements, isLoading] = useFetchLodgements()

  return (
    <>
      <HeaderImage image={ image } alternativeText="Mountain and ocean" title="Chez vous, partout ailleurs" />
      { isLoading ===  true
        ? <Loading isLoading={ isLoading } />
        : <Cards lodgements={ lodgements } />
      }

    </>
  )
}
