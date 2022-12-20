// Fetch the list of products from the JSON file
fetch("products.json")
  .then(response => response.json())
  .then(products => { 
    // Create the <select> element
    var select = document.getElementById("product");
    products.forEach(product => {
      var option = document.createElement("option");
      option.value = product.id;
      option.text = product.name;
      select.add(option);
    });

    // Add an event listener to show the product description when a product is selected
    select.addEventListener("change", function() {
      var selectedProduct = products.find(product => product.id == this.value);
      if (selectedProduct) {
        var descriptionEl = document.getElementById("product-description");
        descriptionEl.innerHTML = `
          <h2>${selectedProduct.name}</h2>
          <ul>
            ${selectedProduct.features.map(feature => `<li>${feature}</li>`).join("")}
          </ul>
        `;
      }
    });
  });
