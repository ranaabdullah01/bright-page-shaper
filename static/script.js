// Parallax hero
const heroBg = document.querySelector('.hero-bg');
if (heroBg) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < window.innerHeight) heroBg.style.transform = `translateY(${y * 0.25}px)`;
  }, { passive: true });
}

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -80px 0px' });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// ROI calculator
const $ = (id) => document.getElementById(id);
const calc = () => {
  const price = +$('price').value || 0;
  const rent = +$('rent').value || 0;
  const service = +$('service').value || 0;
  const net = rent - service;
  const roi = price > 0 ? ((net / price) * 100).toFixed(2) : '0.00';
  $('roi').textContent = roi + '%';
};
['price', 'rent', 'service'].forEach((id) => $(id) && $(id).addEventListener('input', calc));
calc();

// Year
$('year') && ($('year').textContent = new Date().getFullYear());
