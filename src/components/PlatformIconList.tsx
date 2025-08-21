import { HStack, Icon } from "@chakra-ui/react";
import { iconMap } from "../common/iconMap";
import type { Platform } from "../hooks/useGames";

interface PlatformIconListProps {
  platforms: Platform[];
}

export const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};
