import { useState, useRef } from "react";
import {
  SimpleGrid,
  Button,
  Spacer,
  Input,
  Flex,
  Select,
  Box,
} from "@chakra-ui/react";
import { data } from "../utils/data";
import RecipeCard from "../components/RecipeCard";

export const RecipeListPage = () => {
  const inputField = useRef("");
  const [query, setQuery] = useState("");
  const [heathLabel, setHeathLabel] = useState("");

  const RefresButtonHandler = () => {
    setHeathLabel("");
    setQuery("");
    inputField.current.value = "";
  };

  const handleChangeFilter = (event) => {
    setHeathLabel(event.target.value);
  };

  return (
    <Box>
      <Flex p={2}>
        <Spacer />
        <Input
          p={2}
          maxW={400}
          type="text"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
          ref={inputField}
        ></Input>
        <Select
          px={2}
          maxW={60}
          placeholder="Select heath Label"
          value={heathLabel}
          onChange={handleChangeFilter}
        >
          <option value="Vegetarian">Vegetarian</option>
          <option value="Vegan">Vegan</option>
          <option value="Kosher">Kosher</option>
          <option value="Sugar-Conscious">Sugar-Conscious</option>
          <option value="Low Potassium">Low Potassium</option>
          <option value="Kidney-Friendl">Kidney-Friendl</option>
          <option value="Pescatarian">Pescatarian</option>
          <option value="Dairy-Free">Dairy-Free</option>
          <option value="Gluten-Free">Gluten-Free</option>
          <option value="Wheat-Free">Wheat-Free</option>
          <option value="Egg-Free">Egg-Free</option>
          <option value="Peanut-Free">Peanut-Free</option>
          <option value="Soy-Free">Soy-Free</option>
          <option value="Soy-Free">Soy-Free</option>
          <option value="Red-Meat-Free">Red-Meat-Free</option>
          <option value="Crustacean-Free">Crustacean-Free</option>
        </Select>
        <Button p={2} onClick={RefresButtonHandler} color="red">
          reset
        </Button>
      </Flex>
      {heathLabel === "" ? (
        <SimpleGrid spacing={8} columns={{ xl: 5, lg: 4, md: 3, sm: 1 }}>
          {data.hits
            .filter((asd) => asd.recipe.label.toLowerCase().includes(query))

            .map((recipe, i) => (
              <Box key={i}>
                <RecipeCard recipe={recipe.recipe} />
              </Box>
            ))}
        </SimpleGrid>
      ) : (
        <SimpleGrid spacing={8} columns={{ xl: 5, lg: 4, md: 3, sm: 2 }}>
          {data.hits
            .filter((asd) => asd.recipe.label.toLowerCase().includes(query))
            .filter((lbl) => lbl.recipe.healthLabels.includes(heathLabel))
            .map((recipe, i) => (
              <Box key={i}>
                <RecipeCard recipe={recipe.recipe} />
              </Box>
            ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

//<Center h="100vh" flexDir="column"></Center>
