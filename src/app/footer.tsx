import Contact from "./contact";

function Footer() {
  return (
      <footer id="contact">
              <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
        <div className="d-flex flex-wrap justify-content-between align-items-center">
          <div>
            <h2 className="white">Hasan Kakeh</h2>
            <p className="grey">@2022, Built by Hasan Kakeh</p>
          </div>
          <div>
            <h3 className="primary-color m-0">Links :</h3>
            <ul
              style={{ gap: "1rem" }}
              className="navbar navbar-nav flex-row p-0"
            >
              <li className="nav-item">
                <a className="nav-link active">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <Contact></Contact>
        </div>
      </footer>
  );
}

export default Footer;
