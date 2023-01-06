import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { debounce } from "lodash";

import UiInput from "@components/UI/UiInput";
import { getPeopleId, getPeopleImage } from "@services/getPeopleData";
import { getApiResource } from "@utils/network";
import { withErrorApi } from "@hoc-helpers/withErrorApi";
import { API_SEARCH } from "@constants/api";
import SearchPageInfo from "@components/SearchPage/SearchPageInfo/SearchPageInfo";

import styles from "./SearchPage.module.css";

const SearchPage = ({ setErrorApi }) => {
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [people, setPeople] = useState([]);

  const getResponse = async (param) => {
    const res = await getApiResource(API_SEARCH + param);
    if (res) {
      setErrorApi(false);
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
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResponse("");
  }, []);

  const debouncedGetResponse = useCallback(
    debounce((value) => getResponse(value), 300),
    []
  );

  const handleInputChange = (value) => {
   
    setInputSearchValue(value);
    debouncedGetResponse(value);
  };
  return (
    <>
      <h1 className="header__text">Search</h1>
      <UiInput
        handleInputChange={handleInputChange}
        value={inputSearchValue}
        placeholder="Who are you looking for, padawan?"
        classes={styles.input__search}
      />
      <SearchPageInfo people={people} />
    </>
  );
};

SearchPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(SearchPage);
