import { Grid,Show,GridItem, HStack } from '@chakra-ui/react'
import Navbar from './Components/Navbar'
import GameGrid from './Components/GameGrid'
import {Genre} from "./hooks/useGenre"
import GenreList from './Components/GenreList'
import { useState } from 'react'
import PlatformSelector from './Components/PlatformSelector'
import { Platform } from './hooks/useGames'
import SortSelector from './Components/SortSelector'


export interface GameQuery{
  genre:Genre | null
  platform:Platform | null
  sortOrder:string | null
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
          <Navbar/>
        </GridItem>
        <Show above='lg'>
          <GridItem paddingX={5} area="aside" >
            <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre)=>setGameQuery({...gameQuery,genre})}/>
          </GridItem>
        </Show>
        <GridItem area="main" >
          <HStack spacing={5} padding={2} marginBottom={5}>
            <PlatformSelector selectedPlatform={gameQuery.platform} onSelectedPlatform={(platform)=>setGameQuery({...gameQuery,platform})}/>
            <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder)=>setGameQuery({...gameQuery,sortOrder})}/>
          </HStack>
          <GameGrid gameQuery={gameQuery}/>
        </GridItem>
      </Grid>
  )
}

export default App
