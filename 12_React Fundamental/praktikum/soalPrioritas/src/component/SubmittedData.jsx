import React from "react";

function SubmittedData() {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-8">
          <h3 className="mb-4">Submitted Data</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Product Name</th>
                <th scope="col">Product Price</th>
                <th scope="col">Product Category</th>
                <th scope="col">Image</th>
                <th scope="col">Product Freshness</th>
                <th scope="col">Additional Description</th>
              </tr>
            </thead>
            <tbody id="submittedData"></tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SubmittedData;
