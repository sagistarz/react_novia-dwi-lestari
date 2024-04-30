import { useState } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import ProductForm from "./component/ProductForm";
import SubmittedData from "./component/SubmittedData";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <ProductForm />
      <SubmittedData />
    </div>
  );
}

export default App;
