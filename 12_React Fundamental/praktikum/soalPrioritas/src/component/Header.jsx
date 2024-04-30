import React from "react";
import logo from "../../public/bootstrap.svg";

function Header() {
  return (
    <div className="head">
      <div className="logo text-center mb-3 mt-5">
        <img src={logo} alt="logo_bootstrap" />
      </div>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-8">
            <h3 className="mb-2 fw-semibold">Create Product</h3>
            <p>
              Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a <br />
              validation state that can be triggered by attempting to submit the form without completing it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
