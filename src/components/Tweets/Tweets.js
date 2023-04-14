import CardList from "components/CardList";
import Container from "components/Container";
import PageTitle from "components/PageTitle";
import { Button } from "components/UIKit/Button/Button.styled";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useGetUsersQuery } from "redux/users/usersApi";
import { ROUTES } from "router";

const DEFAULT_LIMIT = 3;
const DEFAULT_PAGE = 1;

const Tweets = () => {
  const location = useLocation();
  const backRoute = location.state?.from ?? ROUTES.HOME;

  const [page, setPage] = useState(DEFAULT_PAGE);
  const [users, setUsers] = useState([]);

  const { data } = useGetUsersQuery({ page: page, limit: DEFAULT_LIMIT });

  const updateArray = (prevArr, newArr) => {
    prevArr.map((item) => {});
  };

  useEffect(() => {
    if (data) {
      setUsers((prevUsers) => [...prevUsers, ...data.results]);
    }
  }, [data]);

  if (!data) {
    return;
  }

  console.log(users);
  // console.log(page);

  return (
    <Container>
      <Link to={backRoute}> Back</Link>
      <PageTitle>Users List</PageTitle>

      <CardList list={users} />
      {/* <CardList list={data.results} /> */}

      <br />
      <br />

      <Button
        onClick={() => {
          setPage((prevPage) => prevPage + 1);
        }}
      >
        Load more
      </Button>
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
};

export default Tweets;
