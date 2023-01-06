import PeoplePage from "@containers/peoplePage/PeoplePage";
import HomePage from "@containers/HomePage/HomePage";
import NotFoundPage from "@containers/NotFoundPage/NotFoundPage";
import PersonPage from "@containers/PersonPage";
import FavoritesPage from "@containers/FavoritesPage/FavoritesPage";
import SearchPage from "../containers/SearchPage";


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
  {
    path: "/favorites",
    element: <FavoritesPage/>,
  },
  {
    path: "/search",
    element: <SearchPage/>,
  },
];

export default routesConfig;
