document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:8080/api/cart")
        .then(response => response.json())
        .then(cartItems => {
            const cartGrid = document.querySelector(".cart-grid");
            const totalCostElement = document.getElementById("total-cost");
            let totalCost = 0;

            if (cartItems.length === 0) {
                cartGrid.innerHTML = "<p>Your cart is empty.</p>";
                totalCostElement.textContent = "$0.00";
            } else {
                cartItems.forEach(cartItem => {
                    const product = cartItem.product;
                    const cartItemElement = document.createElement("div");
                    cartItemElement.classList.add("cart-item");
                    cartItemElement.innerHTML = `
                        <img src="${product.productImage}" alt="${product.productName}">
                        <h3>${product.productName}</h3>
                        <p>${product.productDescription}</p>
                        <p>$${product.productPrice}</p>
                        <button class="remove-from-cart" data-cart-item-id="${cartItem.id}">Remove</button>
                    `;
                    cartGrid.appendChild(cartItemElement);
                    totalCost += product.productPrice;
                });

                totalCostElement.textContent = `$${totalCost.toFixed(2)}`;

                document.querySelectorAll(".remove-from-cart").forEach(button => {
                    button.addEventListener("click", removeFromCart);
                });
            }
        })
        .catch(error => console.error('Error fetching cart items:', error));
});

function removeFromCart(event) {
    const button = event.target;
    const cartItemId = button.getAttribute("data-cart-item-id");

    fetch(`http://localhost:8080/api/cart/${cartItemId}`, {
        method: "DELETE"
    })
    .then(response => {
        if (response.ok) {
            button.closest(".cart-item").remove();
            updateTotalCost();
            alert("Item removed from cart");
        } else {
            alert("Failed to remove item from cart");
        }
    })
    .catch(error => console.error('Error removing from cart:', error));
}

function updateTotalCost() {
    fetch("http://localhost:8080/api/cart")
        .then(response => response.json())
        .then(cartItems => {
            let totalCost = 0;

            cartItems.forEach(cartItem => {
                totalCost += cartItem.product.productPrice;
            });

            document.getElementById("total-cost").textContent = `$${totalCost.toFixed(2)}`;
        })
        .catch(error => console.error('Error updating total cost:', error));
}
