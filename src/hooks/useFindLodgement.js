import lodgementsData from '../data/logements.json'
import { useEffect, useState } from 'react'

export function useFindLodgement(id) {
  const [lodgement, setLodgement] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  function filterLodgementById(lodgementsData, id) {
    return lodgementsData.filter(lodgementData => lodgementData.id === id)
  }

  useEffect(() => {
    async function findLodgement() {
      try {
        const lodgementData = filterLodgementById(lodgementsData, id)

        if(lodgementData.length === 0) {
          setError('Lodgement not found !')
        } else {
          setLodgement(lodgementData.pop())
        }
      } catch(e) {
        setError('Whoops ! Something is wrong !')
      } finally {
        setIsLoading(false)
      }
    }

    findLodgement()
  }, [id])

  return [lodgement, isLoading, error]
}