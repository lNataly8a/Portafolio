function setLanguage(lang) {
  document.querySelectorAll(".lang-es, .lang-en").forEach((el) => {
    el.style.display = "none";
  });

  document.querySelectorAll(".lang-" + lang).forEach((el) => {
    el.style.display = "";
  });

  localStorage.setItem("lang", lang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.remove("active-lang");
    if (
      btn.innerText.includes(lang === "es" ? "Español" : "English") ||
      btn.innerText.includes(lang === "es" ? "Spanish" : "Inglés")
    ) {
      btn.classList.add("active-lang");
    }
  });
  setTimeout(() => {
    AOS.refresh();
  }, 50);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "es";
  setLanguage(savedLang);
});

/* Particulas y animacion */

particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 1, random: false },
    size: { value: 4, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: { enable: true, speed: 2, direction: "none", out_mode: "out" },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
    },
    modes: {
      grab: { distance: 200, line_linked: { opacity: 0.6 } },
      push: { particles_nb: 4 },
    },
  },
  retina_detect: true,
});

/* Animacion Scroll Mi perfil */

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".timeline-item");

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    items.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;
      const itemBottom = item.getBoundingClientRect().bottom;

      if (itemTop < triggerBottom && itemBottom > 0) {
        // Dentro de la vista → mostrar
        item.classList.add("show");
      } else {
        // Fuera de la vista → ocultar
        item.classList.remove("show");
      }
    });
  };

  // Ejecutar al cargar y en scroll
  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll);
});

// JavaScript para carrusel
const carousel = document.querySelector('.carousel');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

let scrollIndex = 0;
const cardsToShow = 3;
const totalCards = document.querySelectorAll('.project-card').length;

rightBtn.addEventListener('click', () => {
  if (scrollIndex < totalCards - cardsToShow) {
    scrollIndex++;
    updateCarousel();
  }
});

leftBtn.addEventListener('click', () => {
  if (scrollIndex > 0) {
    scrollIndex--;
    updateCarousel();
  }
});

function updateCarousel() {
  const cardWidth = document.querySelector('.project-card').offsetWidth + 20; // gap
  carousel.style.transform = `translateX(-${scrollIndex * cardWidth}px)`;
}
