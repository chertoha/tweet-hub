import CardList from "components/CardList";
import Container from "components/Container";
import PageTitle from "components/PageTitle";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useGetUsersQuery } from "redux/users/usersApi";
import { ROUTES } from "router";

const REQUEST_LIMIT = 12;
const DEFAULT_PAGE = 1;

const Tweets = () => {
  const location = useLocation();
  const backRoute = location.state?.from ?? ROUTES.HOME;

  const [page, setPage] = useState(DEFAULT_PAGE);

  const { data } = useGetUsersQuery({ page, limit: REQUEST_LIMIT });

  if (!data) {
    return;
  }

  console.log(data);

  return (
    <Container>
      <Link to={backRoute}> Back</Link>
      <PageTitle>Users List</PageTitle>
      <br />
      <br />
      <br />
      <br />
      <CardList list={data.results} />
    </Container>
  );
};

export default Tweets;
