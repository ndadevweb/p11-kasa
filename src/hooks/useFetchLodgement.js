import { useEffect, useState } from 'react'
import { URL_FETCH_LODGEMENTS } from '../config'

/**
 * Hook to fetch all lodgements
 *
 * @returns {Array} [{Array} lodgements, {Boolean} isLoading, {String} error]
 */
export function useFetchLodgements() {
  const [lodgements, setLodgements] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchLodgements() {
      try {
        const response = await fetch(URL_FETCH_LODGEMENTS)

        if (response.ok === false) {
          throw new Error('Whoops ! Something is wrong !')
        } else {
          const lodgementsFetched = await response.json()
          setLodgements(lodgementsFetched)
        }
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
