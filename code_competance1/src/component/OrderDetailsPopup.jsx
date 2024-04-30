import React from "react";

function OrderDetailsPopup({ formData, onClose }) {
  return (
    <div className="popup" style={{ backgroundColor: "#fbe4e8" }}>
      <h2>Your Order Details</h2>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Email: {formData.email}</p>
      <p>Your Message: {formData.orders}</p>
      <button className="btn btn-primary" onClick={onClose}>
        Close
      </button>
    </div>
  );
}

export default OrderDetailsPopup;
