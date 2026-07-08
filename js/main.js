document.addEventListener('DOMContentLoaded', () => {

  // Año dinámico en el footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Menú móvil
  const navToggle = document.getElementById('navToggle');
  const primaryNav = document.getElementById('primaryNav');
  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = primaryNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
    primaryNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        primaryNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Envío AJAX de formularios (Formspree)
  const forms = document.querySelectorAll('#formCotizacion, #formContacto');
  forms.forEach(form => {
    const statusEl = form.querySelector('.form-status');
    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (form.action.includes('FORM_ID')) {
        statusEl.textContent = 'Formulario aún no configurado. Contáctanos directamente por WhatsApp o correo mientras tanto.';
        statusEl.className = 'form-status error';
        return;
      }

      const originalBtnText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';
      statusEl.textContent = '';
      statusEl.className = 'form-status';

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          statusEl.textContent = '¡Gracias! Tu solicitud fue enviada correctamente. Te contactaremos a la brevedad.';
          statusEl.className = 'form-status success';
          form.reset();
        } else {
          throw new Error('Respuesta no válida del servidor');
        }
      } catch (err) {
        statusEl.textContent = 'No pudimos enviar el formulario. Intenta nuevamente o escríbenos por WhatsApp.';
        statusEl.className = 'form-status error';
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      }
    });
  });

  // Header con sombra al hacer scroll
  const header = document.getElementById('header');
  if (header) {
    const onScroll = () => {
      header.style.boxShadow = window.scrollY > 8 ? '0 4px 20px rgba(13,71,161,0.08)' : 'none';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
});
