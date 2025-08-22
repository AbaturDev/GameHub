import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import { CriticScore } from "./CriticScore";
import { PlatformIconList } from "./PlatformIconList";
import { Emoji } from "./Emoji";

interface GameCardProps {
  game: Game;
}

export const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card.Root>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <Card.Body>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </Card.Body>
    </Card.Root>
  );
};
