# Pendientes — lo que quedó a medias

> Este sitio es una **propuesta de diseño**. Nada de esto bloquea la propuesta, pero todo
> debe resolverse antes de publicar. Orden: lo más urgente primero.

## 1. Validar la propuesta con el cliente

- **Colores y tipografía:** la paleta naranja actual se evolucionó (naranja + ámbar +
  grafito). La han visto los dueños del negocio, pero falta su aprobación formal.
- **Las páginas de sector** (uno por campo de acción) son estructura nueva frente al sitio
  actual: confirmar que es la navegación que quieren, o adaptar.

## 2. Fotos reales

- Las fotos de los sectores y de la portada son **de banco (Unsplash), solo de propuesta,
  no son trabajos reales de la empresa**. Pedir fotos reales de instalaciones de cada
  sector antes de publicar.
- Quedaron dentro del proyecto las fotos bancarias y fotos de clientes/equipo. Al publicar,
  asegurarse de que **no** entren fotos de banco con licencia de "solo uso en prueba".

## 3. Datos a confirmar con el cliente

- **Cifras:** "12+ años", "7 ciudades", "2 países", "490.000+ servicios" vienen del sitio
  actual del negocio. Confirmar que siguen vigentes y que el negocio quiere publicarlas.
- **Garantía:** los sectores dicen "hasta 24 meses". El sitio original decía "hasta un año"
  en la portada. Se unificó a 24 meses; confirmar cuál es la real.
- **NIT:** `src/datos/sitio.json` → `nit` está en "PENDIENTE — confirmar con el cliente".
- **Direcciones:** la dirección de Bogotá se corrigió de "Clale 67g…" (el sitio original
  tenía ese tipeo) a "Calle 67G # 65A-95". Confirmar la dirección exacta.
- **Clientes:** los 6 logos (Homecenter, Falabella, TuGo, Easy, Sodimac, Sentry) vienen
  fotografiados del sitio original; confirmar que se pueden usar y si falta alguno (los
  logos se ven ligeramente recortados al estar muy cerca del borde de la foto).

## 4. Publicación

- El sitio está publicado como **demo** en `https://demos.emp2web.com/mm` (GitHub Pages,
  repo `Gestiona2/mm`; cada push a `main` la actualiza). Es solo para mostrar la propuesta.
- **El dominio `manosmaestras.com` no está contratado** y no debe registrarse ni usarse
  sin confirmar. Cuando el cliente contrate, se ajusta `site` y `base` en
  `astro.config.mjs` (ver `PUBLICAR.md`).
- El formulario abre WhatsApp con el mensaje armado: sin backend, funciona desde ya. Si el
  cliente lo quiere a correo u otro destino, eso es trabajo extra (ver `LIMITES.md`).

## 5. Legal

- `politica-privacidad.json` y `tratamiento-datos.json` son **textos de propuesta**, no
  textos legales revisados. Que los revise un abogado antes de publicar.

## 6. Detalles técnicos

- ~~**Ícono de Facebook en el pie:**~~ resuelto: la red del pie usa un SVG propio de marca
  en `Layout.astro` (los íconos de marcas fueron retirados de Lucide). Ver `STACK.md`.
- La librería de íconos (Lucide) quedó recortada a los 46 que usa el sitio; para agregar
  otros, ver `STACK.md` y `public/vendor/lucide/LEEME.txt`.
- Las imágenes de descarga del sitio original quedaron en `insumos/` (documentación,
  descargas, marca) dentro del proyecto, como referencia.