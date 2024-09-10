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
}

const GenreList = ({ onSelect }: Props) => {
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
            <Button variant="link" fontSize="lg" onClick={() => onSelect(data)}>
              {data.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
