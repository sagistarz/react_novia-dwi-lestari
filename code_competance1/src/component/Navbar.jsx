import "../styles/Navbar.css";
import logo1 from "../assets/3.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo1} alt="logo" style={{ width: "100px" }} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto active">
              {[
                { title: "Home", path: "/" },
                { title: "About Me", path: "/about-me" },
                { title: "Social", path: "/" },
                { title: "Collab", path: "/" },
                { title: "Rate Card", path: "/" },
                { title: "Contact Me", path: "/" },
              ].map((item) => (
                <li key={item.title} className="nav-item">
                  <Link className="nav-link" to={item.path}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
