import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { REPO_NAME } from "@constants/repo";
import Header from "@components/Header/Header";
import routesConfig from "@routes/routesConfig";
import styles from "./App.module.css";

const App = () => {
  
  return (
    <BrowserRouter
     basename={`/${REPO_NAME}/`}
     >
      <div className={styles.wrapper}>
        <Header />
        <Routes>
          {routesConfig.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
