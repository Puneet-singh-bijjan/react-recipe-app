import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Cuisine from "../pages/Cuisine";
import Searched from "../components/Searched";
import Recipe from "./Recipe";
import {useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
 
function Pages() {
  const location = useLocation()
  return (
    <div>
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route exact path={"/"} element={<Home />} />
        <Route path={"/cuisine/:id"} element={<Cuisine />} />
        <Route path={"/searched/:search"} element={<Searched />} />
        <Route path={"/recipe/:id"} element={<Recipe  />} />
        <Route path={"/searched/nofound"} element={<h4 style={{color: "red", textAlign: "center", margin: "auto"}} >Sorry, We Found Nothing On Our Server</h4>} />
      </Routes>
      </AnimatePresence>
    </div>
  );
}

export default Pages;
