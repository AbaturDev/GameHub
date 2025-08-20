import { Card, Heading, Image } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";

interface GameCardProps {
  game: Game;
}

export const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden" padding={10}>
      <Image src={game.background_image} />
      <Card.Body>
        <Heading fontSize="2xl">{game.name}</Heading>
      </Card.Body>
    </Card.Root>
  );
};
