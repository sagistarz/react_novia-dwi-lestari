import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../../assets/css/styles.module.css";

export default function Navbar() {
  return (
    <div>
      <div className={styles.header}>
        <nav className="navbar navbar-expand-lg bg-white w-auto" style={{ boxShadow: '0px 1px 8px 0px #00000033' }}>
          <div className="container-fluid">
            <a className="navbar-brand fs-5" href="#" >Simple Header</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <button type="button" className="btn btn-primary" data-bs-toggle="button">Home</button>
                <button type="button" className="btn text-primary" data-bs-toggle="button">Features</button>
                <button type="button" className="btn text-primary" data-bs-toggle="button">Pricing</button>
                <button type="button" className="btn text-primary" data-bs-toggle="button">FAQs</button>
                <button type="button" className="btn text-primary" data-bs-toggle="button">About</button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}