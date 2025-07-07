
// Global variables
let cart = [];
let products = [];
let selectedCondition = 'Excellent';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeProducts();
    renderProducts();
    updateCartUI();
});

// Product data
function initializeProducts() {
    products = [
        {
            id: 1,
            name: 'iPhone 15 Pro Max',
            price: 23499,
            condition: 'New',
            storage: ['128GB', '256GB', '512GB', '1TB'],
            colors: ['black', 'white', 'blue', 'gold'],
            rating: 5,
            reviews: 128,
            image: 'https://i.postimg.cc/DyynT7fh/15-pro-Black-Titinium.jpg'
        },
        {
            id: 2,
            name: 'iPhone 15 Pro',
            price: 20999,
            condition: 'New',
            storage: ['128GB', '256GB', '512GB', '1TB'],
            colors: ['black', 'white', 'blue', 'gold'],
            rating: 5,
            reviews: 128,
            image: 'https://i.postimg.cc/133tJpVp/15-White-titaniniuum.jpg'
        },
        {
            id: 3,
            name: 'iPhone 15',
            price: 17999,
            condition: 'New',
            storage: ['128GB', '256GB', '512GB'],
            colors: ['black', 'white', 'blue', 'green', 'pink'],
            rating: 5,
            reviews: 128,
            image: '📱'
        },
        {
            id: 4,
            name: 'iPhone 14 Pro Max',
            price: 19999,
            condition: 'New',
            storage: ['128GB', '256GB', '512GB', '1TB'],
            colors: ['black', 'white', 'gold', 'purple'],
            rating: 5,
            reviews: 128,
            image: '📱'
        },
        {
            id: 5,
            name: 'iPhone 14 Pro',
            price: 17499,
            condition: 'New',
            storage: ['128GB', '256GB', '512GB', '1TB'],
            colors: ['black', 'white', 'gold', 'purple'],
            rating: 5,
            reviews: 128,
            image: '📱'
        },
        {
            id: 6,
            name: 'iPhone 14',
            price: 14999,
            condition: 'New',
            storage: ['128GB', '256GB', '512GB'],
            colors: ['black', 'white', 'blue', 'purple', 'red', 'yellow'],
            rating: 4.5,
            reviews: 128,
            image: '📱'
        },
        {
            id: 7,
            name: 'iPhone 13 Pro Max',
            price: 16999,
            condition: 'New',
            storage: ['128GB', '256GB', '512GB', '1TB'],
            colors: ['black', 'white', 'gold', 'blue', 'green'],
            rating: 5,
            reviews: 128,
            image: '📱'
        },
        {
            id: 8,
            name: 'iPhone 13 Pro',
            price: 14499,
            condition: 'New',
            storage: ['128GB', '256GB', '512GB', '1TB'],
            colors: ['black', 'white', 'gold', 'blue', 'green'],
            rating: 5,
            reviews: 128,
            image: '📱'
        },
        {
            id: 9,
            name: 'iPhone 13',
            price: 12999,
            condition: 'New',
            storage: ['128GB', '256GB', '512GB'],
            colors: ['black', 'white', 'blue', 'pink', 'red', 'green'],
            rating: 4.5,
            reviews: 128,
            image: '📱'
        },
        {
            id: 10,
            name: 'iPhone 12 Pro Max',
            price: 13999,
            condition: 'New',
            storage: ['128GB', '256GB', '512GB'],
            colors: ['black', 'white', 'gold', 'blue'],
            rating: 4.5,
            reviews: 128,
            image: '📱'
        },
        {
            id: 11,
            name: 'iPhone 12 Pro',
            price: 11999,
            condition: 'New',
            storage: ['128GB', '256GB', '512GB'],
            colors: ['black', 'white', 'gold', 'blue'],
            rating: 4.5,
            reviews: 128,
            image: '📱'
        },
        {
            id: 12,
            name: 'iPhone 12',
            price: 9999,
            condition: 'New',
            storage: ['64GB', '128GB', '256GB'],
            colors: ['black', 'white', 'blue', 'green', 'purple', 'red', 'yellow'],
            rating: 4.5,
            reviews: 128,
            image: '📱'
        },
        {
            id: 13,
            name: 'iPhone 11 Pro Max',
            price: 10999,
            condition: 'Used',
            storage: ['64GB', '256GB', '512GB'],
            colors: ['black', 'white', 'gold', 'green'],
            rating: 4.5,
            reviews: 128,
            image: '📱'
        },
        {
            id: 14,
            name: 'iPhone 11 Pro',
            price: 9499,
            condition: 'Used',
            storage: ['64GB', '256GB', '512GB'],
            colors: ['black', 'white', 'gold', 'green'],
            rating: 4.5,
            reviews: 128,
            image: '📱'
        },
        {
            id: 15,
            name: 'iPhone 11',
            price: 7999,
            condition: 'Used',
            storage: ['64GB', '128GB', '256GB'],
            colors: ['black', 'white', 'red', 'yellow', 'green', 'purple'],
            rating: 4.5,
            reviews: 128,
            image: '📱'
        },
        {
            id: 16,
            name: 'iPhone XR',
            price: 6499,
            condition: 'Refurbished',
            storage: ['64GB', '128GB', '256GB'],
            colors: ['black', 'white', 'blue', 'yellow', 'red', 'orange'],
            rating: 4,
            reviews: 128,
            image: '📱'
        }
    ];
}

// Render products
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    const modelFilter = document.getElementById('modelFilter').value;
    const conditionFilter = document.getElementById('conditionFilter').value;

    let filteredProducts = products;

    // Apply filters
    if (modelFilter) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.includes(modelFilter)
        );
    }

    if (conditionFilter) {
        filteredProducts = filteredProducts.filter(product => 
            product.condition === conditionFilter
        );
    }

    // Render filtered products
    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card">
            ${product.condition === 'New' ? '<div class="product-badge">New</div>' : ''}
            <div class="product-image">${product.image}</div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    <div class="stars">${'⭐'.repeat(Math.floor(product.rating))}${product.rating % 1 ? '⭐' : ''}</div>
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <div class="product-colors">
                    ${product.colors.map(color => `<div class="color-option ${color}"></div>`).join('')}
                </div>
                <div class="storage-options">
                    ${product.storage.map((storage, index) => `
                        <div class="storage-option ${index === 0 ? 'active' : ''}" onclick="selectStorage(this, '${storage}')">${storage}</div>
                    `).join('')}
                </div>
                <div class="product-price">R${product.price.toLocaleString()}</div>
                <button class="add-to-cart" onclick="addToCart('${product.name}', ${product.price}, '${product.storage[0]}')">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Filter products
function filterProducts() {
    renderProducts();
}

// Clear filters
function clearFilters() {
    document.getElementById('modelFilter').value = '';
    document.getElementById('conditionFilter').value = '';
    renderProducts();
}

// Select storage option
function selectStorage(element, storage) {
    const siblings = element.parentNode.children;
    for (let sibling of siblings) {
        sibling.classList.remove('active');
    }
    element.classList.add('active');
}

// Cart functionality
function addToCart(name, price, storage) {
    const existingItemIndex = cart.findIndex(item => 
        item.name === name && item.storage === storage
    );

    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += 1;
    } else {
        cart.push({
            id: Date.now(),
            name: name,
            price: price,
            storage: storage,
            quantity: 1,
            image: '📱'
        });
    }

    updateCartUI();
    showNotification(`${name} added to cart!`);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

function updateQuantity(id, change) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(id);
        } else {
            updateCartUI();
        }
    }
}

function updateCartUI() {
    const cartCount = document.querySelector('.cart-count');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">${item.image}</div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-storage">${item.storage}</div>
                    <div class="cart-item-price">R${item.price.toLocaleString()}</div>
                </div>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
        `).join('');
    }

    // Update cart total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toLocaleString();
    
    // Update checkout totals
    const checkoutSubtotal = document.getElementById('checkoutSubtotal');
    const checkoutTotal = document.getElementById('checkoutTotal');
    if (checkoutSubtotal) checkoutSubtotal.textContent = total.toLocaleString();
    if (checkoutTotal) checkoutTotal.textContent = total.toLocaleString();
}

// Toggle cart drawer
function toggleCart() {
    const cartDrawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('overlay');
    
    cartDrawer.classList.toggle('open');
    overlay.classList.toggle('active');
}

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileNav = document.querySelector('.mobile-nav');
    mobileNav.classList.toggle('open');
}

// Proceed to checkout
function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    
    const checkoutModal = document.getElementById('checkoutModal');
    checkoutModal.classList.add('open');
    toggleCart(); // Close cart drawer
}

// Close checkout
function closeCheckout() {
    const checkoutModal = document.getElementById('checkoutModal');
    checkoutModal.classList.remove('open');
}

// Process checkout
function processCheckout(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const orderData = {
        customer: {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            address: formData.get('address'),
            city: formData.get('city'),
            zip: formData.get('zip'),
            country: formData.get('country')
        },
        items: cart,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    };

    // Simulate order processing
    showNotification('Order placed successfully! You will receive a confirmation email shortly.');
    
    // Clear cart and close checkout
    cart = [];
    updateCartUI();
    closeCheckout();
    
    console.log('Order processed:', orderData);
}

// Trade-in functionality
function selectCondition(condition) {
    selectedCondition = condition;
    
    // Update button states
    const buttons = document.querySelectorAll('.condition-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.condition === condition) {
            btn.classList.add('active');
        }
    });
}

function calculateTradeIn() {
    const model = document.getElementById('tradeModel').value;
    const storage = document.getElementById('tradeStorage').value;
    
    if (!model || !storage) {
        showNotification('Please select both model and storage capacity');
        return;
    }

    // Trade-in value calculation (simplified)
    const baseValues = {
        'iPhone 15 Pro Max': 15000,
        'iPhone 15 Pro': 13000,
        'iPhone 15': 11000,
        'iPhone 14 Pro Max': 12000,
        'iPhone 14 Pro': 10000,
        'iPhone 14': 8000,
        'iPhone 13 Pro Max': 9000,
        'iPhone 13 Pro': 7500,
        'iPhone 13': 6000,
        'iPhone 12 Pro Max': 6500,
        'iPhone 12 Pro': 5500,
        'iPhone 12': 4500,
        'iPhone 11 Pro Max': 4000,
        'iPhone 11 Pro': 3500,
        'iPhone 11': 3000,
        'iPhone XR': 2000
    };

    const storageMultiplier = {
        '64GB': 1.0,
        '128GB': 1.1,
        '256GB': 1.2,
        '512GB': 1.4,
        '1TB': 1.6
    };

    const conditionMultiplier = {
        'Excellent': 1.0,
        'Good': 0.8,
        'Fair': 0.6
    };

    const baseValue = baseValues[model] || 1000;
    const storageBonus = storageMultiplier[storage] || 1.0;
    const conditionAdjustment = conditionMultiplier[selectedCondition] || 1.0;

    const tradeInValue = Math.round(baseValue * storageBonus * conditionAdjustment);

    document.getElementById('tradeValue').innerHTML = `
        <div class="estimated-value">R${tradeInValue.toLocaleString()}</div>
        <p>Estimated trade-in value for your ${model} (${storage}) in ${selectedCondition} condition.</p>
    `;
}

// Newsletter subscription
function subscribeNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
    showNotification(`Thank you for subscribing with ${email}!`);
    event.target.reset();
}

// Utility functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        z-index: 9999;
        animation: slideIn 0.3s ease-out;
    `;

    // Add slide-in animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);

    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
        style.remove();
    }, 3000);
}

// Close modals when clicking overlay
document.getElementById('overlay').addEventListener('click', function() {
    const cartDrawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('overlay');
    
    cartDrawer.classList.remove('open');
    overlay.classList.remove('active');
});

// Close checkout when clicking outside
document.getElementById('checkoutModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeCheckout();
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        
        // Close mobile menu if open
        const mobileNav = document.querySelector('.mobile-nav');
        if (mobileNav.classList.contains('open')) {
            mobileNav.classList.remove('open');
        }
    });
});

// Add loading states for better UX
function showLoading(element) {
    element.innerHTML = '<div class="loading"><div class="spinner"></div></div>';
}

// Initialize animations on scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.feature, .product-card, .review').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize scroll animations when page loads
document.addEventListener('DOMContentLoaded', initScrollAnimations);
