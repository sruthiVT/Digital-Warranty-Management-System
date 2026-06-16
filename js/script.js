document.getElementById("productForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let productName = document.getElementById("productName").value;
    let brand = document.getElementById("brand").value;
    let serialNumber = document.getElementById("serialNumber").value;
    let purchaseDate = document.getElementById("purchaseDate").value;
    let warrantyPeriod = document.getElementById("warrantyPeriod").value;

    // expiry calculation
    let purchase = new Date(purchaseDate);
    let expiry = new Date(purchase);
    expiry.setMonth(expiry.getMonth() + parseInt(warrantyPeriod));

    let product = {
        productName: productName,
        brand: brand,
        serialNumber: serialNumber,
        purchaseDate: purchaseDate,
        warranty: warrantyPeriod + " Months",
        expiryDate: expiry.toISOString().split("T")[0]
    };

    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.push(product);

    localStorage.setItem("products", JSON.stringify(products));

    document.getElementById("message").innerText = "Product Registered Successfully!";
    document.getElementById("productForm").reset();
});