// Site Configuration
const siteConfig = {
    products: [
        {
            id: 1,
            name: "Premium Silikon Kılıf Pro",
            price: 89.99,
            originalPrice: 119.99,
            image: "https://picsum.photos/400/400?random=1",
            description: "Yumuşak dokulu, dayanıklı silikon kılıf. Telefonunuzu darbelerden korur ve şık görünüm sağlar.",
            colors: ["Siyah", "Beyaz", "Mavi", "Kırmızı", "Yeşil"],
            phoneModels: ["iPhone 14", "iPhone 14 Pro", "iPhone 13", "iPhone 13 Pro"],
            rating: 4.8,
            reviews: 1247,
            inStock: true,
            isNew: true,
            isFeatured: true,
            discount: 25,
            material: "Premium Silikon",
            protection: ["Darbe Koruması", "Çizik Koruması", "Su Geçirmez"]
        },
        {
            id: 2,
            name: "Şeffaf Polikarbonat Elite",
            price: 69.99,
            image: "https://picsum.photos/400/400?random=2",
            description: "Şeffaf tasarım ile telefonunuzun güzelliğini gösterin. Hafif ve dayanıklı polikarbonat malzeme.",
            colors: ["Şeffaf", "Buzlu", "Renkli"],
            phoneModels: ["Samsung Galaxy S23", "Samsung Galaxy S22", "iPhone 14", "iPhone 13"],
            rating: 4.6,
            reviews: 892,
            inStock: true,
            material: "Polikarbonat",
            protection: ["Şeffaf Görünüm", "Hafif Tasarım", "Dayanıklı"]
        },
        {
            id: 3,
            name: "Deri Kılıf Luxe",
            price: 129.99,
            originalPrice: 159.99,
            image: "https://picsum.photos/400/400?random=3",
            description: "Gerçek deri malzeme ile premium görünüm. Kart cebi dahil, lüks tasarım.",
            colors: ["Kahverengi", "Siyah", "Bordo", "Bej"],
            phoneModels: ["iPhone 14 Pro Max", "iPhone 13 Pro Max", "Samsung Galaxy S23 Ultra"],
            rating: 4.9,
            reviews: 567,
            inStock: true,
            isFeatured: true,
            discount: 19,
            material: "Gerçek Deri",
            protection: ["Lüks Görünüm", "Kart Cebi", "Premium Koruma"]
        },
        {
            id: 4,
            name: "Spor Kılıf Active",
            price: 79.99,
            image: "https://picsum.photos/400/400?random=4",
            description: "Aktif yaşam için tasarlanmış, su geçirmez kılıf. Sporcular için ideal.",
            colors: ["Turuncu", "Yeşil", "Mavi", "Siyah", "Kırmızı"],
            phoneModels: ["iPhone 14", "iPhone 13", "Samsung Galaxy S23", "Samsung Galaxy S22"],
            rating: 4.7,
            reviews: 734,
            inStock: true,
            material: "TPU + Silikon",
            protection: ["Su Geçirmez", "Darbe Koruması", "Spor Tasarım"]
        },
        {
            id: 5,
            name: "Metal Çerçeveli Premium",
            price: 149.99,
            originalPrice: 199.99,
            image: "https://picsum.photos/400/400?random=5",
            description: "Alüminyum çerçeve ile şık tasarım. Maksimum koruma ve premium görünüm.",
            colors: ["Gümüş", "Altın", "Siyah", "Rose Gold"],
            phoneModels: ["iPhone 14 Pro", "iPhone 13 Pro", "Samsung Galaxy S23 Ultra"],
            rating: 4.5,
            reviews: 423,
            inStock: false,
            discount: 25,
            material: "Alüminyum + TPU",
            protection: ["Metal Çerçeve", "Maksimum Koruma", "Premium Tasarım"]
        },
        {
            id: 6,
            name: "Minimalist Kılıf Pure",
            price: 59.99,
            image: "https://picsum.photos/400/400?random=6",
            description: "Sade ve şık tasarım. Telefonunuzun inceliğini korur, minimal görünüm.",
            colors: ["Gri", "Beyaz", "Siyah", "Bej"],
            phoneModels: ["iPhone 14", "iPhone 13", "Samsung Galaxy S23", "Samsung Galaxy S22"],
            rating: 4.4,
            reviews: 1567,
            inStock: true,
            material: "TPU",
            protection: ["Minimal Tasarım", "İnce Koruma", "Şık Görünüm"]
        },
        {
            id: 7,
            name: "Gaming Kılıf Pro",
            price: 99.99,
            image: "https://picsum.photos/400/400?random=7",
            description: "Oyun severler için özel tasarım. Ergonomik tutuş ve soğutma sistemi.",
            colors: ["Kırmızı", "Mavi", "Yeşil", "Siyah"],
            phoneModels: ["iPhone 14 Pro", "Samsung Galaxy S23 Ultra", "iPhone 13 Pro"],
            rating: 4.3,
            reviews: 298,
            inStock: true,
            isNew: true,
            material: "TPU + Alüminyum",
            protection: ["Ergonomik Tasarım", "Soğutma Sistemi", "Gaming Optimizasyonu"]
        },
        {
            id: 8,
            name: "Business Kılıf Executive",
            price: 179.99,
            originalPrice: 229.99,
            image: "https://picsum.photos/400/400?random=8",
            description: "İş dünyası için profesyonel tasarım. Kart cebi ve kalem tutucu dahil.",
            colors: ["Siyah", "Kahverengi", "Gri", "Navy"],
            phoneModels: ["iPhone 14 Pro Max", "Samsung Galaxy S23 Ultra", "iPhone 13 Pro Max"],
            rating: 4.8,
            reviews: 445,
            inStock: true,
            isFeatured: true,
            discount: 22,
            material: "Deri + Metal",
            protection: ["Profesyonel Görünüm", "Kart Cebi", "Kalem Tutucu"]
        }
    ]
};

// Global Variables
let currentProducts = [...siteConfig.products];
let currentViewMode = 'grid';
let selectedProduct = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeParticles();
    initializeNavigation();
    initializeMobileMenu();
    initializeProducts();
    initializeFilters();
    initializeSearch();
    initializeContactForm();
    initializeCategoryCards();
    
    // Check for search parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    if (searchParam) {
        document.getElementById('productSearch').value = searchParam;
        filterProducts();
    }
});

// Particles.js Configuration
function initializeParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 250,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#ffffff"
                },
                shape: {
                    type: "circle"
                },
                opacity: {
                    value: 0.15,
                    random: true
                },
                size: {
                    value: 3,
                    random: true
                },
                links: {
                    enable: true,
                    distance: 200,
                    opacity: 0.3,
                    width: 1,
                    color: "#ffffff"
                },
                move: {
                    enable: true,
                    speed: 1.5,
                    random: true,
                    straight: false,
                    outModes: {
                        default: "out"
                    }
                }
            },
            interactivity: {
                detectOn: "canvas",
                events: {
                    onHover: {
                        enable: true,
                        mode: "repulse"
                    },
                    resize: true
                },
                modes: {
                    repulse: {
                        distance: 100,
                        duration: 0.05
                    }
                }
            },
            detectRetina: true
        });
    }
}

// Navigation System
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    const navIndicator = document.querySelector('.nav-indicator');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('data-page');
            showPage(targetPage);
            updateActiveNavLink(this);
            updateNavIndicator(this);
        });
    });
    
    // Initialize nav indicator position
    const activeLink = document.querySelector('.nav-link.active');
    if (activeLink && navIndicator) {
        updateNavIndicator(activeLink);
    }
}

function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show target page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Update URL hash
    window.location.hash = pageId;
}

function updateActiveNavLink(activeLink) {
    // Remove active class from all links
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to clicked link
    activeLink.classList.add('active');
    
    // Update corresponding mobile/desktop link
    const linkType = activeLink.classList.contains('nav-link') ? 'mobile-nav-link' : 'nav-link';
    const correspondingLink = document.querySelector(`.${linkType}[data-page="${activeLink.getAttribute('data-page')}"]`);
    if (correspondingLink) {
        correspondingLink.classList.add('active');
    }
}

function updateNavIndicator(activeLink) {
    const navIndicator = document.querySelector('.nav-indicator');
    if (!navIndicator) return;
    
    const navContainer = activeLink.closest('nav');
    if (!navContainer) return;
    
    const rect = activeLink.getBoundingClientRect();
    const navRect = navContainer.getBoundingClientRect();
    
    navIndicator.style.transform = `translateX(${rect.left - navRect.left}px)`;
    navIndicator.style.width = `${rect.width}px`;
    navIndicator.style.opacity = '1';
}

// Mobile Menu
function initializeMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
            
            // Update menu icon
            const icon = this.querySelector('i');
            if (mobileNav.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
        
        // Close mobile menu when clicking on a link
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileNav.classList.remove('active');
                mobileMenuBtn.querySelector('i').className = 'fas fa-bars';
            });
        });
    }
}

// Products System
function initializeProducts() {
    renderProducts();
    initializeViewToggle();
}

function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    if (currentProducts.length === 0) {
        document.getElementById('noResults').style.display = 'block';
        document.getElementById('resultsCount').textContent = '0 ürün bulundu';
        return;
    }
    
    document.getElementById('noResults').style.display = 'none';
    document.getElementById('resultsCount').textContent = `${currentProducts.length} ürün bulundu`;
    
    currentProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const stars = generateStars(product.rating);
    const badges = generateProductBadges(product);
    const colors = generateColorPreview(product.colors);
    const protection = generateProtectionFeatures(product.protection);
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            
            ${badges}
            
            <div class="product-actions">
                <button class="action-btn heart" onclick="addToWishlist(${product.id})">
                    <i class="fas fa-heart"></i>
                </button>
                <button class="action-btn eye" onclick="viewProductDetails(${product.id})">
                    <i class="fas fa-eye"></i>
                </button>
            </div>
            
            ${!product.inStock ? `
                <div class="out-of-stock-overlay">
                    <span class="out-of-stock-text">Stokta Yok</span>
                </div>
            ` : ''}
            
            <div class="product-protection">
                <div class="protection-badge" onclick="showProtectionDetails('${product.protection.join(', ')}')">
                    <i class="fas fa-shield-alt"></i>
                    <span>${product.protection.length} Koruma</span>
                    <i class="fas fa-bolt"></i>
                </div>
            </div>
        </div>
        
        <div class="product-content">
            <h3 class="product-title">${product.name}</h3>
            
            <div class="product-rating">
                <div class="stars">${stars}</div>
                <span class="rating-count">(${product.reviews.toLocaleString()})</span>
            </div>
            
            <p class="product-description">${product.description}</p>
            
            <div class="product-price">
                <div class="price-info">
                    <span class="current-price">₺${product.price.toLocaleString()}</span>
                    ${product.originalPrice ? `<span class="original-price">₺${product.originalPrice.toLocaleString()}</span>` : ''}
                </div>
                <span class="material-badge">${product.material}</span>
            </div>
            
            <div class="product-colors">
                <div class="colors-header">
                    <span class="colors-title">Renkler</span>
                    <span class="color-count">${product.colors.length} seçenek</span>
                </div>
                <div class="color-preview">
                    ${colors}
                </div>
            </div>
            
            <div class="product-protection-features">
                <div class="protection-grid">
                    ${protection}
                </div>
            </div>
            
            <div class="product-actions-bottom">
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})" ${!product.inStock ? 'disabled' : ''}>
                    <i class="fas fa-shopping-cart"></i>
                    <span>${product.inStock ? 'Sepete Ekle' : 'Stokta Yok'}</span>
                </button>
                <button class="view-details-btn" onclick="viewProductDetails(${product.id})">
                    Detaylar
                </button>
            </div>
        </div>
    `;
    
    return card;
}

function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars += '<i class="fas fa-star star"></i>';
        } else {
            stars += '<i class="fas fa-star star empty"></i>';
        }
    }
    return stars;
}

function generateProductBadges(product) {
    let badges = '';
    if (product.isNew) {
        badges += '<span class="product-badge new">Yeni</span>';
    }
    if (product.isFeatured) {
        badges += '<span class="product-badge featured">Öne Çıkan</span>';
    }
    if (product.discount) {
        badges += `<span class="product-badge discount">%${product.discount} İndirim</span>`;
    }
    return badges;
}

function generateColorPreview(colors) {
    let colorHtml = '';
    const maxColors = 5;
    
    colors.slice(0, maxColors).forEach(color => {
        const colorValue = getColorValue(color);
        colorHtml += `<div class="color-option" style="background-color: ${colorValue}" title="${color}"></div>`;
    });
    
    if (colors.length > maxColors) {
        colorHtml += `<div class="color-more" title="Daha fazla renk">+${colors.length - maxColors}</div>`;
    }
    
    return colorHtml;
}

function getColorValue(colorName) {
    const colorMap = {
        'Siyah': '#000',
        'Beyaz': '#fff',
        'Mavi': '#3b82f6',
        'Kırmızı': '#ef4444',
        'Kahverengi': '#8b4513',
        'Bordo': '#800020',
        'Turuncu': '#ff6b35',
        'Yeşil': '#10b981',
        'Gümüş': '#c0c0c0',
        'Altın': '#ffd700',
        'Gri': '#6b7280',
        'Bej': '#f5f5dc',
        'Navy': '#000080',
        'Rose Gold': '#b76e79',
        'Renkli': '#ff69b4',
        'Buzlu': '#f0f8ff',
        'Şeffaf': 'rgba(255,255,255,0.3)'
    };
    return colorMap[colorName] || '#e5e7eb';
}

function generateProtectionFeatures(protection) {
    let protectionHtml = '';
    const maxFeatures = 2;
    
    protection.slice(0, maxFeatures).forEach(feature => {
        protectionHtml += `
            <span class="protection-feature">
                <i class="fas fa-check-circle"></i>
                <span>${feature}</span>
            </span>
        `;
    });
    
    if (protection.length > maxFeatures) {
        protectionHtml += `
            <span class="protection-more" onclick="showMoreProtection('${protection.slice(maxFeatures).join(', ')}')">
                +${protection.length - maxFeatures} daha
            </span>
        `;
    }
    
    return protectionHtml;
}

// Filters System
function initializeFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const sortFilter = document.getElementById('sortFilter');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.querySelector('.price-value');
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterProducts);
    }
    
    if (sortFilter) {
        sortFilter.addEventListener('change', filterProducts);
    }
    
    if (priceRange && priceValue) {
        priceRange.addEventListener('input', function() {
            priceValue.textContent = `₺${this.value}`;
            filterProducts();
        });
    }
}

function filterProducts() {
    const searchTerm = document.getElementById('productSearch').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    const sortBy = document.getElementById('sortFilter').value;
    const maxPrice = parseInt(document.getElementById('priceRange').value);
    
    let filtered = siteConfig.products.filter(product => {
        // Search filter
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                             product.description.toLowerCase().includes(searchTerm);
        
        // Category filter
        const matchesCategory = category === 'all' ||
                               (category === 'new' && product.isNew) ||
                               (category === 'featured' && product.isFeatured) ||
                               (category === 'discount' && product.discount);
        
        // Price filter
        const matchesPrice = product.price <= maxPrice;
        
        return matchesSearch && matchesCategory && matchesPrice;
    });
    
    // Sort products
    switch (sortBy) {
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filtered.sort((a, b) => b.rating - a.rating);
            break;
        case 'reviews':
            filtered.sort((a, b) => b.reviews - a.reviews);
            break;
        default:
            // Featured first, then by rating
            filtered.sort((a, b) => {
                if (a.isFeatured && !b.isFeatured) return -1;
                if (!a.isFeatured && b.isFeatured) return 1;
                return b.rating - a.rating;
            });
    }
    
    currentProducts = filtered;
    renderProducts();
}

// Search System
function initializeSearch() {
    const productSearch = document.getElementById('productSearch');
    const heroSearch = document.getElementById('heroSearch');
    
    if (productSearch) {
        productSearch.addEventListener('input', filterProducts);
    }
    
    if (heroSearch) {
        heroSearch.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleHeroSearch();
            }
        });
    }
}

function handleHeroSearch() {
    const searchTerm = document.getElementById('heroSearch').value.trim();
    if (searchTerm) {
        showPage('products');
        document.getElementById('productSearch').value = searchTerm;
        filterProducts();
    }
}

function handlePopularSearch(searchTerm) {
    showPage('products');
    document.getElementById('productSearch').value = searchTerm;
    filterProducts();
}

// View Toggle
function initializeViewToggle() {
    const viewButtons = document.querySelectorAll('.view-btn');
    const productsGrid = document.getElementById('productsGrid');
    
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const view = this.getAttribute('data-view');
            
            // Update active button
            viewButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update grid class
            if (view === 'list') {
                productsGrid.classList.add('list-view');
            } else {
                productsGrid.classList.remove('list-view');
            }
            
            currentViewMode = view;
        });
    });
}

// Product Details Modal
function viewProductDetails(productId) {
    const product = siteConfig.products.find(p => p.id === productId);
    if (!product) return;
    
    selectedProduct = product;
    
    const modal = document.getElementById('productModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    modalTitle.textContent = product.name;
    
    const stars = generateStars(product.rating);
    
    modalBody.innerHTML = `
        <div class="modal-product-content">
            <div class="modal-product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            
            <div class="modal-product-info">
                <div class="modal-product-rating">
                    <div class="stars">${stars}</div>
                    <span class="rating-text">${product.rating} (${product.reviews.toLocaleString()} değerlendirme)</span>
                </div>
                
                <div class="modal-product-price">
                    <span class="modal-current-price">₺${product.price.toLocaleString()}</span>
                    ${product.originalPrice ? `<span class="modal-original-price">₺${product.originalPrice.toLocaleString()}</span>` : ''}
                    ${product.discount ? `<span class="modal-discount-badge">%${product.discount} İndirim</span>` : ''}
                </div>
                
                <p class="modal-product-description">${product.description}</p>
                
                <div class="modal-product-details">
                    <div class="detail-group">
                        <h4>Malzeme:</h4>
                        <span>${product.material}</span>
                    </div>
                    
                    <div class="detail-group">
                        <h4>Koruma Özellikleri:</h4>
                        <div class="protection-tags">
                            ${product.protection.map(feature => `<span class="protection-tag">${feature}</span>`).join('')}
                        </div>
                    </div>
                    
                    <div class="detail-group">
                        <h4>Renkler:</h4>
                        <div class="color-tags">
                            ${product.colors.map(color => `<span class="color-tag">${color}</span>`).join('')}
                        </div>
                    </div>
                    
                    <div class="detail-group">
                        <h4>Uyumlu Modeller:</h4>
                        <div class="model-tags">
                            ${product.phoneModels.map(model => `<span class="model-tag">${model}</span>`).join('')}
                        </div>
                    </div>
                </div>
                
                <div class="modal-product-actions">
                    <button class="modal-wishlist-btn" onclick="addToWishlist(${product.id})">
                        <i class="fas fa-heart"></i>
                        <span>Favorilere Ekle</span>
                    </button>
                    <button class="modal-cart-btn" onclick="addToCart(${product.id})" ${!product.inStock ? 'disabled' : ''}>
                        ${product.inStock ? 'Sepete Ekle' : 'Stokta Yok'}
                    </button>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    selectedProduct = null;
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('productModal');
    if (e.target === modal) {
        closeProductModal();
    }
});

// Product Actions
function addToCart(productId) {
    const product = siteConfig.products.find(p => p.id === productId);
    if (!product || !product.inStock) return;
    
    // Show success message
    showNotification(`${product.name} sepete eklendi!`, 'success');
}

function addToWishlist(productId) {
    const product = siteConfig.products.find(p => p.id === productId);
    if (!product) return;
    
    // Show success message
    showNotification(`${product.name} favorilere eklendi!`, 'success');
}

// Protection Details
function showProtectionDetails(protection) {
    showNotification(`Koruma Özellikleri: ${protection}`, 'info');
}

function showMoreProtection(protection) {
    showNotification(`Diğer Koruma Özellikleri: ${protection}`, 'info');
}

// Category Cards
function initializeCategoryCards() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            showPage('products');
            
            // Filter by category
            document.getElementById('categoryFilter').value = 'all';
            document.getElementById('productSearch').value = category;
            filterProducts();
        });
    });
}

// Contact Form
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Validate form
            if (!data.name || !data.email || !data.subject || !data.message) {
                showNotification('Lütfen tüm gerekli alanları doldurun.', 'error');
                return;
            }
            
            // Show success message
            showNotification('Mesajınız başarıyla gönderildi!', 'success');
            this.reset();
        });
    }
}

// Notification System
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 3000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}

function getNotificationColor(type) {
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6'
    };
    return colors[type] || '#3b82f6';
}

// URL Hash Navigation
window.addEventListener('hashchange', function() {
    const hash = window.location.hash.slice(1);
    if (hash) {
        showPage(hash);
        const link = document.querySelector(`[data-page="${hash}"]`);
        if (link) {
            updateActiveNavLink(link);
            updateNavIndicator(link);
        }
    }
});

// Initialize page based on hash
if (window.location.hash) {
    const hash = window.location.hash.slice(1);
    showPage(hash);
    const link = document.querySelector(`[data-page="${hash}"]`);
    if (link) {
        updateActiveNavLink(link);
        updateNavIndicator(link);
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add CSS for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0.25rem;
        margin-left: auto;
    }
    
    .notification-close:hover {
        opacity: 0.8;
    }
    
    .modal-product-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }
    
    .modal-product-image img {
        width: 100%;
        height: 400px;
        object-fit: cover;
        border-radius: 0.5rem;
    }
    
    .modal-product-rating {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1rem;
    }
    
    .modal-product-price {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
    }
    
    .modal-current-price {
        font-size: 2rem;
        font-weight: 700;
        color: var(--primary-600);
    }
    
    .modal-original-price {
        font-size: 1.25rem;
        color: var(--gray-500);
        text-decoration: line-through;
    }
    
    .modal-discount-badge {
        background: #ef4444;
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 9999px;
        font-size: 0.875rem;
        font-weight: 600;
    }
    
    .modal-product-description {
        color: var(--gray-600);
        line-height: 1.6;
        margin-bottom: 2rem;
    }
    
    .detail-group {
        margin-bottom: 1.5rem;
    }
    
    .detail-group h4 {
        font-size: 1rem;
        font-weight: 600;
        color: var(--gray-900);
        margin-bottom: 0.5rem;
    }
    
    .protection-tags,
    .color-tags,
    .model-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }
    
    .protection-tag {
        background: var(--primary-50);
        color: var(--primary-700);
        padding: 0.25rem 0.75rem;
        border-radius: 9999px;
        font-size: 0.875rem;
        font-weight: 500;
    }
    
    .color-tag {
        background: var(--gray-100);
        color: var(--gray-700);
        padding: 0.25rem 0.75rem;
        border-radius: 9999px;
        font-size: 0.875rem;
        font-weight: 500;
    }
    
    .model-tag {
        background: var(--gray-100);
        color: var(--gray-700);
        padding: 0.25rem 0.75rem;
        border-radius: 9999px;
        font-size: 0.875rem;
        font-weight: 500;
    }
    
    .modal-product-actions {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
    }
    
    .modal-wishlist-btn {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1.5rem;
        background: none;
        border: 1px solid var(--gray-300);
        color: var(--gray-600);
        border-radius: 0.5rem;
        cursor: pointer;
        transition: all 0.2s ease;
    }
    
    .modal-wishlist-btn:hover {
        background: var(--gray-50);
        color: var(--gray-700);
    }
    
    .modal-cart-btn {
        flex: 1;
        padding: 0.75rem 1.5rem;
        background: var(--primary-600);
        color: white;
        border: none;
        border-radius: 0.5rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
    }
    
    .modal-cart-btn:hover {
        background: var(--primary-700);
    }
    
    .modal-cart-btn:disabled {
        background: var(--gray-300);
        color: var(--gray-500);
        cursor: not-allowed;
    }
    
    @media (max-width: 768px) {
        .modal-product-content {
            grid-template-columns: 1fr;
        }
        
        .modal-product-actions {
            flex-direction: column;
        }
    }
`;
document.head.appendChild(notificationStyles);
