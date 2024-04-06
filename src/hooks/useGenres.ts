import { useEffect, useState } from 'react'
import { CanceledError } from 'axios'
import apiClient from '../services/api-client'

interface Genre {
  id: number
  name: string
}

interface FetchGenresResponse {
  count: number
  results: Genre[]
}

useEffect
const useGenres = () => {
  const controller = new AbortController()
  const signal = controller.signal

  const [genres, setGenres] = useState<Genre[]>([])
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    apiClient
      .get<FetchGenresResponse>('/genres', { signal })
      .then((res) => {
        setGenres(res.data.results)
        setLoading(false)
      })
      .catch((error) => {
        if (error instanceof CanceledError) {
          setError(error.message)
          setLoading(false)
        }
      })

    // return controller.abort() //clean up
  }, [])

  return { genres, error, isLoading }
}

export default useGenres
