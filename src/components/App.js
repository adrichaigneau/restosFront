import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./header";
import Home from "../pages/home";
import Restaurant from "../pages/restaurant";
import Avis from "../pages/avis";
import Footer from "./footer";
import Types from "../pages/types";
import Type from "../pages/type";
import Edit from "../pages/edit";
import Carte from "../pages/carte";
import Arr from "../pages/arrondissement";

function App() {
  return (
      <div className="App">
      <Banner></Banner>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/restaurant/:id" element={<Restaurant />} />
          <Route exact path="/avis/:id" element={<Avis />} />
          <Route exact path="/types" element={<Types />} />
          <Route exact path="/type/:id" element={<Type />} />
          <Route exact path="/edit" element={<Edit />} />
          <Route exact path="/carte" element={<Carte />} />
          <Route exact path="/arr/:id" element={<Arr />} />
        </Routes>
      <Footer></Footer>
      </div>
  );
}

export default App;
