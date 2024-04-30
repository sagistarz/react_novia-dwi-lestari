import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function ContactMe() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    orders: "",
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    alert("Message sent successfully!");
  };

  const handleOrderClick = () => {
    handleShow();
  };

  return (
    <div className="section pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-6 ">
            <h1>
              Contact Me <i class="bi bi-flower3"></i>
            </h1>
            <p>Hi, if you still have any questions to ask me, you can fill out the form on the side! Besides that, you can also still contact me via my telephone/email 💗</p>
            <p>
              <b>
                <i class="bi bi-telephone-fill"></i> : (+62) 859-0000-1111
              </b>
              <br />
              <b>
                <i class="bi bi-envelope-fill"></i> : nopyay.business@gmail.com
              </b>
            </p>
          </div>
          <div className="col-6">
            <form onSubmit={handleSubmit}>
              <div className="form-row ms-5">
                <div className="col-8 mb-3">
                  <label htmlFor="firstName">First name</label>
                  <input type="text" className="form-control" id="firstName" name="firstName" placeholder="First name" value={formData.firstName} onChange={handleChange} required />
                  <label htmlFor="lastName">Last name</label>
                  <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Last name" value={formData.lastName} onChange={handleChange} required />
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-group ms-5">
                <div className="col-8 mb-4">
                  <label htmlFor="orders">Your Message</label>
                  <textarea className="form-control" id="orders" name="orders" rows="3" value={formData.orders} onChange={handleChange}></textarea>
                </div>
              </div>
              <div>
                <button className="btn me-3 ms-5" type="submit" style={{ backgroundColor: "#e299aa" }}>
                  Submit
                </button>
                <button className="btn ms-3 ms-5" type="button" onClick={handleOrderClick} style={{ backgroundColor: "#e299aa" }}>
                  My message
                </button>
              </div>
            </form>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Your Order Details</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>First Name: {formData.firstName}</p>
                <p>Last Name: {formData.lastName}</p>
                <p>Email: {formData.email}</p>
                <p>Your Message: {formData.orders}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
