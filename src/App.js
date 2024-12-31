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
import ShoppingList from "./components/lists/ShoppingList.component";
import { companyData, w3data } from "./data/table.data";
import { List } from "./components/lists/List.component";

function ListElement({ props }) {
  return <li>{props.data}</li>;
}

function App() {
  return (
    <div className="App">
      <List props={{ data: [1, 2, 3], component: ListElement }} />
      {/* <ListElement props={{ data: "Hello World!" }} /> */}
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
