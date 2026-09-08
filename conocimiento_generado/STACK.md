# Con qué está hecho este sitio

## En una frase

Sitio **estático**: no hay servidor ni base de datos. Se compila una vez y el resultado son
archivos HTML, CSS, JS e imágenes. Eso lo hace rápido, barato y muy difícil de romper.

## Tecnologías

| Área | Qué usa | Nota |
|---|---|---|
| Base | **Astro 7** (salida estática) | Una página por ruta |
| Estilos | **Tailwind v4** + `src/styles/global.css` | Los colores de marca están al principio de ese archivo |
| Tipografías | Space Grotesk + Inter | Guardadas en `public/fonts/`, no se cargan de Google |
| Íconos | **Lucide** | Guardado en `public/vendor/lucide/` |
| Animación | **GSAP + ScrollTrigger** y animaciones propias en CSS | Guardado en `public/vendor/gsap/` |
| Interacciones | JavaScript simple dentro de cada página | Contadores, pestañas de servicios, menú, tema claro/oscuro |
| Tema claro/oscuro | Se recuerda en el navegador del visitante | Sin parpadeo al cargar |
| Formulario | Arma un mensaje y abre WhatsApp (`wa.me`) | Sin backend; nota en `LIMITES.md` |
| Publicación | Pendiente de definir | Ver `PENDIENTES.md` y `PUBLICAR.md` |

## Dónde está cada cosa

```
public/
  brand/    → logos de la marca
  img/      → fotos (sectores, sedes, clientes, equipo)
  fonts/    → tipografías
  vendor/   → librerías de animación e íconos
src/
  styles/global.css      → colores, tipografías y todos los estilos
  layouts/Layout.astro   → menú, pie, botones flotantes — lo que se repite
  components/            → SectorPagina.astro (los 6 sectores) y PaginaLegal.astro
  pages/                 → una página por ruta
  datos/                 → ¡todo el texto del sitio! Un JSON por página
```

## 📁 La regla más importante: el texto está en `src/datos/`

**Nunca escribir texto dentro de un `.astro`.** El diseño vive en `.astro`; el contenido
vive en `src/datos/*.json`. Ver `SECCIONES.md` para la lista de archivos.

## Si quieres cambiar X, el archivo es Y

| Quiero cambiar… | Archivo |
|---|---|
| Un color o una tipografía | `src/styles/global.css` (al principio) |
| WhatsApp, correo, direcciones, menú, pie | `src/datos/sitio.json` |
| El contenido de la página de inicio | `src/datos/inicio.json` |
| El contenido de un sector | `src/datos/sector-<sector>.json` |
| Los 6 sectores a la vez (diseño) | `src/components/SectorPagina.astro` |
| El menú de arriba o el pie (diseño) | `src/layouts/Layout.astro` |
| Los campos del formulario | `src/datos/contacto.json` (textos de los campos) |
| Una página legal | `src/datos/politica-privacidad.json` o `tratamiento-datos.json` |

## Íconos (Lucide) — leer antes de inventar uno

Los íconos se escriben con su nombre en el JSON (ej. `"icono": "shield-check"`) y los
renderiza `public/vendor/lucide/lucide.min.js`. **Solo funcionan los que están incluidos
en ese archivo.** Si pones uno que no está, no sale nada (la grilla se ve con un hueco).

El archivo es un bundle **recortado a los 46 íconos que usa el sitio**, generado desde el
paquete `lucide` (devDependency) con `herramientas/build-lucide.mjs`. Para agregar un
ícono nuevo: añadir el import y la entrada PascalCase en ese script y regenerar con
`npx esbuild herramientas/build-lucide.mjs --bundle --format=iife --minify
--charset=utf8 --outfile=public/vendor/lucide/lucide.min.js`. Ver `public/vendor/lucide/LEEME.txt`.

Íconos usados hoy (46): `arrow-right`, `arrow-up`, `award`, `badge-check`, `bed-double`,
`blinds`, `briefcase`, `building-2`, `camera`, `check-circle`, `cloud-rain`, `door-open`,
`droplets`, `factory`, `file-check`, `flame`, `globe`, `graduation-cap`, `hammer`,
`landmark`, `layers`, `layout-grid`, `lightbulb`, `map`, `map-pin`, `message-circle`,
`monitor`, `moon`, `package`, `paint-roller`, `panels-top-left`, `party-popper`,
`shield-check`, `shirt`, `shower-head`, `sparkles`, `spray-can`, `store`, `sun`, `timer`,
`truck`, `users`, `utensils`, `wind`, `wrench`, `zap`.

> Nota: los íconos de marcas (Facebook, etc.) fueron retirados de Lucide. En este sitio la
> red del pie (Facebook) usa un SVG propio en `Layout.astro`, y el botón de WhatsApp usa su
> SVG de marca igualmente propio.

## Cómo ver los cambios antes de publicar

```bash
npm run dev
```
Abre una versión de prueba en el navegador que se actualiza sola al guardar. **Esa versión
es privada**: nadie más la ve hasta que se publique.

## Cómo compilar (versión de producción)

```bash
npm run build
```
Genera la carpeta `dist/` con el sitio listo para subir. El build de producción en nube
viene en `PUBLICAR.md`.