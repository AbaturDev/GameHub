import { HStack, Switch, Text } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";

export const ColorModeSwitch = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch.Root onCheckedChange={toggleColorMode} colorPalette="green">
        <Switch.HiddenInput />
        <Switch.Control />
        <Switch.Label />
      </Switch.Root>
      <Text>Dark Mode</Text>
    </HStack>
  );
};
