import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface GameCardContainerProps {
  children: ReactNode;
}

export const GameCardContainer = ({ children }: GameCardContainerProps) => {
  return (
    <Box borderRadius={20} overflow="hidden" padding={1}>
      {children}
    </Box>
  );
};
