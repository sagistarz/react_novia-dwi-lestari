import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import logo1 from "../assets/3.png";

function Intro() {
  return (
    <div className="section text-dark">
      <div className="container text-center">
        <img src={logo1} alt="logo" />
        <h3 className="mt-4">Welcome to My Portfolio Page!</h3>
        <Link to="/about-me">
          <Button text="About Me" warna="danger" />
        </Link>
      </div>
    </div>
  );
}

export default Intro;
