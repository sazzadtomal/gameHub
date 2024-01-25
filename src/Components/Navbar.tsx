import { HStack, Image,Text } from '@chakra-ui/react'
import logo from "../assets/logo.webp"
import { Switch } from '@chakra-ui/react'
import ColorModeSwitch from './ColorModeSwitch'

const Navbar = () => {
  return (
    <HStack padding="10px" justifyContent='space-between'>
        <Image src={logo} boxSize="60px"/>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default Navbar