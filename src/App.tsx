import { Grid,Show,GridItem } from '@chakra-ui/react'
import Navbar from './Components/Navbar'
import GameGrid from './Components/GameGrid'
import {Genre} from "./hooks/useGenre"
import GenreList from './Components/GenreList'
import { useState } from 'react'
import PlatformSelector from './Components/PlatformSelector'
import { Platform } from './hooks/useGames'


export interface GameQuery{
  genre:Genre | null
  platform:Platform | null
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
          <PlatformSelector selectedPlatform={gameQuery.platform} onSelectedPlatform={(platform)=>setGameQuery({...gameQuery,platform})}/>
          <GameGrid gameQuery={gameQuery}/>
        </GridItem>
      </Grid>
  )
}

export default App
