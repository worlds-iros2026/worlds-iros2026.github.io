// ===== Mobile Navigation Toggle =====
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });

    // Close menu when a link is clicked
    links.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        links.classList.remove('open');
      });
    });
  }

  // ===== Active nav link highlighting on scroll =====
  const sections = document.querySelectorAll('.section, .hero');
  const navLinks = document.querySelectorAll('.nav-links a');

  const observerOptions = {
    root: null,
    rootMargin: '-80px 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    if (section.id) observer.observe(section);
  });

  // ===== Speaker Bio Toggle (one at a time) =====
  document.querySelectorAll('.bio-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var targetId = btn.getAttribute('data-bio');
      var box = document.getElementById(targetId);
      if (!box) return;
      var isVisible = box.style.display === 'block';

      // Close all bios and reset all buttons
      document.querySelectorAll('.bio-box').forEach(function(b) {
        b.style.display = 'none';
      });
      document.querySelectorAll('.bio-btn').forEach(function(b) {
        b.textContent = 'Show Bio \u25BE';
        b.style.background = '#fff';
        b.style.color = '#1a6fb5';
      });

      // If it was hidden, show it
      if (!isVisible) {
        box.style.display = 'block';
        btn.textContent = 'Hide Bio \u25B4';
        btn.style.background = '#1a6fb5';
        btn.style.color = '#fff';
      }
    });
  });

  // ===== Smooth reveal animation =====
  const revealElements = document.querySelectorAll(
    '.date-card, .person-card, .paper-item, .schedule-table tbody tr'
  );

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    revealObserver.observe(el);
  });
});
