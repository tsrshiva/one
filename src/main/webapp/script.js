document.addEventListener('DOMContentLoaded', function() {
    // Product data
    const products = {
        clothes: [
            { id: 1, title: "Men's Cotton T-Shirt", price: 499, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { id: 2, title: "Women's Floral Dress", price: 1299, image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { id: 3, title: "Men's Formal Shirt", price: 899, image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { id: 4, title: "Women's Denim Jacket", price: 1599, image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { id: 5, title: "Unisex Hoodie", price: 999, image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { id: 6, title: "Men's Jeans", price: 1199, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { id: 7, title: "Women's Blouse", price: 699, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { id: 8, title: "Men's Polo Shirt", price: 599, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { id: 9, title: "Women's Skirt", price: 799, image: "https://images.unsplash.com/photo-1595341595379-cf0f2f9b8a2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { id: 10, title: "Men's Sweater", price: 899, image: "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { id: 11, title: "Women's Cardigan", price: 1099, image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { id: 12, title: "Unisex Tank Top", price: 399, image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { id: 13, title: "Men's Shorts", price: 599, image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { id: 14, title: "Women's Jumpsuit", price: 1499, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { id: 15, title: "Men's Blazer", price: 1999, image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" }
        ],
        shoes: [
            { id: 16, title: "Men's Running Shoes", price: 1999, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { id: 17, title: "Women's Sneakers", price: 1599, image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { id: 18, title: "Men's Formal Shoes", price: 1799, image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { id: 19, title: "Women's Heels", price: 1299, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { id: 20, title: "Unisex Sandals", price: 899, image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { id: 21, title: "Men's Casual Shoes", price: 1499, image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { id: 22, title: "Women's Boots", price: 2199, image: "https://images.unsplash.com/photo-1542280756-74b6f17587a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { id: 23, title: "Kids' School Shoes", price: 999, image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { id: 24, title: "Men's Sports Shoes", price: 2399, image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { id: 25, title: "Women's Flats", price: 799, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { id: 26, title: "Men's Loafers", price: 1299, image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { id: 27, title: "Women's Wedges", price: 1499, image: "https://images.unsplash.com/photo-1542280756-74b6f17587a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { id: 28, title: "Unisex Flip Flops", price: 399, image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { id: 29, title: "Men's Hiking Boots", price: 2799, image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { id: 30, title: "Women's Ballet Flats", price: 899, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" }
        ],
        chains: [
            { id: 31, title: "Silver Chain", price: 1999, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { id: 32, title: "Gold Plated Chain", price: 2499, image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { id: 33, title: "Diamond Pendant Chain", price: 5999, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { id: 34, title: "Leather Bracelet Chain", price: 899, image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { id: 35, title: "Pearl Necklace", price: 3499, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { id: 36, title: "Men's Steel Chain", price: 1299, image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { id: 37, title: "Charm Bracelet", price: 1799, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { id: 38, title: "Rose Gold Chain", price: 2299, image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { id: 39, title: "Titanium Necklace", price: 1599, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { id: 40, title: "Gemstone Bracelet", price: 2899, image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { id: 41, title: "Silver Cufflinks", price: 1499, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { id: 42, title: "Gold Chain with Pendant", price: 3999, image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { id: 43, title: "Beaded Necklace", price: 799, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { id: 44, title: "Platinum Chain", price: 4999, image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { id: 45, title: "Silver Anklet", price: 999, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" }
        ]
    };

    // Shopping cart
    let cart = [];

    // Display products
    function displayProducts() {
        displayCategory('clothes', products.clothes);
        displayCategory('shoes', products.shoes);
        displayCategory('chains', products.chains);
    }

    function displayCategory(categoryId, products) {
        const grid = document.getElementById(`${categoryId}-grid`);
        grid.innerHTML = '';

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-price">₹${product.price}</p>
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            `;
            grid.appendChild(productCard);
        });

        // Add event listeners to all "Add to Cart" buttons
        document.querySelectorAll(`#${categoryId}-grid .add-to-cart`).forEach(button => {
            button.addEventListener('click', addToCart);
        });
    }

    // Add to cart function
    function addToCart(e) {
        const productId = parseInt(e.target.getAttribute('data-id'));
        let product = null;

        // Find the product in any category
        for (const category in products) {
            const foundProduct = products[category].find(p => p.id === productId);
            if (foundProduct) {
                product = foundProduct;
                break;
            }
        }

        if (product) {
            // Check if product already in cart
            const existingItem = cart.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    ...product,
                    quantity: 1
                });
            }

            updateCartCount();
            showNotification(`${product.title} added to cart`);
        }
    }

    // Update cart count in header
    function updateCartCount() {
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        document.getElementById('cart-count').textContent = count;
    }

    // Show notification
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => {
                notification.remove();
            }, 500);
        }, 2000);
    }

    // Initialize modal functionality
    function initModal() {
        const modal = document.getElementById('cart-modal');
        const cartButton = document.querySelector('a[href="#cart"]');
        const closeButton = document.querySelector('.close');

        cartButton.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'block';
            displayCartItems();
        });

        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Display cart items in modal
    function displayCartItems() {
        const cartItems = document.getElementById('cart-items');
        const totalAmount = document.getElementById('total-amount');
        cartItems.innerHTML = '';

        if (cart.length === 0) {
            cartItems.innerHTML = '<p>Your cart is empty</p>';
            totalAmount.textContent = '0';
            return;
        }

        let total = 0;
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="cart-item-info">
                    <p class="cart-item-title">${item.title}</p>
                    <p class="cart-item-price">₹${item.price} x ${item.quantity} = ₹${itemTotal}</p>
                </div>
                <button class="remove-item" data-id="${item.id}">Remove</button>
            `;
            cartItems.appendChild(cartItem);
        });

        totalAmount.textContent = total;

        // Add event listeners to remove buttons
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', removeFromCart);
        });
    }

    // Remove from cart function
    function removeFromCart(e) {
        const productId = parseInt(e.target.getAttribute('data-id'));
        cart = cart.filter(item => item.id !== productId);
        displayCartItems();
        updateCartCount();
    }

    // Initialize checkout button
    function initCheckout() {
        document.getElementById('checkout-btn').addEventListener('click', () => {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            alert('Thank you for your purchase!');
            cart = [];
            updateCartCount();
            document.getElementById('cart-modal').style.display = 'none';
            displayCartItems();
        });
    }

    // Initialize shop now button
    function initShopNow() {
        document.querySelector('.shop-now').addEventListener('click', () => {
            document.querySelector('#clothes').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Initialize the app
    function init() {
        displayProducts();
        initModal();
        initCheckout();
        initShopNow();
    }

    init();
});
