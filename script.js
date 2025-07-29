    function setLanguage(lang) {
      document.querySelectorAll('.lang-es, .lang-en').forEach(el => {
        el.style.display = 'none';
      });

      document.querySelectorAll('.lang-' + lang).forEach(el => {
        el.style.display = '';
      });

      localStorage.setItem('lang', lang);

      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active-lang');
        if (btn.innerText.includes(lang === 'es' ? 'Español' : 'English') || btn.innerText.includes(lang === 'es' ? 'Spanish' : 'Inglés')) {
          btn.classList.add('active-lang');
        }
      });
    }

    document.addEventListener('DOMContentLoaded', () => {
      const savedLang = localStorage.getItem('lang') || 'es';
      setLanguage(savedLang);
    });