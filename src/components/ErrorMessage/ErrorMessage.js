import PropTypes from "prop-types";
import BackLink from "components/BackLink";
import Box from "components/Box";
import Container from "components/Container";

const errorMessages = [
  { status: 404, message: "Bad request" },
  { status: 429, message: "Too many requests to server" },
];

const ErrorMessage = ({ error }) => {
  const message =
    error &&
    errorMessages.find(({ status }) => status === error.status).message;

  return (
    <Box as="section" pt={100} pb={0} color="red">
      <Container>
        <Box as="p" mb={20}>
          Sorry, something went wrong with server! Try again later.
        </Box>

        {message && (
          <Box as="p" mb={20}>
            Error: {message}
          </Box>
        )}

        <BackLink>Go back</BackLink>
      </Container>
    </Box>
  );
};

export default ErrorMessage;

ErrorMessage.propTypes = {
  error: PropTypes.object,
};
