# Límites — qué no tocar y cuándo llamar al proveedor

## Qué excede a este asistente

Si el cliente pide cualquiera de estas cosas, la respuesta es la misma:

> **"Eso lo hace Gestiona2, tu proveedor. Escríbeles al 301 366 5076."**

- **Rediseñar el sitio** o cambiar la identidad de marca completa
- **Cambiar la estructura de sectores** (agregar/eliminar un campo de acción nuevo crea
  una página nueva; hay que armar su página y decidir dónde va en menú y portada)
- **Agregar tienda, carrito o pagos en línea**
- **Conectar otros sistemas** (facturación, inventario, cotizaciones a correo, CRM)
- **Cambiar el formulario para que envíe por correo u otro canal** (hoy solo abre WhatsApp)
- **Mudar el hosting, cambiar el dominio o el correo**
- **Publicar el sitio** — hoy es propuesta (ver `PENDIENTES.md`)
- Escribir textos legales (los abogados, no este asistente)
- Cambiar colores o tipografías **sin que el cliente lo pida explícitamente**

**Un buen "no" es mejor que un intento a medias.** El cliente prefiere esperar un día por
su proveedor que ver su sitio caído una hora.

## Qué no se toca con excusa

- **`src/layouts/Layout.astro`** — menú, pie, botones flotantes. Cambiarlo afecta a las 11
  páginas. Solo se toca para corregir diseño, previa revisión.
- **Configuración de publicación** — `astro.config.mjs`, credenciales, hosting. Solo
  proveedor.
- **`public/vendor/`** — las librerías (Lucide, GSAP). No editarlas a mano salvo que lo
  diga el proveedor (ej.: agregar un ícono Lucide nuevo).
- **Historial** — nunca `reset --hard` ni `push --force`. Ver `PUBLICAR.md`.
- **Sitios hermanos** — este sitio es un proyecto independiente; no tocar otras carpetas
  del mismo servidor.

## Las reglas del sistema constructor (por qué este sitio es así)

- **Ningún texto dentro de `.astro`** — todo vive en `src/datos/*.json`.
- **Ninguna tipografía cargada desde Google** — se sirven desde `public/fonts/`.
- **Imágenes de menos de 250 KB** — el sitio es estático y el peso se nota.
- **Nada de "lluvia de contenido"**: el contenido se hace corto y demostrativo; es una
  propuesta.
- **No inventar datos.** Cifras, casos, clientes y testimonios se piden al negocio. Las
  cifras que están hoy vienen del sitio actual y están **por confirmar**
  (`PENDIENTES.md`).

## Las cuatro reglas de oro del asistente

1. **Los textos viven en `src/datos/`.** Nunca en un `.astro`.
2. **Mostrar antes de publicar. Siempre.** "Se ve bien" es aprobación; el silencio no. Nunca
   publicar por iniciativa propia.
3. **Todo se puede deshacer**, y el cliente tiene que saberlo.
4. **Respeta la marca.** Colores y tipografías no se cambian sin pedido explícito.

## Detente y avisa (no sigas intentando)

- La vista previa deja de abrir o muestra un error
- La publicación falla dos veces seguidas
- Aparece un aviso de seguridad o de certificado
- Hay que escribir una contraseña para continuar

En todos estos casos: explicar al cliente qué pasó, con qué palabras contárselo al
proveedor, y detenerse ahí.