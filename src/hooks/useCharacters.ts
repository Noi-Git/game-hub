import { useEffect, useState } from "react"
import apiClient from "../services/api-client"

export interface Character {
  id: number
  name: string
}

interface FetchCharactersResponse {
  count: number
  data: Character[]
}

const useCharacters = () => {
  const controller = new AbortController()
  const signal = controller.signal

  const [characters, setCharacters] = useState<Character[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    apiClient
      .get<FetchCharactersResponse>('/character',{signal})
      .then((res) => setCharacters(res.data.data))
      .catch((error) => 
        setError(error.message)
      )

      // return controller.abort() //clean up
  }, []) 

  return {characters, error}
}

export default useCharacters