import Box from "components/Box";
import Container from "components/Container";
import DeveloperCard from "components/DeveloperCard";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "router";

const Home = () => {
  return (
    <>
      <Box as="section" pt={50} pb={30}>
        <Container>
          <Box as="h1" textAlign="center" color="secondaryText" fontSize="xxl">
            Home
          </Box>
        </Container>
      </Box>

      <Box as="section">
        <Container>
          <DeveloperCard />
        </Container>
      </Box>
    </>
  );
};

export default Home;
