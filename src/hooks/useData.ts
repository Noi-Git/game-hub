import { useEffect, useState } from 'react'
import { CanceledError } from 'axios'
import apiClient from '../services/api-client'

interface FetchResponse<T> {
  count: number
  results: T[]
}

const useData = <T>(endpoint: string) => {
  const controller = new AbortController()
  const signal = controller.signal

  const [data, setData] = useState<T[]>([]) //<T> is generic type
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    apiClient
      .get<FetchResponse<T>>(endpoint, { signal })
      .then((res) => {
        setData(res.data.results)
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

  return { data, error, isLoading }
}

export default useData
