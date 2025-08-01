<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>StyleHub - Fashion E-Commerce</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <header>
        <div class="logo">
            <h1>StyleHub</h1>
        </div>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#clothes">Clothes</a></li>
                <li><a href="#shoes">Shoes</a></li>
                <li><a href="#chains">Chains</a></li>
                <li><a href="#cart"><i class="fas fa-shopping-cart"></i> <span id="cart-count">0</span></a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="home" class="hero">
            <div class="hero-content">
                <h2>New Collection 2023</h2>
                <p>Discover the latest trends in fashion</p>
                <button class="shop-now">Shop Now</button>
            </div>
        </section>

        <section id="clothes" class="product-section">
            <h2>Clothes</h2>
            <div class="product-grid" id="clothes-grid"></div>
        </section>

        <section id="shoes" class="product-section">
            <h2>Shoes</h2>
            <div class="product-grid" id="shoes-grid"></div>
        </section>

        <section id="chains" class="product-section">
            <h2>Chains</h2>
            <div class="product-grid" id="chains-grid"></div>
        </section>
    </main>

    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h3>About Us</h3>
                <p>StyleHub is your one-stop destination for the latest fashion trends.</p>
            </div>
            <div class="footer-section">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#clothes">Clothes</a></li>
                    <li><a href="#shoes">Shoes</a></li>
                    <li><a href="#chains">Chains</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Contact Us</h3>
                <p>Email: info@stylehub.com</p>
                <p>Phone: +91 9876543210</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2023 StyleHub. All Rights Reserved.</p>
        </div>
    </footer>

    <div id="cart-modal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Your Cart</h2>
            <div id="cart-items"></div>
            <div id="cart-total">
                <p>Total: ₹<span id="total-amount">0</span></p>
                <button id="checkout-btn">Proceed to Checkout</button>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
