import React, { useState }from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../../assets/css/styles.module.css";
import { auth } from '../../firebase'; // Import auth dari firebase
import { signOut } from 'firebase/auth'; // Import signOut dari firebase/auth
import { toast } from 'react-toastify'; // Import toast dari react-toastify

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState(null); // Add a state variable for the error message
  const firstName = localStorage.getItem('firstName');

  const isHomeActive = location.pathname === "/";
  const isCreateProductActive = location.pathname === "/create-product";
  const isLoginActive = location.pathname === "/login";
  const isRegisterActive = location.pathname === "/register";
  const isChatAiActive = location.pathname === "/chatai"

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out from Firebase Authentication
      localStorage.removeItem('authToken'); // Remove authToken from localStorage
      navigate('/login');
      toast.success(`Goodbye, ${firstName}!`, {
        autoClose: 3000,
        hideProgressBar: true,
      }); // Redirect to login page after successful logout
    } catch (error) {
      setError("Failed to logout. Please try again later."); // Handle error
    }
  };

  return (
    <div>
      <div className={styles.header}>
        <nav className="navbar navbar-expand-lg bg-white w-auto" style={{ boxShadow: '0px 1px 8px 0px #00000033' }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#" style={{fontWeight: '500', fontSize: '24px'}}>Simple Header</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink className={isHomeActive ? "btn btn-primary" : "btn text-primary"} style={{fontWeight: '500', fontSize: '16px'}} to="/">Home</NavLink>
                <NavLink className={isCreateProductActive ? "btn btn-primary" : "btn text-primary"} style={{fontWeight: '500', fontSize: '16px'}} to="/create-product">Create Product</NavLink>
                <NavLink className="btn text-primary" style={{fontWeight: '500', fontSize: '16px'}} to="/features">Features</NavLink>
                <NavLink className="btn text-primary" style={{fontWeight: '500', fontSize: '16px'}} to="/pricing">Pricing</NavLink>
                <NavLink className={isChatAiActive ? "btn btn-primary" : "btn text-primary"} style={{fontWeight: '500', fontSize: '16px'}} to="/chatai">Chat AI</NavLink>
                {/* <NavLink className="btn text-primary" style={{fontWeight: '500', fontSize: '16px'}} to="/chatai">Chat AI</NavLink> */}
                <NavLink className="btn text-primary" style={{fontWeight: '500', fontSize: '16px'}} to="/about">About</NavLink>
                <button className="btn text-primary" style={{fontWeight: '500', fontSize: '16px'}} onClick={handleLogout}>Logout</button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
