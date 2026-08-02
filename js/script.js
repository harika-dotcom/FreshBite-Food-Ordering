// Add item to cart
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart!");
}

// Display cart
function displayCart() {

    const cartContainer = document.getElementById("cart-items");

    if (!cartContainer) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cartContainer.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        cartContainer.innerHTML += `
        <div class="cart-item">
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>

            <button onclick="removeItem(${index})">
                Remove
            </button>
        </div>
        `;
    });

    cartContainer.innerHTML += `
        <h2>Total : ₹${total}</h2>
    `;
}

// Remove item
function removeItem(index) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}

// Wishlist
function addWishlist(item) {
    alert(item + " added to wishlist ❤️");
}

// Search food
function searchFood() {

    let input = document.getElementById("search").value.toLowerCase();

    let cards = document.querySelectorAll(".food-card");

    cards.forEach(card => {

        let title = card.querySelector("h3").innerText.toLowerCase();

        if (title.includes(input))
            card.style.display = "block";
        else
            card.style.display = "none";
    });
}

// Filter food
function filterFood() {

    let value = document.getElementById("filter").value;

    let cards = document.querySelectorAll(".food-card");

    cards.forEach(card => {

        if (value === "all") {

            card.style.display = "block";

        } else {

            if (card.dataset.category === value)
                card.style.display = "block";
            else
                card.style.display = "none";
        }

    });

}

// Run cart automatically
window.onload = function () {

    displayCart();

};
