import React, { useEffect } from "react";

function ProductForm() {
  useEffect(() => {
    const productNameInput = document.getElementById("productName");
    const productPriceInput = document.getElementById("productPrice");
    const submitButton = document.querySelector('.submit-btn input[type="submit"]');

    const productFreshnessOptions = document.querySelectorAll('input[name="product_fresh"]');
    let productFreshnessSelected = false;

    productNameInput.addEventListener("input", function () {
      const productName = productNameInput.value;

      if (productName.match(/[!@#{}]/)) {
        alert("Name must not contain symbols.");
        productNameInput.value = productName.replace(/[!@#{}]/g, "");
      }
      if (productName.length > 25) {
        productNameInput.value = productName.slice(0, 25);
        alert("Product Name must not exceed 25 characters.");
      }
    });

    submitButton.addEventListener("click", function (event) {
      event.preventDefault();

      const productName = productNameInput.value.trim();
      const productPrice = productPriceInput.value.trim();
      const productCategory = document.querySelector(".product-category select").value;
      const imageFile = document.getElementById("customFile").value;
      let productFreshnessValue = "";

      productFreshnessOptions.forEach(function (option) {
        if (option.checked) {
          productFreshnessValue = option.value;
          productFreshnessSelected = true;
        }
      });

      const additionalDesc = document.getElementById("floatingTextarea").value.trim();

      if (productFreshnessSelected) {
        const submittedData = document.getElementById("submittedData");
        const newRow = submittedData.insertRow();
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);
        const cell6 = newRow.insertCell(5);

        cell1.innerHTML = productName;
        cell2.innerHTML = productPrice;
        cell3.innerHTML = productCategory;
        cell4.innerHTML = `<img src="${imageFile}" alt="product image" style="max-width: 100px; max-height: 100px;" />`;
        cell5.innerHTML = productFreshnessValue;
        cell6.innerHTML = additionalDesc;

        productNameInput.value = "";
        productPriceInput.value = "";
        document.querySelector(".product-category select").selectedIndex = 0;
        document.getElementById("customFile").value = "";
        productFreshnessOptions.forEach(function (option) {
          option.checked = false;
        });
        document.getElementById("floatingTextarea").value = "";

        alert("Form submitted successfully!");
      }
    });
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6 my-5">
          <section className="detail-product">
            <h4>Detail Product</h4>
          </section>

          <section className="product-name">
            <label htmlFor="productName" className="form-label">
              Product name
            </label>
            <input type="text" id="productName" className="form-control" style={{ width: "18rem" }} required />
          </section>

          <section className="product-category" aria-required="true" style={{ width: "14rem" }}>
            <label htmlFor="productCategory" className="form-label">
              Product category
            </label>
            <select className="form-select me-3">
              <option value="">Choose...</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </select>
          </section>

          <section className="img-product" aria-required="true">
            <label htmlFor="customFile" className="form-label">
              Image of Product
            </label>
            <input type="file" className="form-control" id="customFile" required style={{ width: "240px" }} />
          </section>

          <section aria-required="true">
            <label>Product Freshness :</label>
            <br />
            <input type="radio" id="brand_new" name="product_fresh" value="Brand New" />
            <label htmlFor="brand_new">Brand New</label>
            <br />
            <input type="radio" id="second_hand" name="product_fresh" value="Second Hand" />
            <label htmlFor="second_hand">Second Hand</label>
            <br />
            <input type="radio" id="refurbished" name="product_fresh" value="Refurbished" />
            <label htmlFor="refurbished">Refurbished</label>
            <br />
            <br />
          </section>

          <section className="additionalDesc">
            <label htmlFor="additionalDesc" className="form-floating">
              Additional Description
            </label>
            <textarea className="form-control" placeholder="" id="floatingTextarea" style={{ height: "150px" }} required></textarea>
          </section>

          <section>
            <label htmlFor="productPrice" className="form-label">
              Product Price
            </label>
            <input type="text" className="form-control" id="productPrice" aria-describedby="priceHelp" placeholder="$1" required />
          </section>

          <section className="submit-btn text-center">
            <input className="btn btn-primary" type="submit" value="Submit" style={{ width: "80%", margin: "4rem 0rem 2rem 0rem" }} required />
          </section>
        </div>
      </div>
    </div>
  );
}

export default ProductForm;
