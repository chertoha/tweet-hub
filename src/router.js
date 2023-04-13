import Layout from "components/Layout";
import HomePage from "pages/HomePage";
import TweetsPage from "pages/TweetsPage";
import { createBrowserRouter } from "react-router-dom";

export const ROUTES = {
  HOME: "/",
  TWEETS: "/tweets",
};

const routes = [
  {
    path: ROUTES.HOME,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.TWEETS,
        element: <TweetsPage />,
      },
    ],
  },
];

// const router = createBrowserRouter(routes, { basename: "/pet_team02" });
const router = createBrowserRouter(routes);

export default router;
