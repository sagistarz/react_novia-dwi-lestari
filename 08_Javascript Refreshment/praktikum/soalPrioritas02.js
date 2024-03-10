// dapetin referensi ke elemen input
const productNameInput = document.getElementById("productName");
const productPriceInput = document.getElementById("productPrice");
const submitButton = document.querySelector('.submit-btn input[type="submit"]');

// event listener untuk event input pada productName
productNameInput.addEventListener("input", function () {
  // Dapatkan nilai dari input
  const productName = productNameInput.value;

  // validasi kalo karakter mengandung simbol
  if (productName.match(/[!@#{}]/)) {
    alert("Name must not contain symbols.");
    productNameInput.value = productName.replace(/[!@#{}]/g, "");
  }

  // validasi kalo panjang karakter 10
  if (productName.length === 10) {
    alert("Last Name must not exceed 25 characters.");
  }
  // valdidasi kalo panjang karakter 25
  if (productName.length > 25) {
    productNameInput.value = productName.slice(0, 25);
    alert("Product Name must not exceed 25 characters.");
  }
});

// event listener untuk event click pada tombol submit
submitButton.addEventListener("click", function (event) {
  // Hentikan perilaku default dari tombol Submit (mengirimkan form)
  event.preventDefault();

  // dapetin nilai dari input productName dan productPrice
  const productName = productNameInput.value.trim();
  const productPrice = productPriceInput.value.trim();
  const productCategory = document.querySelector(".product-category select").value;
  const imageFile = document.getElementById("customFile").value;
  const productFreshnessOptions = document.querySelectorAll('input[name="product_fresh"]');
  let productFreshnessSelected = false;
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
    alert("Form submitted successfully!");
  }
});
