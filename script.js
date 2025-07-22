function setLanguage(lang) {
  // Ocultar todo lo que tenga clase lang-es o lang-en
  document.querySelectorAll('.lang-es, .lang-en').forEach(el => {
    el.style.display = 'none';
  });

  // Mostrar solo lo del idioma seleccionado
  document.querySelectorAll('.lang-' + lang).forEach(el => {
    el.style.display = '';
  });

  // Guardar preferencia
  localStorage.setItem('lang', lang);

  // Marcar el botón activo
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active-lang');
    if (btn.textContent.includes(lang === 'es' ? 'Español' : 'English')) {
      btn.classList.add('active-lang');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'es';
  setLanguage(savedLang);
});
