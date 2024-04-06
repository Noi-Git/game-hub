import { Badge } from '@chakra-ui/react'

interface Props {
  score: number
}

const CriticScore = ({ score }: Props) => {
  // if score > 75 set color to green
  // if score > 60 set color to yellow
  // otherwise do not thing
  let color = score > 75 ? 'green' : score > 60 ? 'yellow' : ''

  return (
    <Badge colorScheme={color} fontSize='14px' paddingX={2} borderRadius='4px'>
      {score}
    </Badge>
  )
}

export default CriticScore
