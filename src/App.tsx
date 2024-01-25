import { Grid,Show,GridItem } from '@chakra-ui/react'
import Navbar from './Components/Navbar'
import GameGrid from './Components/GameGrid'
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
          <GridItem area="aside" bg='gold' >Aside</GridItem>
        </Show>
        <GridItem area="main" bg='dodgerblue' >
          <GameGrid/>
        </GridItem>
      </Grid>
  )
}

export default App
