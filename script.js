document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Navbar Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Menu Filtering Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    const menuCards = document.querySelectorAll('.menu-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            menuCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || filterValue === category) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // 3. Cart State Management (using LocalStorage for demo)
    let cart = JSON.parse(localStorage.getItem('luminaCart')) || [];
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalEl = document.getElementById('cartTotal');
    const cartBadge = document.getElementById('cartBadge');
    
    // UI Elements
    const fabCart = document.getElementById('fabCart');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const btnOrders = document.querySelectorAll('.btn-order');
    const checkoutBtn = document.getElementById('checkoutBtn');

    // Open Cart
    const openCart = (e) => {
        if(e) e.preventDefault();
        cartSidebar.classList.add('open');
        cartOverlay.classList.add('active');
        renderCart();
    };

    // Close Cart
    const closeCart = () => {
        cartSidebar.classList.remove('open');
        cartOverlay.classList.remove('active');
    };

    fabCart.addEventListener('click', openCart);
    closeCartBtn.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);

    // Add to Cart
    btnOrders.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = btn.getAttribute('data-id');
            const name = btn.getAttribute('data-name');
            const price = parseInt(btn.getAttribute('data-price'));

            // Check if item exists
            const existingItem = cart.find(item => item.id === id);
            if (existingItem) {
                existingItem.qty += 1;
            } else {
                cart.push({ id, name, price, qty: 1 });
            }

            saveCart();
            openCart(); // Automatically open cart to show feedback
            
            // Button visual feedback
            const originalText = btn.innerText;
            btn.innerText = "✓ Ditambahkan";
            btn.style.backgroundColor = "var(--accent)";
            btn.style.color = "var(--bg-dark)";
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.backgroundColor = "transparent";
                btn.style.color = "var(--accent)";
            }, 1000);
        });
    });

    // Remove from Cart
    window.removeFromCart = (id) => {
        cart = cart.filter(item => item.id !== id.toString());
        saveCart();
        renderCart();
    };

    // Helper functions
    const saveCart = () => {
        localStorage.setItem('luminaCart', JSON.stringify(cart));
        updateBadge();
    };

    const updateBadge = () => {
        const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
        cartBadge.innerText = totalItems;
        
        if(totalItems > 0) {
            cartBadge.style.transform = "scale(1.2)";
            setTimeout(() => cartBadge.style.transform = "scale(1)", 200);
        }
    };

    const renderCart = () => {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart" style="color: #666; text-align: center; margin-top: 2rem;">Keranjang masih kosong.</p>';
            cartTotalEl.innerText = 'Rp 0';
            return;
        }

        cart.forEach(item => {
            const itemTotal = item.price * item.qty;
            total += itemTotal;

            cartItemsContainer.innerHTML += `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <h4>${item.name} (x${item.qty})</h4>
                        <p>Rp ${itemTotal.toLocaleString('id-ID')}</p>
                    </div>
                    <button class="remove-btn" onclick="removeFromCart('${item.id}')">Hapus</button>
                </div>
            `;
        });

        cartTotalEl.innerText = 'Rp ' + total.toLocaleString('id-ID');
    };

    // Init checkout button
    checkoutBtn.addEventListener('click', () => {
        if(cart.length === 0) {
            alert('Keranjang masih kosong!');
            return;
        }
        alert('Terima kasih! Pesanan Anda sedang diproses. (Sistem Pembayaran akan diintegrasikan nanti)');
        cart = [];
        saveCart();
        closeCart();
    });

    // Initial render
    updateBadge();
});
