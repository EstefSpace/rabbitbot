document.addEventListener("DOMContentLoaded", () => {
  const pricingCards = document.querySelectorAll(".pricing-card");
  const benefits = document.querySelectorAll(".benefit");
  const buttons = document.querySelectorAll(".pricing-buttons");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.style.opacity = entry.intersectionRatio;
        entry.target.style.transform = `translateY(${20 * (1 - entry.intersectionRatio)}px)`;
      } else {
        entry.target.style.opacity = 0;
        entry.target.style.transform = "translateY(20px)";
      }
    });
  }, {
    threshold: Array.from(Array(101).keys(), i => i / 100)
  });

  pricingCards.forEach(card => {
    observer.observe(card);
  });

  benefits.forEach(benefit => {
    observer.observe(benefit);
  });

  buttons.forEach(button => {
    observer.observe(button);
  });

  // Función para alternar entre secciones de precios y beneficios
  function showSection(sectionId) {
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(section => {
      if (section.id === sectionId) {
        section.style.display = 'flex';
        setTimeout(() => section.classList.add('fade-in'), 100);
      } else {
        section.style.display = 'none';
        section.classList.remove('fade-in');
      }
    });
  }

  const pricingBtn = document.querySelector('#pricing-btn');
  const benefitsBtn = document.querySelector('#benefits-btn');

  pricingBtn.addEventListener('click', () => {
    showSection('precios');
  });

  benefitsBtn.addEventListener('click', () => {
    showSection('beneficios');
  });
});
