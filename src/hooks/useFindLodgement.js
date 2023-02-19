import { useEffect, useState } from 'react'
import { URL_FIND_LODGEMENT } from '../config'

/**
 * Hook to find a lodgement by id
 *
 * @param {String} id
 * @returns {Array} [{Array} lodgements, {Boolean} isLoading, {String} error]
 */
export function useFindLodgement(id) {
  const [lodgement, setLodgement] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  /**
   * Returns a lodgement matching with id
   *
   * @param {Array} lodgementsData
   * @param {String} id
   * @returns {Array}
   */
  function filterLodgementById(lodgementsData, id) {
    lodgementsData = Array.isArray(lodgementsData) ? lodgementsData : [lodgementsData]

    return lodgementsData.filter(lodgementData => lodgementData.id === id)
  }

  useEffect(() => {
    async function findLodgement() {
      try {
        const response = await fetch(URL_FIND_LODGEMENT)

        if(response.ok === false) {
          throw new Error('Lodgement not found !')
        }

        const lodgementFound = await response.json()
        const lodgementData = filterLodgementById(lodgementFound, id)

        if(lodgementData.length === 0) {
          throw new Error('Lodgement not found !')
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