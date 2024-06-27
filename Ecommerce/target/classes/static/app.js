document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:8080/api/products")
        .then(response => response.json())
        .then(products => {
            const productGrid = document.querySelector(".product-grid");
            products.forEach(product => {
                const productItem = document.createElement("div");
                productItem.classList.add("product-item");
                productItem.innerHTML = `
                    <img src="${product.productImage}" alt="${product.productName}">
                    <h3>${product.productName}</h3>
                    <p>${product.productDescription}</p>
                    <p>$${product.productPrice}</p>
                    <button class="add-to-cart" data-product-id="${product.id}">Add to Cart</button>
                `;
                productGrid.appendChild(productItem);
            });

            document.querySelectorAll(".add-to-cart").forEach(button => {
                button.addEventListener("click", addToCart);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
});

function addToCart(event) {
    const button = event.target;
    const productId = button.getAttribute("data-product-id");

    fetch(`http://localhost:8080/api/products/${productId}`)
        .then(response => response.json())
        .then(product => {
            fetch("http://localhost:8080/api/cart", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(product)
            })
            .then(response => {
                if (response.ok) {
                    alert("Product added to cart");
                } else {
                    alert("Failed to add product to cart");
                }
            })
            .catch(error => console.error('Error adding to cart:', error));
        })
        .catch(error => console.error('Error fetching product details:', error));
}
