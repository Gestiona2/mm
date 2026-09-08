# Recetas — los cambios más comunes

Cada receta dice qué archivo se toca. Todas terminan igual: mostrar el resultado al dueño
del negocio, y publicar solo cuando lo apruebe (ver `PUBLICAR.md`).

---

## Textos

**"Cambia el título de la portada"**
`src/datos/inicio.json`, bloque `portada`. Son dos líneas: `titulo` y `tituloAcento` (el
acento va en ámbar). Mantener un largo parecido al actual o la portada se desacomoda en
celular.

**"Cambia el texto de tal sección de la página de inicio"**
Buscar la sección en `SECCIONES.md` (portada, campos, clientes, servicios, cifras,
diferentes, cta). Todo vive en `inicio.json`.

**"Corrige una falta de ortografía"**
Buscar la frase exacta en todo `src/datos/` — puede estar repetida en varias páginas
(ej.: los pilares están en los 6 archivos de sector).

---

## Sectores

**"Cambia el texto de la página del sector retail"**
`src/datos/sector-retail.json`. `servicios.items` es la lista de servicios; agregar o quitar
objetos `{ titulo, texto, icono }`.

**"Agrega un servicio al sector constructor"**
`src/datos/sector-constructor.json`, lista `servicios.items`. Usar un `icono` que ya exista
en el sitio (ver `STACK.md`).

**"Cambia la foto del sector empresarial"**
`src/datos/sector-empresarial.json`, `encabezado.imagenFondo`. Guardar la foto en
`public/img/` primero. Debe ser oscura: encima va texto blanco.

**"Cambia un pilar del servicio"**
⚠️ Los 4 pilares están repetidos en los 6 archivos de sector (`pilares.items`). El cliente
pide normalmente "cambiar la garantía" — hay que actualizar los 6 JSON o los sectores
quedarán con textos distintos. Decidir con el cliente si el cambio es para todos o solo
para uno.

---

## Listas

**"Agrega el logo de un cliente nuevo"**
1. Guardar el logo en `public/img/clientes/` — formato claro, 44 px de alto efectivo.
2. Agregarlo a `clientes.logos` en `inicio.json` (y en `nosotros.json` si va a la homologa
   página de Nosotros).

**"Actualiza las cifras"**
`inicio.json`, bloque `cifras.items`. Solo números enteros (`490000`, no `490.000`);
el sufijo `+` va en `sufijo`. **Son cifras del negocio: pedirlas al cliente, nunca
inventarlas.**

---

## Imágenes

**"Cambia la foto de portada"**
Guardar la nueva en `public/img/` y actualizar `portada.imagenFondo`. La foto debe ser
**oscura**: encima va texto blanco.

**"Cambia la foto de la tarjeta de la portada"**
`portada.imagenVisual` en `inicio.json`. La tarjeta tiene un badge abajo a la izquierda.

**Reglas para cualquier imagen:**
- JPG para fotos, PNG para logos o transparencias
- Menos de 250 KB por archivo — el sitio es estático y el peso se nota al cargar
- Respetar la proporción de su sección o sale recortada de forma rara
- Las fotos de fondo de encabezado y portada deben ser oscuras (texto blanco encima)

---

## Datos de contacto

**"Cambia el número de WhatsApp"**
`src/datos/sitio.json`, campo `whatsapp`. Formato: **sin espacios, sin + y sin guiones,
empezando por 57** (ejemplo: `573183517494`). Si se escribe con espacios, el botón flotante
de WhatsApp deja de funcionar. **Nota:** la lista de sedes en `contacto.json` muestra los
WhatsApp como texto legible (con espacios); eso es para leer, no para enlazar.

**"Cambia el correo o la dirección"**
`sitio.json` para los datos globales (pie, contacto, botón). `contacto.json` para las
tarjetas de sedes. Revisar ambos.

---

## Formulario

**"Agrega una opción al desplegable de sector del formulario"**
`contacto.json`, `formulario.campos.sector.opciones`. Agregar el texto de la opción.

**"El formulario envía mal el mensaje"**
El formulario arma un texto y abre WhatsApp (`https://wa.me/<whatsapp>?text=…`). No hay
backend. Si el botón no abre WhatsApp, revisar `contacto.astro` (el bloque `<script>`) y
que `sitio.json` → `whatsapp` esté bien escrito.

---

## Colores

**"Cambia el color principal"**
`src/styles/global.css`, bloque `@theme` al principio, y las variables `:root`.
⚠️ Revisar cómo queda **en tema claro y en tema oscuro** antes de publicar, y confirmarlo
con el dueño del negocio: los colores vienen del manual de marca (ver `MARCA.md`).

---

## Lo que no se hace desde aquí

Rediseñar el sitio, cambiar la identidad de marca, tocar el menú desplegable o la estructura
de sectores, o agregar tienda y pagos. Ver `LIMITES.md`.