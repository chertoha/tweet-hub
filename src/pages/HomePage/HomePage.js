import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "router";

const HomePage = () => {
  const location = useLocation();

  return (
    <div>
      /Home
      <Link to={ROUTES.TWEETS} state={{ from: location }}>
        to /tweets
      </Link>
    </div>
  );
};

export default HomePage;
