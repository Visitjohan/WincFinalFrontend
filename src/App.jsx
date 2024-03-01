import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";
import { Container } from "@chakra-ui/react";
import Footer from "./components/Footer.jsx";
import HeaderT from "./components/HeaderT.jsx";
export const App = () => {
  // Your state code here
  return (
    <Router>
      <HeaderT />
      <main>
        <Container
          maxW="container.xl"
          py={5}
          bgColor={"#E6FFFA"}
          minH={"container.xl"}
        >
          <Routes>
            <Route path="/" element={<RecipeListPage />} exact />
            <Route path="/recipe/:id?" element={<RecipePage />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};
