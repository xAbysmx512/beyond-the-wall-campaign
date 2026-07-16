// === BEYOND THE WALL FRONTEND ===

let currentQty = 1;
let cartItems = 0;
let currentSize = 'L';

// Size selection
const sizeBtns = document.querySelectorAll('.size-btn');
sizeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    sizeBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentSize = btn.dataset.size;
  });
});

// Quantity
function updateQty(change) {
  const input = document.getElementById('qtyInput');
  let newVal = parseInt(input.value) + change;
  if (newVal >= 1 && newVal <= 5) {
    input.value = newVal;
    currentQty = newVal;
  }
}

// Add to cart
function addToCart() {
  cartItems += currentQty;
  document.getElementById('cartCount').textContent = cartItems;
  const btn = document.querySelector('.btn-add-cart');
  const originalText = btn.textContent;
  btn.textContent = 'ADDED ✓';
  btn.style.background = 'var(--success)';
  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.background = '';
  }, 2000);
  const cartIcon = document.getElementById('cartIcon');
  cartIcon.style.transform = 'scale(1.2)';
  setTimeout(() => cartIcon.style.transform = '', 300);
}

// Smooth scroll
function scrollToProduct() { document.getElementById('product').scrollIntoView({ behavior: 'smooth' }); }
function scrollToMap() { document.getElementById('map').scrollIntoView({ behavior: 'smooth' }); }

// Image swap
function swapImage(index) {
  const mainImage = document.getElementById('mainImage');
  const thumbs = document.querySelectorAll('.thumb');
  const images = ['hoodie-mockup.jpg', 'map-detail.jpg', 'hoodie-close.jpg'];
  mainImage.style.opacity = '0';
  setTimeout(() => {
    mainImage.src = images[index];
    mainImage.style.opacity = '1';
  }, 200);
  thumbs.forEach((t, i) => t.classList.toggle('active', i === index));
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(10, 22, 40, 0.95)';
    nav.style.boxShadow = '0 4px 30px rgba(0,0,0,0.3)';
  } else {
    nav.style.background = 'rgba(10, 22, 40, 0.85)';
    nav.style.boxShadow = 'none';
  }
});

// Intersection observer for animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.detail-card, .product-info').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 0.6s ease';
  observer.observe(el);
});

// Progress bar animation
function animateProgress() {
  const fill = document.querySelector('.progress-fill');
  if (fill) {
    fill.style.width = '0%';
    setTimeout(() => { fill.style.width = '72%'; }, 500);
  }
}
window.addEventListener('load', animateProgress);
