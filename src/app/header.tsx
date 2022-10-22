import React from "react";
import Contact from "./contact";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Navbar></Navbar>
   
      <div className="container ">
        <div className="row section-welcome">
          <div className="col-lg-6 col-md-12  d-flex flex-column">
            <div className="flex-fill d-flex flex-column justify-content-end">
              <h1 className="main-text">Hi, I'm Hasan </h1>
              <h1 className="white">Software Enginering </h1>
              <div className="mt-3">
                <Contact></Contact>
              </div>
            </div>
            <div className="flex-fill d-flex align-items-center">
              <p className="light-grey" style={{ maxWidth: "85%" }}>
                I love exploring and creating🚀, I'm lifelong learner 🎓 want to
                make difference life 🌟
              </p>
            </div>
          </div>
          <div className="col-6 m-auto" style={{zIndex:'99'}}>
            <img
              className=" d-flex img-rounded mx-auto"
              style={{
                width: "18rem",
                height: "18rem",
              }}
              src={require("../personal.jpg")}
              alt=""
            ></img>
            {/* <FontAwesomeIcon style={{ fontSize: "18rem" }} icon={faTv} />
          <h1>{"<Frontend Developer/>"}</h1> */}
          </div>
        </div>
      </div>
    </header>
  );
}
