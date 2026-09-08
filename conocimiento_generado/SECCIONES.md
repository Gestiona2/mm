# Inventario de secciones — Manos Maestras

Qué hay en cada página, dónde vive su texto, y qué se puede cambiar sin romper nada.

> **Lo primero y más importante de este sitio: TODO el texto vive en `src/datos/`.**
> Un archivo por página, más `sitio.json` para lo que se repite. Los archivos `.astro`
> tienen el diseño y **ni una sola frase escrita a mano**. Si crees que hay que tocar un
> `.astro` para cambiar un texto, vuelve a mirar el JSON: el campo existe.

## Los archivos de contenido

| Archivo | Qué controla |
|---|---|
| `src/datos/sitio.json` | Menú, sectores, WhatsApp, correos, direcciones, pie. **Se ve en todas las páginas.** |
| `src/datos/inicio.json` | Toda la página de inicio |
| `src/datos/sector-retail.json` | Página del sector retail |
| `src/datos/sector-constructor.json` | Página del sector constructor |
| `src/datos/sector-empresarial.json` | Página del sector empresarial |
| `src/datos/sector-productor.json` | Página del sector productor |
| `src/datos/sector-btl.json` | Página del sector BTL |
| `src/datos/sector-estatal.json` | Página del sector estatal |
| `src/datos/nosotros.json` | Página Nosotros |
| `src/datos/contacto.json` | Contacto: sedes y campos del formulario |
| `src/datos/politica-privacidad.json` | Página legal de privacidad |
| `src/datos/tratamiento-datos.json` | Página legal de datos |

---

## Lo que se repite en todas las páginas (`sitio.json`)

### Menú superior
- **Cómo lo llama el cliente:** "el menú", "los botones de arriba"
- **Dónde:** lista `menu` en `sitio.json`. Solo 4 ítems: Inicio, Campos de acción (despliega),
  Nosotros y Contacto.
- **El desplegable "Campos de acción"** se llena con la lista `sectores` (los 6 sectores).
  Agregar un sector nuevo aquí no crea la página: hay que crear también su JSON y su `.astro`.
- **Cuidado:** el campo `id` de cada ítem debe coincidir con el `activa="..."` de la página,
  o el naranja no marca dónde está el visitante. Para los sectores, al estar dentro del
  desplegable se marcan con el nombre corto (`retail`, `constructor`, etc.).
  El enlace "Campos de acción" apunta a `/sector-retail` como primera parada.

### Pie de página
- Se arma solo con el menú, los `sectores`, las redes y los `legales`. No hay que editarlo
  aparte.

### Logos
- `public/brand/logo.png` (menú claro, pie) y `public/brand/logo-blanco.png` (menú oscuro).
- El favicon está en `public/brand/favicon.png`, generado a partir del logo.

---

## Página de inicio (`src/datos/inicio.json`)

Nueve secciones, en este orden.

### 1. Portada
- **Cómo la llama el cliente:** "la portada", "lo primero que se ve"
- **Dónde:** bloque `portada`
- **Qué contiene:** `encabezado` (línea de arriba), `titulo` + `tituloAcento` (el acento va
  en ámbar), `texto`, `botones`, la imagen de fondo (`imagenFondo`), la imagen de la tarjeta
  (`imagenVisual`) y el badge de años (`badge`).
- **Imagen de fondo:** `/img/hero-instalacion.jpg` — foto **oscura**: encima va texto blanco.
- **Cuidado:** el titular está pensado para 2 líneas y el acento va en la segunda. Uno mucho
  más largo desacomoda la portada en móvil.

### 2. Campos de acción (las 6 tarjetas)
- **Dónde:** bloque `campos` con `items`. Cada tarjeta tiene `titulo`, `texto`, `imagen`,
  `href`, `icono`.
- **Imagen:** 16:9 (foto de portada de cada sector). Se recortan al centro.
- **Cuántas caben bien:** 6 (una por sector). Cerrada a eso: el menú y las páginas de sector
  dependen de los mismos 6.

### 3. Cinta de clientes
- **Cómo la llama el cliente:** "los logos que se mueven"
- **Dónde:** bloque `clientes` con `logos`. Cada uno: `archivo` y `nombre`.
- **Cuántos caben bien:** 6 a 10. Hoy hay 6; con menos de 5 se nota la repetición.
- **Imagen:** PNG o JPG con fondo claro, 44 px de alto, se muestran en gris y se colorean con
  hover.

### 4. Servicios por pestañas
- **Dónde:** bloque `servicios` con `tabs`. Cada pestaña: `id`, `nombre` y `items`.
- **Qué es:** pestañas de los 6 sectores; cada una lista los servicios de ese sector.
- **Cada tarjeta de servicio** tiene `titulo`, `icono` **y `texto`** (una línea que explica el
  servicio). Si `texto` se deja vacío, la tarjeta no muestra esa línea.
- **Íconos:** ver la nota de `icono` en `STACK.md` y `LIMITES.md` (los íconos son de Lucide).
- **Cuántos servicios por pestaña:** 3 a 8 se ven bien. Evitar superar 8 (se llena la grilla).
  Hoy retail 9, constructor 8, productor 9, empresarial 8, BTL 6 y estatal 8.

### 5. Cifras
- **Cómo la llama el cliente:** "los números grandes"
- **Dónde:** bloque `cifras` con `items`.
- **Cuántas caben bien:** **exactamente 4.** Con 3 o 5 la fila queda descompensada.
- **Cuidado:** los números se animan contando desde cero. Deben ser enteros (`490000`, no
  `490.000`). El sufijo (`+`) va aparte.

### 6. Cómo trabajamos
- **Cómo la llama el cliente:** "los 4 pasos", "cómo trabajamos"
- **Dónde:** bloque `proceso` con `pasos`. Cada paso: `titulo`, `texto`, `icono`.
- **Cuántos pasos caben bien:** exactamente 4.

### 7. Video
- **Cómo la llama el cliente:** "el video", "el video institucional"
- **Dónde:** bloque `video`. Se pueden cambiar `titulo`, `texto` y `duracion`.
- **El archivo:** `public/video/manos-maestras.mp4`. Está guardado dentro del sitio, no en
  YouTube: así no dependemos de nadie y no se cargan cookies ajenas. Para cambiar el video,
  reemplazar ese archivo por otro con el mismo nombre y actualizar `duracion`.
- **La miniatura:** `public/img/video-portada.jpg`. Es lo único que se descarga al entrar;
  el video solo baja cuando el visitante toca reproducir.

### 8. Diferenciadores
- **Dónde:** bloque `diferentes` con `items` — 6 tarjetas (rápido y oportuno, experiencia,
  personal calificado, garantía, respaldo, confianza).

### 9. CTA final
- **Dónde:** bloque `cta`. Es el cierre de la página. Se puede cambiar texto y botones.

---

## Las 6 páginas de sector (`src/datos/sector-*.json`)

Todas comparten `src/components/SectorPagina.astro`. **El texto se edita en el JSON del
sector, nunca en el componente.**

- **Para cambiar el texto de un sector:** editar su JSON (ej. `sector-retail.json`).
- **Para cambiar algo que afecte a los seis **a la vez**:** hay que tocar
  `SectorPagina.astro` — y eso los cambia todos. Avisar antes de hacerlo.
- Cada JSON tiene: `meta` (título/descripción para Google), `encabezado` (con
  `imagenFondo` y textos), `servicios` (lista con `titulo`, `texto`, `icono`, y ahora más
  servicios por sector: retail 10, constructor 10, empresarial 8, productor 9, BTL 6 y
  estatal 8), `pilares` (4, fijos: Puntualidad, Servicio oportuno, Garantía, Equipo humano)
  y `cta`.
- **El encabezado** tiene la imagen de fondo oscura con texto blanco encima: debe ser una
  foto oscura o se pierde el título.
- **Pilares:** exactamente 4. Iguales en los 6 sectores; si cambia uno, actualizar los seis
  (o avisarle al dueño que quedarán distintos).

---

## Nosotros (`src/datos/nosotros.json`)

- `encabezado` → título e imagen de fondo de la primera pantalla
- `presentacion` → el bloque "Nuestros valores son la clave…" con la foto del equipo.
  El texto está en `parrafos` (lista de párrafos; agregar o quitar párrafos es seguro).
- `valores` → 4 tarjetas (Oportunidad, Personal humano, Calidad, Respaldo)
- `legado` → 3 hitos (2 países, 7 ciudades —Bogotá, Medellín, Cali, Cartagena,
  Barranquilla, Pereira y Lima—, 490.000+ servicios). Datos por confirmar.
- `clientes` → misma cinta de logos que el inicio
- `cta` → cierre

---

## Contacto (`src/datos/contacto.json`)

- `sedes` → las tarjetas de direcciones. Hoy hay 3: Bogotá (principal), Bogotá (oficina) y
  Lima. Cada una con `pais`, `ciudad`, `nombre`, `direccion`, `telefono`, `whatsapp`,
  `correo`. Se pueden agregar o quitar libremente.
  - **Nota:** el sitio actual tenía un error de tipeo en la dirección ("Clale 67g…"). Aquí
    quedó corregido a "Calle 67G # 65A-95". Confirmar la dirección exacta con el cliente.
- `formulario` → los campos del formulario. **Cambiar un campo de aquí SÍ es seguro**: es
  este sitio, no un sistema externo. El formulario arma un mensaje y lo abre en WhatsApp
  (el número viene de `sitio.json` → `whatsapp`).

---

## Legales (`src/datos/politica-privacidad.json`, `tratamiento-datos.json`)

- Mismo formato: `encabezado` + `secciones` (cada una con `titulo` y `parrafos`).
- ⚠️ **Son textos de propuesta**, redactados como borrador. Conviene que los revise un
  abogado antes de la publicación final. Ver `PENDIENTES.md`.