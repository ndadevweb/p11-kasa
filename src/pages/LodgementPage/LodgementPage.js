import { useParams  } from 'react-router-dom'
import { useFindLodgement } from '../../hooks/useFindLodgement'
import { useNavigate } from 'react-router-dom'
import { Slideshow } from '../../components'


export default function LodgementPage() {
  const { id } = useParams()
  const [lodgement, isLoading, error] = useFindLodgement(id)
  const navigate = useNavigate()

  return (
    <>
      { isLoading === false ? <Slideshow pictures={ lodgement.pictures } /> : 'loading'}
    </>
  )
}
