import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Text,
  Divider,
  Center,
  Box,
  Wrap,
  Badge,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import VegenTool from "../utils/VegenTool";

const RecipeCard = ({ recipe }) => {
  const cautionsHandler = (diet, label) => {
    if (diet.length !== 0) {
      return (
        <Box>
          <Text as="b">{label}: </Text>
          <Text as="i">{diet}</Text>
        </Box>
      );
    }
  };

  const dietHandler = (diet) => {
    if (diet.length !== 0) {
      return (
        <Box p={3}>
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

  return (
    <Card padding={1} bgColor={"white"}>
      <CardHeader padding={2}>
        <Link to={`/recipe/${recipe.label}`}>
          <Center>
            <Image
              src={recipe.image}
              alt="..."
              boxSize="200px"
              objectFit="cover"
              align="center"
              rounded={20}
            />
          </Center>

          <Text
            py={2}
            fontSize={18}
            overflow="hidden"
            fontWeight="bold"
            textAlign="center"
            height={67}
          >
            {recipe.label}
          </Text>
          <Divider orientation="horizontal" />
        </Link>
      </CardHeader>
      <CardBody padding="2">
        <Link to={`/recipe/${recipe.label}`}>
          <Text height={19} overflow="hidden">
            <Text as="b">Meal: </Text>
            <Text as="i">{recipe.mealType}</Text>
          </Text>
          <Text height={19} overflow="hidden">
            <Text as="b">Dish: </Text>
            <Text as="i">{recipe.dishType}</Text>
          </Text>
          <Box height="35">{cautionsHandler(recipe.cautions, "Cautions")}</Box>
          <Divider py="2" orientation="horizontal" />
          <Box height="35">{dietHandler(recipe.dietLabels)}</Box>

          <Center height="25">{VegenTool(recipe)}</Center>
        </Link>
      </CardBody>
    </Card>
  );
};

export default RecipeCard;
