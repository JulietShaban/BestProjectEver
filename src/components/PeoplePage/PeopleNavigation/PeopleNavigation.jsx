import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import styles from "./PeopleNavigation.module.css";

const PeopleNavigation = ({ getResource, nextPage, prevPage, counterPage }) => {
  const handleChangeNext = () => getResource(nextPage);
  const handleChangePrev = () => getResource(prevPage);

  return (
    <div>
      <Link className={styles.link} to={`/people/?page=${counterPage - 1}`}>
        <button
          disabled={!prevPage}
          onClick={handleChangePrev}
          className={styles.buttons}
        >
          Previous
        </button>
      </Link>
      <Link className={styles.link} to={`/people/?page=${counterPage + 1}`}>
        <button
          disabled={!nextPage}
          onClick={handleChangeNext}
          className={styles.buttons}
        >
          Next
        </button>
      </Link>
    </div>
  );
};

PeopleNavigation.propTypes = {
  getResource: PropTypes.func,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  counterPage: PropTypes.number,
};

export default PeopleNavigation;
