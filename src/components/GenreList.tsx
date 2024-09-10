import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelect: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelect, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((data) => (
        <ListItem key={data.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImageUrl(data.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Button
              fontWeight={data.id === selectedGenre?.id ? "bold" : "normal"}
              variant="link"
              fontSize="lg"
              onClick={() => onSelect(data)}
            >
              {data.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
