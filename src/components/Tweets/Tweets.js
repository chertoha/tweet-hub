import Box from "components/Box";
import CardList from "components/CardList";
import Container from "components/Container";
import ErrorMessage from "components/ErrorMessage";
import Filter from "components/Filter";
import LoadMoreButton from "components/LoadMoreButton";
import TweetsToolbar from "components/TweetsToolbar";
import { useEffect, useState } from "react";
import { useLazyGetUsersQuery } from "redux/users/usersApi";

const DEFAULT_LIMIT = process.env.REACT_APP_TWEETS_CARDS_PER_PAGE;
const DEFAULT_PAGE = 1;

const Tweets = () => {
  const [page, setPage] = useState(DEFAULT_PAGE);
  const [filterValue, setFilterValue] = useState(null);
  const [shouldScroll, setShoulScroll] = useState(false);

  const [fetchData, { data, error }] = useLazyGetUsersQuery();
  useEffect(() => {
    fetchData({ limit: page * DEFAULT_LIMIT, isFollowing: filterValue }).then(
      () => {
        if (shouldScroll) {
          window.scrollTo(0, document.body.scrollHeight);
          setShoulScroll(false);
        }
      }
    );
  }, [fetchData, page, filterValue, shouldScroll]);

  const onLoadMoreClick = () => {
    setPage((prevPage) => prevPage + 1);
    setShoulScroll(true);
  };

  const onSelectFilter = (value) => {
    setFilterValue(value);
  };

  if (error) {
    return <ErrorMessage />;
  }

  if (!data) {
    return;
  }

  const users = data.results;
  const totalUsers = data.count;

  return (
    <>
      <Box as="section" pt={50} pb={0}>
        <Container>
          <TweetsToolbar />
        </Container>
      </Box>

      <Box as="section" pt={20} pb={30}>
        <Container>
          <Filter onSelectFilter={onSelectFilter} currentValue={filterValue} />
        </Container>
      </Box>

      <Box as="section">
        <Container>
          <CardList list={users} />
        </Container>
      </Box>

      <Box as="section" pt={30} pb={70}>
        <Container>
          {totalUsers !== users.length && (
            <LoadMoreButton onClick={onLoadMoreClick} />
          )}
        </Container>
      </Box>
    </>
  );
};

export default Tweets;
