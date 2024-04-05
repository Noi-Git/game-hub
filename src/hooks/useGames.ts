import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'

export interface Platform {
  id: number
  name: string
  slug: string
}
export interface Game {
  id: number
  name: string
  background_image: string
  parent_platforms: { platform: Platform }[]
  metacritic: number
}
interface FetchGamesResponse {
  count: number
  results: Game[]
}

const useGames = () => {
  const controller = new AbortController()
  const signal = controller.signal

  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>('/games', { signal })
      .then((res) => setGames(res.data.results))
      .catch((error) => setError(error.message))

    // return controller.abort() //clean up
  }, [])

  return { games, error }
}

export default useGames
