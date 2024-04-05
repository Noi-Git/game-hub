import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
import { Character } from '../hooks/useCharacters'

interface Props {
  character: Character
}

const CharacterCard = ({ character }: Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
      <Image src={character.imageUrl} />
      <CardBody>
        <Heading fontSize='2xl'>{character.name}</Heading>
      </CardBody>
    </Card>
  )
}

export default CharacterCard
