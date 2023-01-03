import React from "react";

import PropTypes from "prop-types";
import styles from "./PersonImage.module.css";

const PersonImage = ({ personPhoto }) => {
  return (
    <div className={styles.container}>
      <img className={styles.photo} src={personPhoto} alt="the character"></img>
    </div>
  );
};

PersonImage.propTypes = {
  personPhoto: PropTypes.string,
};

export default PersonImage;
