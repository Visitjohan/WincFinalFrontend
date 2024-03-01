import { Center, Text } from "@chakra-ui/react";

const VegenTool = (diet) => {
  if (diet.healthLabels.includes("Vegan")) {
    return (
      <Center>
        <Text color={"green.700"} as="b" fontSize="xl">
          Vegan
        </Text>
      </Center>
    );
  } else if (diet.healthLabels.includes("Vegetarian")) {
    return (
      <Center>
        <Text color={"green.500"} as="b" fontSize="xl">
          Vegetarian
        </Text>
      </Center>
    );
  }
};

export default VegenTool;
