import { Text, Center, Container } from "@chakra-ui/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Container maxW="container.xl" bg="gray.700" color="white" height="60px">
      <Center>
        <Text>Copyright &copy;{currentYear} Recipe site</Text>
      </Center>
    </Container>
  );
};

export default Footer;
