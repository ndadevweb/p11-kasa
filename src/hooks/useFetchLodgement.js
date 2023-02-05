import lodgementsData from '../data/logements.json'
import { useEffect, useState } from 'react'

export function useFetchLodgements() {
  const [lodgements, setLodgements] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchLodgements() {
      try {
        setLodgements(lodgementsData)
      } catch(e) {
        setError('Whoops ! Something is wrong !')
      } finally {
        setIsLoading(false)
      }
    }

    fetchLodgements()
  }, [])

  return [lodgements, isLoading, error]
}
