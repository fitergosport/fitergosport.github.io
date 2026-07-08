# Fit ErgoSport — Sitio Web

Sitio estático (HTML/CSS/JS, sin frameworks ni build) para Fit ErgoSport, listo para publicarse **gratis** en GitHub Pages.

## Estructura

```
index.html            Página principal (todas las secciones)
css/styles.css         Estilos
js/main.js              Menú móvil, envío de formularios, scroll
assets/img/logo.jpg     Logo
legal/privacidad.html   Política de privacidad (plantilla)
legal/terminos.html     Términos y condiciones (plantilla)
```

## 1. Activar los formularios (Formspree, gratis)

Los formularios de **Cotización** y **Contacto** están conectados a [Formspree](https://formspree.io), un servicio gratuito que reenvía las respuestas por correo sin necesitar servidor propio. El plan gratuito incluye 50 envíos al mes, suficiente para partir.

Pasos:

1. Entra a https://formspree.io y crea una cuenta gratis con `klgo.felipemartinez@gmail.com`.
2. Crea un formulario nuevo ("New Form") y confirma el correo que te llegará a esa casilla.
3. Formspree te entrega un ID parecido a `mzbqwxyz`. Copia la URL completa: `https://formspree.io/f/mzbqwxyz`.
4. En `index.html`, reemplaza **las dos** apariciones de:
   ```
   action="https://formspree.io/f/FORM_ID_COTIZACION"
   ```
   por tu URL real (puedes usar el mismo formulario para Cotización y Contacto; cada envío ya indica el asunto correspondiente).
5. Guarda, sube los cambios a GitHub (ver abajo) y prueba enviando el formulario desde el sitio publicado. El primer envío requiere que confirmes la activación desde el correo que te manda Formspree.

Mientras el `FORM_ID_COTIZACION` no se reemplace, el sitio funciona igual pero mostrará un aviso pidiendo contactar por WhatsApp en vez de enviar el formulario.

## 2. Publicar gratis en GitHub Pages

1. Crea (o usa) un repositorio en tu cuenta de GitHub, por ejemplo `fitergosport-web`.
2. Sube el contenido de esta carpeta a ese repositorio (rama `main`).
3. En GitHub, entra a **Settings → Pages**.
4. En "Build and deployment" selecciona **Deploy from a branch**, rama `main`, carpeta `/ (root)`.
5. Guarda. GitHub te dará una URL del tipo `https://TU-USUARIO.github.io/fitergosport-web/`.
6. (Opcional) Si más adelante compran un dominio propio (ej. `fitergosport.cl`), se puede conectar en la misma sección "Pages" agregando un dominio personalizado — sigue siendo gratis, solo se paga el dominio.

## 3. Qué falta para la fase 2 (panel admin, blog dinámico, pagos)

El documento original pide panel de administración, blog editable, pasarela de pago (Webpay/Mercado Pago/Stripe) y CRM. Eso requiere un backend real (base de datos + autenticación), lo que ya no es 100% gratis a largo plazo. Cuando quieran dar ese paso, lo natural es migrar a **Next.js + Supabase** (el mismo stack usado en el CRM de Virtual Cóndor) y desplegar en Vercel — ambos tienen planes gratuitos generosos para partir.

## 4. Contenido pendiente de completar

- **Redes sociales**: los íconos de Instagram/LinkedIn/Facebook en el footer apuntan a `#`. Reemplázalos por las URLs reales apenas existan las cuentas.
- **Precio del producto digital** ("Guía Completa Dolor Lumbar"): por ahora el botón deriva a WhatsApp porque no hay pasarela de pago.
- **Fotografía profesional**: se usó el logo como imagen en "Nosotros" a falta de una foto real de Felipe. Se recomienda reemplazar `assets/img/logo.jpg` en esa sección por una fotografía profesional cuando esté disponible.
