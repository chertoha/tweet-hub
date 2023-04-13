import CardList from "components/CardList";
import Container from "components/Container";
import PageTitle from "components/PageTitle";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "router";

const Tweets = () => {
  const location = useLocation();
  const backRoute = location.state?.from ?? ROUTES.HOME;

  return (
    <Container>
      <Link to={backRoute}> Back</Link>
      <PageTitle>Users List</PageTitle>
      <br />
      <br />
      <br />
      <br />
      <CardList />
    </Container>
  );
};

export default Tweets;
