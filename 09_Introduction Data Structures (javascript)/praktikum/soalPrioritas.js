// dapetin referensi ke elemen input
const productNameInput = document.getElementById("productName");
const productPriceInput = document.getElementById("productPrice");
const submitButton = document.querySelector('.submit-btn input[type="submit"]');

// event listener untuk event input pada productName
productNameInput.addEventListener("input", function () {
  const productName = productNameInput.value;

  // validasi
  if (productName.match(/[!@#{}]/)) {
    alert("Name must not contain symbols.");
    productNameInput.value = productName.replace(/[!@#{}]/g, "");
  }
  if (productName.length === 10) {
    alert("Last Name must not exceed 25 characters.");
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
  const productFreshnessOptions = document.querySelectorAll('input[name="product_fresh"]');
  let productFreshnessValue;
  productFreshnessOptions.forEach(function (option) {
    if (option.checked) {
      productFreshnessValue = option.value;
      productFreshnessSelected = true;
    }
  });
  const additionalDesc = document.getElementById("floatingTextarea").value.trim();

  productFreshnessOptions.forEach(function (option) {
    if (option.checked) {
      productFreshnessSelected = true;
    }
  });

  // validasi cek field kosong atau gak
  if (productName === "") {
    alert("Please enter a valid Product name.");
  } else if (productPrice === "") {
    alert("Please enter a valid Product price.");
  } else if (productCategory === "") {
    alert("Please select a Product category.");
  } else if (imageFile === "") {
    alert("Please select an Image of Product.");
  } else if (!productFreshnessSelected) {
    alert("Please select Product Freshness.");
  } else if (additionalDesc === "") {
    alert("Please enter Additional Description.");
  } else {
    // tambahkan data ke dalam tabel
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

    // Membersihkan nilai-nilai input form setelah berhasil submit
    productNameInput.value = "";
    productPriceInput.value = "";
    document.querySelector(".product-category select").selectedIndex = 0;
    document.getElementById("customFile").value = "";
    productFreshnessOptions.forEach(function (option) {
      option.checked = false;
    });
    document.getElementById("floatingTextarea").value = "";

    // Menampilkan pesan sukses setelah form berhasil di-submit
    alert("Form submitted successfully!");
  }
});
