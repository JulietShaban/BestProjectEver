import styles from "./HomePage.module.css";

import ChooseSide from "@components/HomePage/ChooseSide";

const HomePage = () => {
  return (
    <>
      <h1 className={styles.header__text}>Choose your side</h1>
      <ChooseSide />
      </>
  );
};

export default HomePage;
