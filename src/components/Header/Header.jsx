import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Favorite from "@components/Favorite";

import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEUTRAL,
} from "@context/ThemeProvider";

import imgSpaceStation from "./img/space-station.svg";
import imgDroid from "./img/droid.svg";
import imgLightsaber from "./img/lightsaber.svg";

import styles from "./Header.module.css";

const Header = () => {
  const [icon, setIcon] = useState(imgDroid);

  const isTheme = useTheme();
  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setIcon(imgLightsaber);
        break;
      case THEME_DARK:
        setIcon(imgSpaceStation);
        break;
      case THEME_NEUTRAL:
        setIcon(imgDroid);
        break;
      default:
        setIcon(imgDroid);
    }
  }, [isTheme]);

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={icon} alt="Star Wars icon" />
      <ul className={styles.list__container}>
        <li className={styles.list__item}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={styles.list__item}>
          <NavLink to="/people/?page=1">People</NavLink>
        </li>
        <li className={styles.list__item}>
          <NavLink to="/search">Search</NavLink>
        </li>
      </ul>

      <Favorite />
    </div>
  );
};

export default Header;
