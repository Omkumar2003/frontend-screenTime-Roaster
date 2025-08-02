// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Rotating roast messages in phone mockup
const roastMessages = document.querySelectorAll('.roast-message');
let currentMessage = 0;

function rotateMessages() {
  // Add exiting animation
  roastMessages[currentMessage].classList.add('exiting');
  roastMessages[currentMessage].classList.remove('active');
  
  setTimeout(() => {
    roastMessages[currentMessage].classList.remove('exiting');
    currentMessage = (currentMessage + 1) % roastMessages.length;
    
    // Add entering animation
    roastMessages[currentMessage].classList.add('entering');
    setTimeout(() => {
      roastMessages[currentMessage].classList.remove('entering');
      roastMessages[currentMessage].classList.add('active');
    }, 100);
  }, 300);
}

// Start rotating messages every 4 seconds
setInterval(rotateMessages, 4000);

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.step, .feature-card, .team-member').forEach((el, index) => {
  el.classList.add('animate-on-scroll');
  el.style.transitionDelay = `${index * 0.1}s`;
  observer.observe(el);
});

// Enhanced glass card effects
document.querySelectorAll('.glass-card, .feature-card, .team-member').forEach(card => {
  card.classList.add('glass-card');
});

// CTA button click tracking (you can replace this with actual analytics)
document.querySelector('.cta-button').addEventListener('click', function(e) {
  console.log('APK download initiated');
  
  // Add ripple effect
  const ripple = document.createElement('span');
  const rect = this.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;
  
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  ripple.classList.add('ripple');
  
  this.appendChild(ripple);
  
  setTimeout(() => {
    ripple.remove();
  }, 600);
});

// Smooth parallax effect for hero background
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Add stagger animation to grid items
const observeStagger = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const children = entry.target.children;
      Array.from(children).forEach((child, index) => {
        setTimeout(() => {
          child.classList.add('animated');
        }, index * 100);
      });
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.steps, .features-grid, .team-grid').forEach(grid => {
  Array.from(grid.children).forEach(child => {
    child.classList.add('animate-on-scroll');
  });
  observeStagger.observe(grid);
});