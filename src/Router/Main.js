import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />

      </Routes>
    </div>
  );
};

export default Main;
