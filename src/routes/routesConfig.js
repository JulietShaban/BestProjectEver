import PeoplePage from "@containers/peoplePage/PeoplePage";
import HomePage from "@containers/HomePage/HomePage";
import NotFoundPage from "@containers/NotFoundPage/NotFoundPage";
const routesConfig = [
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/people",
    element: <PeoplePage/>,
  },
  {
    path: "*",
    element: <NotFoundPage/>,
  },
  {
    path: "/not-found",
    element: <NotFoundPage/>,
  },
];

export default routesConfig;
