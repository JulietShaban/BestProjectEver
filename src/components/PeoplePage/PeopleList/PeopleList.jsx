import React from "react";
import PropTypes from 'prop-types';
import styles from "./PeopleList.module.css";

const PeopleList = ({ people }) => {
  return (
    <ul className={styles.list__container}>
      {people.map(({ id, name, img }) => (
        <li className={styles.list__item} key={id}>
          <div>
            <img className={styles.person__photo} src={img} alt={name} />
            <p>{name}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

PeopleList.propTypes = {
people: PropTypes.array,
}

export default PeopleList;
