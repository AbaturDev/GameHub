import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface GameCardContainerProps {
  children: ReactNode;
}

export const GameCardContainer = ({ children }: GameCardContainerProps) => {
  return (
    <Box borderRadius={10} overflow="hidden" padding={10} width="300px">
      {children}
    </Box>
  );
};
