import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { Text } from '@chakra-ui/react'

const CharacterGrid = () => {
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
