// import logo from './logo.svg';

import React from "react";
import "./App.css";

import { Header } from "./components/Header.component";
import { MainContent } from "./components/MainContent.component";
import { Sidebar } from "./components/Sidebar.component";
import { FlexContainer } from "./components/FlexContainer.component";
import { Footer } from "./components/Footer.component";
import { Form, FormInput } from "./components/Form.component";
import { StaticTable, DynamicTable } from "./components/table/Table.component";
import ShoppingList from "./components/list/ShoppingList.component";
import { companyData, w3data } from "./data/table.data";

function App() {
  return (
    <div className="App">
      <Header />

      {/* <ShoppingList /> */}
      {/* <Form /> */}
      <StaticTable />
      <DynamicTable props={{ data: w3data }} />
      {/* <FlexContainer children={[<Sidebar />, <MainContent />]} /> */}
      {/* <FlexContainer children={[<Sidebar />, <MainContent />]} /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
