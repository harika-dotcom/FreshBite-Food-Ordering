
/* Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: #fff8f0;
    color: #333;
}

/* Navigation */
.navbar {
    background: #ff6b35;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 60px;
}

.logo {
    font-size: 30px;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 25px;
}

.nav-links a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

.nav-links a:hover {
    color: yellow;
}

/* Hero Section */
.hero {
    text-align: center;
    padding: 100px 20px;
    background: linear-gradient(to right, #ff6b35, #ff914d);
    color: white;
}

.hero h1 {
    font-size: 50px;
    margin-bottom: 20px;
}

.hero p {
    font-size: 22px;
    margin-bottom: 30px;
}

.btn {
    background: white;
    color: #ff6b35;
    padding: 12px 25px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: bold;
}

.btn:hover {
    background: yellow;
}

/* Categories */
.categories {
    padding: 60px;
    text-align: center;
}

.categories h2 {
    margin-bottom: 40px;
    font-size: 35px;
}

.category-box {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

.card {
    background: white;
    width: 180px;
    padding: 30px;
    border-radius: 12px;
    font-size: 24px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.15);
    cursor: pointer;
    transition: 0.3s;
}

.card:hover {
    transform: scale(1.05);
}

/* Footer */
footer {
    background: #2d1b12;
    color: white;
    text-align: center;
    padding: 20px;
    margin-top: 50px;
}

/* Mobile */
@media (max-width:768px) {

    .navbar {
        flex-direction: column;
        gap: 15px;
    }

    .nav-links {
        flex-wrap: wrap;
        justify-content: center;
    }

    .hero h1 {
        font-size: 35px;
    }

    .hero p {
        font-size: 18px;
    }

    .card {
        width: 140px;
    }
}
.menu-grid{
    display:flex;
    justify-content:center;
    gap:30px;
    flex-wrap:wrap;
    padding:40px;
}

.food-card{
    background:white;
    width:280px;
    border-radius:10px;
    box-shadow:0 5px 15px rgba(0,0,0,.2);
    overflow:hidden;
    text-align:center;
}

.food-card img{
    width:100%;
    height:200px;
    object-fit:cover;
}

.food-card h3{
    margin:15px 0;
}

.food-card p{
    font-size:22px;
    color:#ff6b35;
    margin-bottom:15px;
}

.food-card button{
    background:#ff6b35;
    color:white;
    border:none;
    padding:12px 20px;
    margin-bottom:20px;
    cursor:pointer;
    border-radius:5px;
}

.food-card button:hover{
    background:#e85b24;
}
.cart-item{

background:white;

padding:20px;

margin:20px auto;

width:400px;

border-radius:10px;

box-shadow:0 5px 10px rgba(0,0,0,.2);

text-align:center;

}

.cart-item button{

background:red;

color:white;

border:none;

padding:10px 20px;

cursor:pointer;

margin-top:10px;

border-radius:5px;

}

.cart-item button:hover{

background:darkred;

}
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Checkout - FreshBite</title>

<link rel="stylesheet" href="css/style.css">
</head>

<body>

<nav class="navbar">
    <h2>🍕 FreshBite</h2>

    <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="menu.html">Menu</a></li>
        <li><a href="cart.html">Cart</a></li>
    </ul>
</nav>

<section class="checkout">

<h1>Checkout</h1>

<form id="checkoutForm">

<input type="text" placeholder="Full Name" required>

<input type="tel" placeholder="Mobile Number" required>

<textarea placeholder="Delivery Address" required></textarea>

<select required>
<option value="">Select Payment</option>
<option>Cash on Delivery</option>
<option>UPI</option>
<option>Credit / Debit Card</option>
</select>

<button type="submit">
Place Order
</button>

</form>

<div id="successMessage"></div>

</section>

<script src="js/script.js"></script>

</body>
</html>
.login{

max-width:450px;

margin:50px auto;

background:white;

padding:30px;

border-radius:10px;

box-shadow:0 5px 15px rgba(0,0,0,.2);

}

.login h1{

text-align:center;

margin-bottom:20px;

}

.login input{

width:100%;

padding:12px;

margin:12px 0;

font-size:16px;

border-radius:5px;

border:1px solid #ccc;

}

.login button{

width:100%;

padding:15px;

background:#ff6b35;

color:white;

font-size:18px;

border:none;

border-radius:5px;

cursor:pointer;

}

.login button:hover{

background:#e85b24;

}

#loginSuccess{

margin-top:20px;

text-align:center;

font-size:20px;

color:green;

font-weight:bold;

}
.about,
.contact{

max-width:900px;

margin:40px auto;

background:white;

padding:40px;

border-radius:10px;

box-shadow:0 5px 15px rgba(0,0,0,.2);

}

.about h1,
.contact h1{

margin-bottom:20px;

text-align:center;

}

.about p{

margin:20px 0;

line-height:1.8;

}

.about ul{

margin-left:30px;

margin-top:20px;

}

.contact input,
.contact textarea{

width:100%;

padding:12px;

margin:10px 0;

border:1px solid #ccc;

border-radius:5px;

}

.contact textarea{

height:150px;

resize:none;

}

.contact button{

background:#ff6b35;

color:white;

padding:15px;

border:none;

width:100%;

font-size:18px;

border-radius:5px;

cursor:pointer;

}

.contact button:hover{

background:#e85b24;

}
.search-box{

display:flex;

justify-content:center;

gap:20px;

margin:30px;

flex-wrap:wrap;

}

.search-box input,
.search-box select{

padding:12px;

font-size:16px;

border-radius:5px;

border:1px solid gray;

width:250px;

}
#coupon{

padding:10px;

width:250px;

margin:20px;

}

.cart-item button{

margin:8px;

}
<button onclick="addToCart('Pizza', 299)">Add to Cart</button>
<button onclick="addToCart('Burger', 199)">Add to Cart</button>
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart!");
}
<section class="reviews">

<h2>⭐ Customer Reviews</h2>

<div class="review-card">
<h3>Rahul</h3>
<p>⭐⭐⭐⭐⭐</p>
<p>Amazing food and quick delivery!</p>
</div>

<div class="review-card">
<h3>Priya</h3>
<p>⭐⭐⭐⭐</p>
<p>Good quality food. Highly recommended.</p>
</div>

<div class="review-card">
<h3>Aman</h3>
<p>⭐⭐⭐⭐⭐</p>
<p>Best pizza I've had online!</p>
</div>

</section>


