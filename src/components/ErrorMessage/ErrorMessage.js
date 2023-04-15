import BackLink from "components/BackLink";
import Box from "components/Box";
import Container from "components/Container";

const ErrorMessage = () => {
  return (
    <Box as="section" pt={100} pb={0} color="red">
      <Container>
        <Box as="p" mb={20}>
          Sorry, something went wrong with server! Try again later.
        </Box>
        <BackLink>Go back</BackLink>
      </Container>
    </Box>
  );
};

export default ErrorMessage;
