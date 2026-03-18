
  // Animate bars on load using IntersectionObserver
  const fills = document.querySelectorAll('.bar-fill');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        setTimeout(() => {
          el.style.width = el.dataset.width + '%';
        }, 100);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  fills.forEach(f => observer.observe(f));