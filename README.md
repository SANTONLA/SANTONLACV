# SANTONLACV
```markdown
# Página personal SANTONLA — GitHub Pages

Archivos incluidos:
- `index.html` — página principal (perfil/CV).
- `styles.css` — estilos.
- `.nojekyll` — evita que GitHub Pages use Jekyll (permite archivos con guiones bajos).
- `.github/workflows/deploy.yml` — *opcional* GitHub Action para desplegar automáticamente a `gh-pages`.

Opciones para publicar:

1) Publicar directamente desde la rama `main` (sencillo)
- Coloca `index.html` en la raíz del repositorio y haz push a `main`.
- En GitHub > Settings > Pages, selecciona "Branch: main" y carpeta "/ (root)" y guarda.
- La página estará disponible en `https://<tu-usuario>.github.io/<tu-repo>/` o, si el repo es `username.github.io`, en `https://username.github.io/`.

2) Publicar usando la rama `gh-pages` (automático con Action)
- Incluye el workflow `.github/workflows/deploy.yml` (ya incluido).
- El workflow publica a la rama `gh-pages` cuando haces push a `main`.
- En Settings > Pages, selecciona "Branch: gh-pages" y carpeta "/ (root)".

3) Usar la carpeta `docs/` en `main`
- Mueve `index.html` y `styles.css` a `docs/` y en Settings > Pages selecciona "Branch: main /docs".

Despliegue automático (configuración mínima)
- Si usas el workflow que acompaña este repo, no necesitas generar token: la Action usa `GITHUB_TOKEN` integrado.
- Asegúrate de que la rama de origen sea `main`. Si usas otra rama, modifica el workflow.

Personalización del dominio
- Si tienes un dominio personalizado, añade un archivo `CNAME` con el dominio en la raíz y configúralo en Settings > Pages > Custom domain.

Cómo subir los archivos (ejemplo rápido)
```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin git@github.com:SANTONLA/<your-repo>.git
git push -u origin main
```

Si quieres, puedo:
- Crear el repo y hacer el push por ti (necesito el nombre del repositorio).
- Configurar un workflow diferente (por ejemplo, desplegar desde `docs/`).
- Añadir una versión más compacta optimizada para PDF (una sola página).
```
