import { Menu, MenuButton, MenuList, MenuItem,Button} from "@chakra-ui/react"
import { BsChevronBarDown } from "react-icons/bs"


const SortSelector = () => {
    return (
        <Menu>
            <MenuButton rightIcon={<BsChevronBarDown/>} as={Button}>
              OrderBy Relevance
            </MenuButton>
            <MenuList>
                <MenuItem>Relevance</MenuItem>
                <MenuItem>Date Added</MenuItem>
                <MenuItem>Name</MenuItem>
                <MenuItem>Release Date</MenuItem>
                <MenuItem>Average Rating</MenuItem>
                <MenuItem>Popularity</MenuItem>
            </MenuList>
        </Menu>
      )
}

export default SortSelector