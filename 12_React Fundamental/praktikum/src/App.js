import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./pages/Navbar";
import Header from "./pages/Header";
import ProductForm from "./pages/ProductForm";
import SubmittedData from "./pages/SubmittedData";

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
