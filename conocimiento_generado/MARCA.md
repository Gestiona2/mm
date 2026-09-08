# Marca — Manos Maestras

La propuesta visual aplicada en este sitio. Ver `docs/MARCA.md` del proyecto para el manual
completo y el razonamiento. **Esta paleta es una evolución de la marca actual (naranja), no
una copia: está por validar con el cliente** — ver `PENDIENTES.md`.

## Colores

| Nombre | Código | Dónde se usa |
|---|---|---|
| **Naranja profundo** | `#e85d26` | Color principal: botones, acentos de texto, íconos |
| **Ámbar** | `#ff9e3c` | Acentos claros, subrayados; sobre fondos oscuros |
| **Grafito cálido** | `#1c1917` | Fondos de portada, pie, bloques oscuros |
| **Hueso suave** | `#faf9f7` | Fondo general del sitio |
| **Gris cálido** | `#44403c` | Texto secundario |

**Dónde viven:** `src/styles/global.css`, al principio, en el bloque `@theme` y en las
variables `:root`. Cambiar un color ahí lo cambia en todo el sitio.

⚠️ **El sitio tiene tema claro y tema oscuro.** Al cambiar un color hay que revisar cómo
queda en los dos — un color que se lee bien sobre fondo claro puede desaparecer en el
oscuro. El botón para alternar está en el menú superior.

⚠️ **Contraste del ámbar:** el ámbar (`#ff9e3c`) es para fondos oscuros y acentos grandes,
**no para texto sobre fondo claro** (no pasa contraste). En tema claro los acentos de texto
usan el naranja profundo.

⚠️ **No cambiar colores ni tipografías sin confirmación del dueño del negocio.** Los
colores vienen de un manual de marca autorizado (o de la propuesta pendiente de validar).

## Tipografías

- **Space Grotesk** → títulos
- **Inter** → texto de cuerpo

Ambas están guardadas dentro del propio sitio (`public/fonts/`), no se cargan desde
Google. Es una decisión de privacidad: así Google no recibe la dirección IP de quien
visita el sitio. **No reemplazarlas por enlaces a Google Fonts.**

## Logos

Las versiones listas para usar están en `public/brand/`:

| Archivo | Uso |
|---|---|
| `logo.png` | Logo del menú (tema claro) y del pie |
| `logo-blanco.png` | Logo en blanco para menú oscuro |
| `favicon.png` | Pestaña del navegador (generado a partir del logo) |

Los originales están en `insumos/marca/` (con varias versiones: logo, logo blanco,
vertical).

## Cómo se habla

- Se tutea al cliente en los llamados a la acción ("Déjanos ser tu aliado").
- Tono profesional y cercano: se ofrece equipo, puntualidad, garantía y respaldo.
- Frase de marca: *"Expertos con experiencia y calidad a tu servicio."*
- **Nunca inventar cifras, casos, clientes ni testimonios.** Las cifras publicadas vienen
  del sitio actual del negocio y están por confirmar (ver `PENDIENTES.md`).

## Imágenes

- Las fotos de los sectores son de banco (Unsplash) de propuesta, **no son trabajos reales
  de la empresa** → ver `PENDIENTES.md`. Deben reemplazarse por fotos reales del negocio.
- Fotos reales que ya están en el sitio: foto del equipo (`foto-grupal-manos-maestras.jpg`),
  sedes (`contacto-bogota.jpg`, `contacto-peru.jpg`) y logos de clientes reales
  (`public/img/clientes/`).