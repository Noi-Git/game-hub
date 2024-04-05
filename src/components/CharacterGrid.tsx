import { SimpleGrid, Text } from '@chakra-ui/react'
import useCharacters from '../hooks/useCharacters'
import CharacterCard from './CharacterCard'

const CharacterGrid = () => {
  const { characters, error } = useCharacters()

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10}>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </SimpleGrid>
    </>
  )
}

export default CharacterGrid
