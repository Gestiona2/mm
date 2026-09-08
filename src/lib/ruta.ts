/**
 * Prefija las rutas internas con la carpeta donde vive el sitio.
 *
 * En GitHub Pages el sitio no está en la raíz del dominio sino en una
 * subcarpeta (`/mm/`), así que un enlace escrito como `/contacto` apuntaría
 * fuera del sitio. Esta función le antepone la carpeta correcta.
 *
 * Cuando Manos Maestras tenga su dominio propio, `base` vuelve a `/` en
 * astro.config.mjs y esta función deja de prefijar nada — sin tocar ni
 * un enlace.
 *
 * NO toca los enlaces externos (https://, wa.me, mailto:, tel:, #ancla).
 */
export function ruta(destino: string | undefined | null): string {
  if (!destino) return "";

  // Externos y anclas: se dejan tal cual.
  if (/^([a-z]+:|\/\/|#)/i.test(destino)) return destino;

  // Relativos (sin barra inicial): tampoco se tocan.
  if (!destino.startsWith("/")) return destino;

  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return base + destino;
}