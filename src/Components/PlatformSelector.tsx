import { Menu, MenuButton,Button, MenuItem,MenuList } from '@chakra-ui/react'
import {BsChevronBarDown} from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'


const PlatformSelector = () => {

  const {data, error}=usePlatforms()

  if(error) return null

  return (
    <Menu>
        <MenuButton rightIcon={<BsChevronBarDown/>} as={Button}>Platforms</MenuButton>
        <MenuList>
            {data.map(platform=><MenuItem key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector