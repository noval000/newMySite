import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./components/home/home";
import About from "./components/about/about";
import Uslugi from "./components/uslugi/uslugi";
import Portfolio from "./components/portfolio/portfolio";
import Price from "./components/price/price";
import Header from "./components/header/header";
import Contacts from "./components/contacts/contacts";
import {ParallaxProvider} from "react-scroll-parallax";
import React from "react";
import {Cursor} from "react-creative-cursor";

function App() {
  return (
<ParallaxProvider>
  <div className="App">
    <Header/>

    {/*<Routes>*/}
    {/*  <Route*/}
    {/*      exact*/}
    {/*      path="/"*/}
    {/*      element={<Home />}*/}
    {/*  />*/}
    {/*  <Route*/}
    {/*      exact*/}
    {/*      path="/uslugi"*/}
    {/*      element={<Uslugi />}*/}
    {/*  />*/}
    {/*  <Route*/}
    {/*      exact*/}
    {/*      path="/portfolio"*/}
    {/*      element={<Portfolio />}*/}
    {/*  />*/}
    {/*  <Route*/}
    {/*      exact*/}
    {/*      path="/contacts"*/}
    {/*      element={<Contacts />}*/}
    {/*  />*/}
    {/*    */}
    {/*</Routes>*/}

      <Home />
      <Uslugi />
      <Portfolio />
    <Cursor
        cursorSize={20}
        animationDuration={0.5}
        cursorBackgrounColor={"#fff"}
        isGelly={true}
    />
  </div>
</ParallaxProvider>

  );
}

export default App;
