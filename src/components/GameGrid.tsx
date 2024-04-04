import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'

interface Character {
  id: number
  name: string
}

interface FetchCharactersResponse {
  count: number
  results: Character[]
}

const GameGrid = () => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    apiClient
      .get<FetchCharactersResponse>('/character')
      .then((res) => setCharacters(res.data.results))
  })

  return <div>GameGrid</div>
}

export default GameGrid
