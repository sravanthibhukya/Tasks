// product.js
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");
    
    fetch(`api/products/${productId}`)
        .then(response => response.json())
        .then(product => {
            const productDetails = document.getElementById("product-details");
            productDetails.innerHTML = `
                <img src="${product.productImage}" alt="${product.productName}">
                <h2>${product.productName}</h2>
                <p>${product.productDescription}</p>
                <p>$${product.productPrice}</p>
            `;
        });
});
