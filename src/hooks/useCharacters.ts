import { useEffect, useState } from "react"
import apiClient from "../services/api-client"

interface Character {
  id: number
  name: string
}

interface FetchCharactersResponse {
  count: number
  data: Character[]
}

const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    apiClient
      .get<FetchCharactersResponse>('/character')
      .then((res) => setCharacters(res.data.data))
      .catch((error) => setError(error.message))
  })

  return {characters, error}
}

export default useCharacters