import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { Text } from '@chakra-ui/react'

interface Character {
  id: number
  name: string
}

interface FetchCharactersResponse {
  count: number
  data: Character[]
}

const CharacterGrid = () => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    apiClient
      .get<FetchCharactersResponse>('/character')
      .then((res) => setCharacters(res.data.data))
      .catch((error) => setError(error.message))
  })

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </>
  )
}

export default CharacterGrid
