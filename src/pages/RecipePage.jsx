import {
  Text,
  Tag,
  TagLabel,
  Badge,
  Image,
  Flex,
  Box,
  SimpleGrid,
  Center,
  Wrap,
  VStack,
  Link,
  //Divider,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { data } from "../utils/data";
import VegenTool from "../utils/VegenTool";

const RemoveStar = (ingridient) => {
  if (ingridient.startsWith("* ")) {
    return ingridient.substring(2);
  }
  return ingridient;
};

export const RecipePage = () => {
  const { id } = useParams();

  const Recipe = data.hits.find((element) => element.recipe.label === id);
  const thisRecipe = Recipe.recipe;

  const NutrisianHandler = (ingridient) => {
    const quantity = Math.round(Number(ingridient.quantity) * 100) / 100;

    return (
      <Text>
        {ingridient.label}: {quantity} {ingridient.unit}
      </Text>
    );
  };

  const cookingTimeHandler = (time) => {
    if (Number(time) !== 0) {
      if (Number(time) / 60 >= 1) {
        const hours = Math.trunc(Number(time) / 60);
        var minutes = time - 60 * hours;
        if (minutes < 10) {
          minutes = `0${minutes}`;
        }
        return (
          <Box py={2}>
            <Text as="b">Total cooking time: </Text>
            <Text as="i">
              {hours}:{minutes}
            </Text>
          </Box>
        );
      }
      return (
        <Box py={2}>
          <Text as="b">Total cooking time: </Text>
          <Text as="i">{time} minutes</Text>
        </Box>
      );
    }
  };

  const dietHandler = (diet) => {
    if (diet.length !== 0) {
      return (
        <Box p={3}>
          <Text fontSize="xl" as="b" py={3}>
            Diet:
          </Text>

          <Wrap>
            {diet.map((ingridient, i) => (
              <Badge key={i} colorScheme="green">
                {ingridient}
              </Badge>
            ))}
          </Wrap>
        </Box>
      );
    }
  };

  const CautionsHandler = (diet) => {
    if (diet.length !== 0) {
      return (
        <Box p={3}>
          <Text fontSize="xl" as="b" py={3}>
            Cautions:
          </Text>
          <Wrap>
            {thisRecipe.cautions.map((ingridient, i) => (
              <Badge key={i} colorScheme="blue">
                {ingridient}
              </Badge>
            ))}
          </Wrap>
        </Box>
      );
    }
  };
  return (
    <Center>
      <SimpleGrid spacingX={20} columns={{ xl: 2, lg: 2, md: 2, sm: 1 }}>
        <Box maxWidth={450} p={3} bgColor="#E8CBB5">
          <Center>
            <Link href="/">Back</Link>
            <Text fontSize="2xl" as="b" p="3">
              {thisRecipe.label}
            </Text>
          </Center>
          <Center>
            <Image
              src={thisRecipe.image}
              alt="..."
              boxSize="400px"
              objectFit="cover"
              rounded={40}
              py="3"
            />
          </Center>
          <Box py={2}>
            <Text as="b">Meal: </Text>
            <Text as="i">{thisRecipe.mealType}</Text>
          </Box>
          <Box py={2}>
            <Text as="b">Dish: </Text>
            <Text as="i">{thisRecipe.dishType}</Text>
          </Box>
          {cookingTimeHandler(thisRecipe.totalTime)}

          {dietHandler(thisRecipe.dietLabels)}
          {CautionsHandler(thisRecipe.cautions)}

          <Box p={3}>
            <Text fontSize="xl" as="b" py={3}>
              Health:
            </Text>
            <Wrap>
              {thisRecipe.healthLabels.map((ingridient, i) => (
                <Badge key={i} colorScheme="purple">
                  {ingridient}
                </Badge>
              ))}
            </Wrap>
          </Box>

          <Box p={2}>
            <Text fontSize="xl" as="b" py={3}>
              Nutrician:
            </Text>
            <VStack align="stretch">
              <Tag size="lg" colorScheme="orange" borderRadius="full">
                <TagLabel>
                  {NutrisianHandler(thisRecipe.totalNutrients.ENERC_KCAL)}
                </TagLabel>
              </Tag>
              <Tag size="lg" colorScheme="purple" borderRadius="full">
                <TagLabel>
                  {NutrisianHandler(thisRecipe.totalNutrients.PROCNT)}
                </TagLabel>
              </Tag>
              <Tag size="lg" colorScheme="red" borderRadius="full">
                <TagLabel>
                  {NutrisianHandler(thisRecipe.totalNutrients.FAT)}
                </TagLabel>
              </Tag>
              <Tag size="lg" colorScheme="yellow" borderRadius="full">
                <TagLabel>
                  {NutrisianHandler(thisRecipe.totalNutrients.CHOCDF)}
                </TagLabel>
              </Tag>
              <Tag size="lg" colorScheme="blue" borderRadius="full">
                <TagLabel>
                  {NutrisianHandler(thisRecipe.totalNutrients.CHOLE)}
                </TagLabel>
              </Tag>
              <Tag size="lg" colorScheme="green" borderRadius="full">
                <TagLabel>
                  {NutrisianHandler(thisRecipe.totalNutrients.NA)}
                </TagLabel>
              </Tag>
            </VStack>
          </Box>
        </Box>
        <Box width={500} py="5">
          <Center height="25">{VegenTool(thisRecipe)}</Center>
          <Text fontSize="xl" as="b" py={3}>
            Ingredients
          </Text>

          {thisRecipe.ingredients.map((ingridient, i) => (
            <Flex key={i}>
              <Image
                src={ingridient.image}
                alt="..."
                boxSize="60px"
                objectFit="cover"
                p="2"
                rounded={15}
              />

              <Text px={4} as="i">
                {RemoveStar(ingridient.text)}
              </Text>
            </Flex>
          ))}
        </Box>
      </SimpleGrid>
    </Center>
  );
};
