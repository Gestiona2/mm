# Sitio web de Manos Maestras

Proveedor de equipos de instalación y montaje para proyectos en Colombia y Perú:
almacenes de cadena, constructoras, empresas, fabricantes, agencias BTL y entidades
estatales. Bogotá, Colombia (sede principal).

## Para el dueño del sitio

No hace falta leer esto. Abre `TUTORIAL.md`: explica cómo pedirle cambios al asistente
hablándole en español normal.

## Para quien edite el sitio

Lee `AGENTS.md` y después `conocimiento_generado/` completo.

**La regla que ordena todo:** el texto vive en `src/datos/`, un archivo por página. Los
archivos `.astro` tienen el diseño y ninguna frase escrita a mano.

## Ver el sitio mientras se edita

```bash
npm install     # solo la primera vez
npm run dev     # abre http://localhost:4321/mm
```

## Demo en línea

La propuesta está publicada como demo en **https://demos.emp2web.com/mm** (GitHub Pages:
cada push a `main` la actualiza). El dominio final del negocio se define al contratar.

## Compilar

```bash
npm run build   # deja el sitio listo en dist/
```

Hecho con Astro 7 y Tailwind 4. Sitio estático: sin base de datos ni servidor.

> **Este sitio es una propuesta de diseño.** La demo ya está en línea, pero falta la
> aprobación del cliente y resolver los pendientes de
> `conocimiento_generado/PENDIENTES.md` antes de pasar a su dominio propio.