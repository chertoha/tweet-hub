import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "router";

const TweetsPage = () => {
  const location = useLocation();
  const backRoute = location.state?.from ?? ROUTES.HOME;

  return (
    <div>
      <Link to={backRoute}> Back</Link>
    </div>
  );
};

export default TweetsPage;
