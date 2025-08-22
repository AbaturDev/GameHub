import {
  Text,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { type Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

export const GenreList = ({ onSelectGenre, selectedGenre }: GenreListProps) => {
  const { data, error, isLoading } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List.Root>
        {data.map((g) => (
          <ListItem key={g.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(g.image_background)}
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
              />
              <Text
                as="button"
                onClick={() => onSelectGenre(g)}
                fontWeight={g.id === selectedGenre?.id ? "bold" : "normal"}
                fontSize="lg"
                textAlign="left"
                whiteSpace="normal"
                cursor="pointer"
                _hover={{
                  textDecoration: "underline",
                  color: "teal.400",
                }}
              >
                {g.name}
              </Text>
            </HStack>
          </ListItem>
        ))}
      </List.Root>
    </>
  );
};
