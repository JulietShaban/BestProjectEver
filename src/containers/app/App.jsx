import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "@components/Header/Header";
import routesConfig from "@routes/routesConfig";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          {routesConfig.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;