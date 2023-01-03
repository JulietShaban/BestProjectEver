import PeoplePage from "@containers/peoplePage/PeoplePage";
import HomePage from "@containers/HomePage/HomePage";
import NotFoundPage from "@containers/NotFoundPage/NotFoundPage";
import PersonPage from "@containers/PersonPage";

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
    path: "/people/:id",
    element: <PersonPage/>,
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
