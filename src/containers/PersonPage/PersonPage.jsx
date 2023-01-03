import React, { useEffect, useState, Suspense } from "react";
import { useParams } from "react-router";

import { getApiResource } from "@utils/network";
import { API_PERSON } from "@constants/api";
import { withErrorApi } from "@hoc-helpers/withErrorApi";
import { getPeopleImage } from "@services/getPeopleData";
import PersonImage from "@components/PersonPage/PersonImage";
import PersonInfo from "@components/PersonPage/PersonInfo";
import PersonLinkBack from "@components/PersonPage/PersonLinkBack/PersonLinkBack";
import UiLoading from "@components/UI/UiLoading";

import PropTypes from "prop-types";
import styles from "./PersonPage.module.css";

const PersonFilms = React.lazy(() =>
  import("@components/PersonPage/PersonFilms/PersonFilms")
);

const PersonPage = ({ setErrorApi }) => {
  const { id } = useParams();
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  const [personFilms, setPersonFilms] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}/`);
      if (res) {
        setPersonName(res.name);
        setPersonPhoto(getPeopleImage(id));
        setPersonInfo([
          { title: "Date of birth", data: res.birth_year },
          { title: "Gender", data: res.gender },
          { title: "Height", data: res.height },
          { title: "Mass", data: res.mass },
          { title: "Hair Color", data: res.hair_color },
          { title: "Eye Color", data: res.eye_color },
          { title: "Skin Color", data: res.skin_color },
        ]);

        res.films.length && setPersonFilms(res.films);

        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  });

  return (
    <>
      <PersonLinkBack /> 
      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>
        <div className={styles.container}>
          {" "}
          <PersonImage personPhoto={personPhoto} />
          {personInfo && <PersonInfo personInfo={personInfo} />}
          {personFilms && (
            <Suspense fallback={<UiLoading/>}>
              <PersonFilms personFilms={personFilms} />
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
};

PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PersonPage);
