// Get cart from localStorage or create empty cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add item
function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart!");
}

// Display cart
function displayCart() {

    const cartItems = document.getElementById("cartItems");
    const total = document.getElementById("total");

    if (!cartItems) return;

    cartItems.innerHTML = "";

    let totalPrice = 0;

    cart.forEach((item, index) => {

        totalPrice += item.price;

        cartItems.innerHTML += `
        <div class="cart-item">
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>

            <button onclick="removeItem(${index})">
            Remove
            </button>

        </div>
        `;
    });

    total.innerHTML = "Total : ₹" + totalPrice;
}

// Remove item
function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem("cart",JSON.stringify(cart));

    displayCart();

}

window.onload = displayCart;
const checkoutForm = document.getElementById("checkoutForm");

if (checkoutForm) {

    checkoutForm.addEventListener("submit", function(e) {

        e.preventDefault();

        let history =
        JSON.parse(localStorage.getItem("orders")) || [];

        history.push({
            date: new Date().toLocaleString(),
            items: cart
        });

        localStorage.setItem(
            "orders",
            JSON.stringify(history)
        );

        localStorage.removeItem("cart");

        alert("🎉 Order Placed Successfully!");

        window.location.href = "orders.html";

    });

}
const loginForm = document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",function(e){

e.preventDefault();

document.getElementById("loginSuccess").innerHTML=
"✅ Login Successful!";

setTimeout(function(){

window.location.href="index.html";

},2000);

});

}
function searchFood(){

let input=document
.getElementById("search")
.value
.toLowerCase();

let foods=document
.getElementsByClassName("food-card");

for(let i=0;i<foods.length;i++){

let name=foods[i]
.getElementsByTagName("h3")[0]
.innerHTML
.toLowerCase();

if(name.includes(input)){

foods[i].style.display="block";

}
else{

foods[i].style.display="none";

}

}

}

function filterFood(){

let value=document
.getElementById("filter")
.value;

let foods=document
.getElementsByClassName("food-card");

for(let i=0;i<foods.length;i++){

if(value=="all"){

foods[i].style.display="block";

}

else if(
foods[i].dataset.category==value){

foods[i].style.display="block";

}

else{

foods[i].style.display="none";

}

}

}
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function addWishlist(item){

    wishlist.push(item);

    localStorage.setItem("wishlist",
    JSON.stringify(wishlist));

    alert(item + " added to Wishlist ❤️");

}
function applyCoupon(){

let code = document.getElementById("coupon").value;

if(code == "FRESH10"){

alert("10% Discount Applied!");

}
else{

alert("Invalid Coupon");

}

}