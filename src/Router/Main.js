import React from "react";
import { Route, Routes } from "react-router-dom";
import Aboutus from "../Pages/Aboutus";
import App from "../App";
import Contacts from "../Contacts";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
};

export default Main;
