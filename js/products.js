let products = JSON.parse(localStorage.getItem("products")) || [];

let table = document.getElementById("productTable");

products.forEach(p => {

    let row = table.insertRow();

    row.innerHTML = `
        <td>${p.productName || ""}</td>
        <td>${p.brand || ""}</td>
        <td>${p.serialNumber || ""}</td>
        <td>${p.purchaseDate || ""}</td>
        <td>${p.warranty || ""}</td>
        <td>${p.expiryDate || ""}</td>
    `;
});