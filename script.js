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

/* Carruseles */
document.querySelectorAll('.carousel-container').forEach((container) => {
  const carousel = container.querySelector('.carousel');
  const leftBtn = container.querySelector('.left-btn');
  const rightBtn = container.querySelector('.right-btn');

  let scrollIndex = 0;

  function getCardWidth() {
    const card = container.querySelector('.project-card');
    const gap = 36; // ajusta si tu CSS usa otro gap
    return card ? card.offsetWidth + gap : 0;
  }

 function getMaxScrollIndex() {
  const containerWidth = container.offsetWidth;
  const totalWidth = carousel.scrollWidth;
  const cardWidth = getCardWidth();

  return Math.max(
    Math.ceil((totalWidth - containerWidth) / cardWidth),
    0
  );
}

  function updateCarousel() {
    const cardWidth = getCardWidth();
    const maxScroll = getMaxScrollIndex();

    scrollIndex = Math.min(scrollIndex, maxScroll);
    carousel.style.transform = `translateX(-${scrollIndex * cardWidth}px)`;

    leftBtn.disabled = scrollIndex === 0;
    rightBtn.disabled = scrollIndex >= maxScroll;
  }

  rightBtn.addEventListener('click', () => {
    const maxScroll = getMaxScrollIndex();
    if (scrollIndex < maxScroll) {
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

  window.addEventListener('resize', updateCarousel);
  updateCarousel();
});

/* card flip */ 
document.querySelectorAll('.project-card').forEach(card => {
  const flipButtons = card.querySelectorAll('.flip-btn');
  flipButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });
});

/* Interacción Formulario */

 (function() {
      // ⚠️ Usa tu PUBLIC KEY
      emailjs.init({ publicKey: "yD5u3lncGo8QqqWEC" });
    })();

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
      event.preventDefault(); // ✅ evita recargar

      emailjs.sendForm(
        "scyu tqjs ztjs texm",   // tu Service ID
        "template_y1uxxhq",   // tu Template ID
        form
      )
      .then(() => {
        document.getElementById("successMessage").style.display = "block";
        form.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("❌ Error al enviar: " + JSON.stringify(error));
      });
    });

    // Botón scroll hacia arriba
document.addEventListener("DOMContentLoaded", () => {
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("show"); // aparece con animación
    } else {
      scrollTopBtn.classList.remove("show"); // desaparece
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});