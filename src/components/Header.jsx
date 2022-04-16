import React from "react";
import Logo from "../images/Logo.png";
import Drop from "../images/arrow-dropdown.png";
import { ReactComponent as Computer } from "../images/logo.svg";
import { Button, Typography } from "@mui/material";

export default function Header() {
  // window.onscroll = function () {
  //   myFunction();
  // };

  // var navbar = document.getElementById("navbar");
  // var sticky = navbar.offsetTop;

  // function myFunction() {
  //   if (window.pageYOffset >= sticky) {
  //     navbar.classList.add("sticky");
  //   } else {
  //     navbar.classList.remove("sticky");
  //   }
  // }
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 p-0">
            <h1 className="topHeader py-2 text-center my-0 text-light">
              See the results of our 2021 ML Practitioner Survey
            </h1>
          </div>
        </div>
      </div>

      <div className="headerMenu">
        <nav
          className="menu navbar navbar-expand-lg py-0 navbar-dark navbar-fixed-top"
          id="navbar"
        >
          <div className="container">
            <a className="logoWrapper navbar-brand" href="#">
              <img src={Logo} alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">
                    Enterprise
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Data Scientists
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/">
                    Enterprise
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Data Scientists
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/">
                    Enterprise
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Data Scientists
                  </a>
                </li>
              </ul>

              <ul className="navbar-nav mRight">
                <li className="nav-item active">
                  <a className="nav-link" href="/">
                    Login
                  </a>
                </li>
                <div className="signupBtn">
                  <button type="button">Create a free account</button>
                </div>
              </ul>
            </div>
          </div>
        </nav>

        {/* sliderSection */}
        <div className="container">
          <div className="row pt-5 flexDiv featurette">
            <div className="col-md-6 col-sm-12">
              <div className="divContent">
                <h1 className="sliderHead">Build better ML models faster.</h1>
                <p>
                  Manage and optimize the entire ML lifecycle, from experiment
                  tracking to model production monitoring.
                </p>
                <div className="mt-4">
                  <button className="btn btn-danger p-2">
                    Get Started For Free
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <Computer></Computer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
