if (product1 !== "" && product2 !== "") {

  // Fetch the list of products from the JSON file
  fetch("products.json")
    .then(response => response.json())
    .then(products => {
  
      // Create the <select> element
      var select = document.getElementById("product1");
      products.forEach(product => {
        var option = document.createElement("option");
        option.value = product.id;
        option.text = product.name;
        select.add(option);
      });
      select.addEventListener("change", function() {
        var selectedProduct = products.find(product => product.id == this.value);
        if (selectedProduct) {
          var descriptionEl = document.getElementById("product-judul1");
          descriptionEl.innerHTML = `
          <h2>${selectedProduct.name}</h2>`; }
      });
      select.addEventListener("change", function() {
        var selectedProduct = products.find(product => product.id == this.value);
        if (selectedProduct) {
          var descriptionEl = document.getElementById("product-img1");
          descriptionEl.innerHTML = `
          <img src="${selectedProduct.imageUrl}" alt="${selectedProduct.name}" style="width:100px;height:auto;">`; }
      });
      select.addEventListener("change", function() {
        var selectedProduct = products.find(product => product.id == this.value);
        if (selectedProduct) {
          var descriptionEl = document.getElementById("product-description1");
          descriptionEl.innerHTML = `
            <ul>${selectedProduct.features.map(feature => `<li>${feature}</li>`).join("")}</ul>`; }
      });

      var select = document.getElementById("product2");
      products.forEach(product => {
        var option = document.createElement("option");
        option.value = product.id;
        option.text = product.name;
        select.add(option);
      });
      select.addEventListener("change", function() {
        var selectedProduct = products.find(product => product.id == this.value);
        if (selectedProduct) {
          var descriptionEl = document.getElementById("product-judul2");
          descriptionEl.innerHTML = `
          <h2>${selectedProduct.name}</h2>`; }
      });
      select.addEventListener("change", function() {
        var selectedProduct = products.find(product => product.id == this.value);
        if (selectedProduct) {
          var descriptionEl = document.getElementById("product-img2");
          descriptionEl.innerHTML = `
          <img src="${selectedProduct.imageUrl}" alt="${selectedProduct.name}" style="width:100px;height:auto;">`; }
      });
      // Add an event listener to show the product description when a product is selected
      select.addEventListener("change", function() {
        var selectedProduct = products.find(product => product.id == this.value);
        if (selectedProduct) {
          var descriptionEl = document.getElementById("product-description2");
          descriptionEl.innerHTML = `
            <ul>${selectedProduct.features.map(feature => `<li>${feature}</li>`).join("")}</ul>`; }
      });
    });
  };