
import { HStack,VStack,Image, List, ListItem, Spinner, Text, Button, Heading } from '@chakra-ui/react'
import useGenre from '../hooks/useGenre'
import getCroppedImageUrl from '../services/image-url'
import { Genre } from '../hooks/useGenre'

interface Props{
   onSelectGenre:(genre:Genre)=>void
   selectedGenre: Genre | null
}

const GenreList = ({onSelectGenre,selectedGenre}:Props) => {

   const {data,isLoading,error}=useGenre()


   if(error) return null
   if(isLoading) return <Spinner/>
   
   return (
    <>
      <Heading fontSize="2xl" marginBottom="3">Genres</Heading>
      <List>{data.map(genre=><ListItem paddingY="5px" key={genre.id}>
          <HStack>
              <Image boxSize='32px' objectFit="cover" borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
              <Button whiteSpace="normal" textAlign="left" fontWeight={genre.id===selectedGenre?.id ? "bold": "normal"} variant="link" onClick={()=>onSelectGenre(genre)} fontSize="lg">{genre.name}</Button>
          </HStack>
      </ListItem>)}</List>
    </>
  )
}

export default GenreList