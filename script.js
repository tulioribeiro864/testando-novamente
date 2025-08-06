// Menu responsivo
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('aberto');
});

// Scroll reveal animado
const elements = document.querySelectorAll('.fade-in');

const callback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
};

const observer = new IntersectionObserver(callback, {
  threshold: 0.1
});

elements.forEach(el => observer.observe(el));
