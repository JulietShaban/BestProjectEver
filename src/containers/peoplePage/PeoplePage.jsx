import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import { withErrorApi } from "@hoc-helpers/withErrorApi";
import PeopleList from "@components/PeoplePage/PeopleList/PeopleList";
import PeopleNavigation from "@components/PeoplePage/PeopleNavigation";
import { getApiResource, changeHTTP } from "@utils/network";
import { API_PEOPLE } from "@constants/api";
import { useQueryParams } from "@hooks/useQueryParams";
import {
  getPeopleId,
  getPeopleImage,
  getPeoplePagesId,
} from "@services/getPeopleData";

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [counterPage, setCounterPage] = useState(1);

  const query = useQueryParams();
  const queryPage = query.get("page");

  const getResource = async (url) => {
    const res = await getApiResource(url);
    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);

        return {
          id,
          name,
          img,
        };
      });
      setPeople(peopleList);
      setNextPage(changeHTTP(res.next));
      setPrevPage(changeHTTP(res.previous));
      setCounterPage(getPeoplePagesId(url));
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResource(API_PEOPLE + queryPage);
  }, []);
  return (
    <>
      <PeopleNavigation
        getResource={getResource}
        prevPage={prevPage}
        nextPage={nextPage}
        counterPage={counterPage}
      />
      {people && <PeopleList people={people} />}
    </>
  );
};

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PeoplePage);
