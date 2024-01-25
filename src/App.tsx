import { Grid,Show,GridItem } from '@chakra-ui/react'
import Navbar from './Components/Navbar'
import GameGrid from './Components/GameGrid'
import GenreList from './Components/GenreList'
function App() {
 

  return (
      <Grid templateAreas={{
        base:`"nav" "main"`,
        lg:`"nav nav" "aside main"`
      }}>
        <GridItem area="nav"  >
          <Navbar/>
        </GridItem>
        <Show above='lg'>
          <GridItem area="aside" >
            <GenreList/>
          </GridItem>
        </Show>
        <GridItem area="main" >
          <GameGrid/>
        </GridItem>
      </Grid>
  )
}

export default App
