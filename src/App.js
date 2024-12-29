// import logo from './logo.svg';

import React from "react";
import "./App.css";

import { Header } from "./components/Header.component";
import { MainContent } from "./components/MainContent.component";
import { Sidebar } from "./components/Sidebar.component";
import { FlexContainer } from "./components/FlexContainer.component";
import { Footer } from "./components/Footer.component";

function App() {
  return (
    <div className="App">
      <Header />
      <FlexContainer children={[<Sidebar />, <MainContent />]} />
      <Footer />
    </div>
  );
}

export default App;
