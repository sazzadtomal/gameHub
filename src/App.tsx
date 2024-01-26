import { Grid,Show,GridItem } from '@chakra-ui/react'
import Navbar from './Components/Navbar'
import GameGrid from './Components/GameGrid'
import {Genre} from "./hooks/useGenre"
import GenreList from './Components/GenreList'
import { useState } from 'react'
import PlatformSelector from './Components/PlatformSelector'
import { Platform } from './hooks/useGames'
function App() {

  const [selectedGenre,setSelectedGenre]=useState<Genre|null>(null)
  const [selectedPlatform,setSelectedPlatform]=useState<Platform|null>(null)
 

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
            <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre)=>setSelectedGenre(genre)}/>
          </GridItem>
        </Show>
        <GridItem area="main" >
          <PlatformSelector selectedPlatform={selectedPlatform} onSelectedPlatform={(platform)=>setSelectedPlatform(platform)}/>
          <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre}/>
        </GridItem>
      </Grid>
  )
}

export default App
