import { Grid,Show,GridItem, HStack, Box } from '@chakra-ui/react'
import Navbar from './Components/Navbar'
import GameGrid from './Components/GameGrid'
import {Genre} from "./hooks/useGenre"
import GenreList from './Components/GenreList'
import { useState } from 'react'
import PlatformSelector from './Components/PlatformSelector'
import { Platform } from './hooks/useGames'
import SortSelector from './Components/SortSelector'
import GameHeading from './Components/GameHeading'

export interface GameQuery{
  genre:Genre | null
  platform:Platform | null
  sortOrder:string | null
  searchText:string
}




function App() {

 const [gameQuery,setGameQuery]=useState<GameQuery>({} as GameQuery)

 

  return (
      <Grid templateAreas={{
        base:`"nav" "main"`,
        lg:`"nav nav" "aside main"`
      }}
      templateColumns={{
        base:"1fr",
        lg:"200px 1fr"
      }}
      >
        <GridItem area="nav"  >
          <Navbar onSearch={(searchText)=>setGameQuery({...gameQuery,searchText})}/>
        </GridItem>
        <Show above='lg'>
          <GridItem paddingX={5} area="aside" >
            <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre)=>setGameQuery({...gameQuery,genre})}/>
          </GridItem>
        </Show>
        <GridItem area="main" >
          <Box paddingLeft={2}>
            <GameHeading gameQuery={gameQuery}/>
            <HStack spacing={5}  marginBottom={5}>
              <PlatformSelector selectedPlatform={gameQuery.platform} onSelectedPlatform={(platform)=>setGameQuery({...gameQuery,platform})}/>
              <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder)=>setGameQuery({...gameQuery,sortOrder})}/>
            </HStack>
          </Box>
          <GameGrid gameQuery={gameQuery}/>
        </GridItem>
      </Grid>
  )
}

export default App
