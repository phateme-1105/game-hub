import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

// colorMode => wich represents the cuttent mode
// isChecked => if colorMode is dark then we are
// going check the switch

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text>Dark Mode </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
