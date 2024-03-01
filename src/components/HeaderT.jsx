import { Container, Link, Heading } from "@chakra-ui/react";

const HeaderT = () => {
  return (
    <Container maxW="container.xl" bgColor={"green.700"} height={50}>
      <Link color={"white"} href="/">
        <Heading>Recipe site</Heading>
      </Link>
    </Container>
  );
};

export default HeaderT;
