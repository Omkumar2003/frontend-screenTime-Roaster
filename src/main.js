// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
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
  roastMessages[currentMessage].classList.remove('active');
  currentMessage = (currentMessage + 1) % roastMessages.length;
  roastMessages[currentMessage].classList.add('active');
}

// Start rotating messages every 3 seconds
setInterval(rotateMessages, 3000);

// Navbar background on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(10, 10, 10, 0.98)';
  } else {
    navbar.style.background = 'rgba(10, 10, 10, 0.95)';
  }
});

// Intersection Observer for animations
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
document.querySelectorAll('.step, .feature-card, .team-member').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'all 0.6s ease';
  observer.observe(el);
});

// Add some interactive effects
document.querySelectorAll('.feature-card, .team-member, .step').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// CTA button click tracking (you can replace this with actual analytics)
document.querySelector('.cta-button').addEventListener('click', function(e) {
  // Add a little animation feedback
  this.style.transform = 'scale(0.95)';
  setTimeout(() => {
    this.style.transform = 'scale(1)';
  }, 150);
  
  console.log('APK download initiated');
});

// Add some particle effects to the hero section
function createParticle() {
  const particle = document.createElement('div');
  particle.style.position = 'absolute';
  particle.style.width = '4px';
  particle.style.height = '4px';
  particle.style.background = 'rgba(255, 107, 53, 0.6)';
  particle.style.borderRadius = '50%';
  particle.style.pointerEvents = 'none';
  particle.style.left = Math.random() * 100 + '%';
  particle.style.top = '100%';
  particle.style.zIndex = '1';
  
  const hero = document.querySelector('.hero');
  hero.style.position = 'relative';
  hero.appendChild(particle);
  
  // Animate particle
  const animation = particle.animate([
    { transform: 'translateY(0) scale(0)', opacity: 0 },
    { transform: 'translateY(-100px) scale(1)', opacity: 1 },
    { transform: 'translateY(-200px) scale(0)', opacity: 0 }
  ], {
    duration: 3000,
    easing: 'ease-out'
  });
  
  animation.onfinish = () => particle.remove();
}

// Create particles periodically
setInterval(createParticle, 2000);