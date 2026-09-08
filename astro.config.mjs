import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// output por defecto queda en "static" — no agregar adapter salvo que el
// proyecto necesite SSR real (formularios y automatizaciones van por
// proxy PHP o GitHub Actions, no requieren servidor Astro en producción).
//
// Demo: el sitio vive en una subcarpeta de demos.emp2web.com (repositorio
// Gestiona2/mm en GitHub Pages). Cuando el cliente apruebe y tenga su
// dominio, poner site: "https://manosmaestras.com" y base: "/" — los
// enlaces ya pasan por src/lib/ruta.ts y no hay que tocarlos.
export default defineConfig({
  site: "https://demos.emp2web.com",
  base: "/mm",
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});
