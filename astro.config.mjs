import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// output por defecto queda en "static" — no agregar adapter salvo que el
// proyecto necesite SSR real (formularios y automatizaciones van por
// proxy PHP o GitHub Actions, no requieren servidor Astro en producción).
export default defineConfig({
  // Dominio del cliente: pendiente de confirmar antes de publicar.
  site: "https://manosmaestras.com",
  vite: {
    plugins: [tailwindcss()],
  },
});
