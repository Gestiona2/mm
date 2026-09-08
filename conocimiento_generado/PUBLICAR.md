# Cómo publicar y cómo deshacer

> **Estado actual: este sitio es una propuesta de diseño, aún NO está publicado.**
> Aún no tiene hosting ni dominio. Todo lo de este archivo queda listo para cuando se
> contrate la publicación.

## Lo que existe hoy

- El código de producción se genera con `npm run build` → carpeta `dist/`.
- El sitio se ve en `http://localhost:4321` (vista previa de la propuesta).
- Dominio de referencia en la configuración: `https://manosmaestras.com` (ver
  `PENDIENTES.md`). No registrarlo ni publicar nada con ese dominio sin confirmar.
- Spot en `astro.config.mjs` → `site`: punto único a ajustar cuando se sepa el dominio
  final.

## Flujo de publicación (cuando esté contratado)

1. **Cambiar** — en `src/datos/` (textos) o, con cuidado, en `src/` (diseño).
2. **Mostrar** — `npm run dev` y decirle al dueño exactamente qué mirar (ver la lista de
   abajo).
3. **Esperar aprobación explícita** — "se ve bien" aprueba. El silencio no aprueba. Nunca
   publicar por iniciativa propia.
4. **Publicar** — subir `dist/` o pushear al repo conectado al hosting.
5. **Avisar** — decir que la publicación tarda de 2 a 4 minutos (según el proveedor) y que
   si no lo ve, recargue con Ctrl+F5.

### Antes de publicar cualquier cambio visual

- [ ] Se ve bien en celular (320 y 375 px)
- [ ] Se ve bien en tema claro **y** oscuro
- [ ] No se desacomodó nada alrededor
- [ ] Las imágenes nuevas pesan menos de 250 KB (ver `COMO-EDITAR.md`)

## Si la publicación falla

El sitio **sigue mostrando la versión anterior**: no se rompe. Avisar al cliente y
contactar al proveedor. No intentar arreglar la configuración de publicación.

## Deshacer

| El cliente dice | Qué hacer |
|---|---|
| "no me gustó" (aún sin publicar) | Descartar el cambio no guardado |
| "devuélvelo como estaba" | Revertir el último cambio publicado y publicar de nuevo |
| "vuelve a como estaba ayer" | Buscar ese punto en el historial y revertir hasta ahí |
| "borré algo sin querer" | Está en el historial: recuperarlo |

**Nunca borrar historial** (`reset --hard`, `push --force`). Siempre revertir **hacia
delante**, para que el deshacer también se pueda deshacer.

## Datos de acceso del proveedor

- **Proveedor:** Gestiona2
- **WhatsApp:** 301 366 5076

**Toda** decisión de hosting, dominio, correo y publicación vive en el proveedor, no en
este archivo. Si falta un dato de acceso, pedírselo al proveedor.

## Scripts de ayuda

- `instalar.sh` / `instalar.ps1` → prepara el entorno para quien recibe el sitio
  (instala Node y las dependencias).
- `doctor.sh` / `doctor.ps1` → revisa que el entorno siga funcionando (Node, dependencias,
  red).
- `TUTORIAL.md` → guía paso a paso de mantenimiento en lenguaje de negocio.