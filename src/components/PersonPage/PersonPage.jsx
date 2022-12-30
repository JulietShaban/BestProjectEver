import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router";

import { getApiResource } from "@utils/network";
import { API_PERSON } from "@constants/api";

import PropTypes from "prop-types";
import styles from "./PersonPage.module.css";

const PersonPage = () => {
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}/`);
      console.log(res)
    })();
  });

  return <h1>{id}</h1>;
};

PersonPage.propTypes = {};

export default PersonPage;
