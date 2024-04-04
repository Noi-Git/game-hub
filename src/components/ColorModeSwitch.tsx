import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode()

  return (
    <HStack>
      <Switch />
      <Text></Text>
    </HStack>
  )
}

export default ColorModeSwitch
