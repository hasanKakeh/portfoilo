import "./App.scss";
import "bootstrap/dist/js/bootstrap.js";

import Footer from "./app/footer";
import Header from "./app/header";
import ProjectList from "./app/project-list";
import React from "react";

function App() {
  React.useEffect(() => {}, []);
  function downloadCV() {
    console.log("download");
    //https://drive.google.com/file/d/1vgpbso_mKh6Sk-6MSrWFB7-LSMnfBIQw/view?usp=sharing
    let a = document.createElement("a");
    //const url = URL.createObjectURL(file);
    a.href =
      "https://drive.google.com/file/d/1vgpbso_mKh6Sk-6MSrWFB7-LSMnfBIQw/view?usp=sharing";
    a.download = "fileName.pdf";
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
  }
  return (
    <div className="App">
      <Header></Header>
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        <section id="about" className="mt-4">
          <h2 id="projects" className="text-center title mb-5">
            About
          </h2>
          <div className="row w-100">
            <div className="col-4">
              <div
                style={{ width: "50%", margin: "auto", cursor: "pointer" }}
                className=" position-relative resume"
                onClick={downloadCV}
              >
                <img
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                  }}
                  className="w-100 "
                  src={process.env.PUBLIC_URL + "./my-cv.jpg"}
                  alt=""
                />
                <span
                  className="white d-none"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    fontWeight: 600,
                  }}
                >
                  Download CV
                </span>
              </div>
            </div>
            <div className="col">
              <p className="larg-text">
                Front End Developer with one years experience building and
                maintaining responsive websites in the recruiting industry.
                using HTML, CSS, JavaScript,Angular and React; <br /> plus
                modern libraries and frameworks.
              </p>
            </div>
          </div>
        </section>
        <ProjectList></ProjectList>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
