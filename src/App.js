import './App.css';
import Home from "./components/home/home";
import Uslugi from "./components/uslugi/uslugi";
import Portfolio from "./components/portfolio/portfolio";
import Header from "./components/header/header";
import {ParallaxProvider} from "react-scroll-parallax";
import React, {useState} from "react";
import {Cursor} from "react-creative-cursor";
import Footer from "./components/Footer/Footer";

function App() {



  return (
<ParallaxProvider>
  <div className="App">


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
      <Header/>
      <Home/>
      <Uslugi />
      <Portfolio />
      <Footer />
  </div>
</ParallaxProvider>

  );
}

export default App;
