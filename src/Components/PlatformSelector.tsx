import { Menu, MenuButton,Button, MenuItem,MenuList } from '@chakra-ui/react'
import {BsChevronBarDown} from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
import { Platform } from '../hooks/useGames'


interface Props{
  onSelectedPlatform:(platform:Platform)=>void
  selectedPlatform: Platform | null;
}


const PlatformSelector = ({onSelectedPlatform,selectedPlatform}:Props) => {

  const {data, error}=usePlatforms()

  console.log(data)

  if(error) return null


  return (
    <Menu>
        <MenuButton rightIcon={<BsChevronBarDown/>} as={Button}>
          {selectedPlatform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
            {data.map(platform=><MenuItem onClick={()=>onSelectedPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector