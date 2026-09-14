# Pediatric Clinic Landing Page

Static, single-page landing page for the pediatric clinic (Persian, RTL).
Pure HTML/CSS/JS — no build step, no dependencies to install.

## Files

```
index.html      # markup + content
css/style.css   # design tokens + all styling
js/main.js      # hero slider, back-to-top button, footer year
```

## Placeholders to replace before going live

- **Logo**: two `<span class="brand-logo-placeholder">` blocks (header + footer) —
  replace with an `<img>` tag.
- **Images**: every `<div class="img-placeholder" data-label="...">` — replace with
  a real `<img src="..." alt="...">`. The `data-label` text tells you which image
  goes where.
- **Service 2 & 3 text**: placeholder copy marked `[متن نمونه — لطفاً جایگزین کنید]`
  in `index.html`. Service 1 (jaundice treatment) already uses real content.
- **Footer quick links**: 3 `<a href="#">` placeholders in the `.footer-links` list.
- **Footer contact info**: address, working hours, phone number placeholders.
- **Google Map**: the `<iframe class="map-frame" src="about:blank">` — replace
  `src` with a real embed URL. To get one: Google Maps → search your location →
  Share → "Embed a map" tab (not "Send a link") → copy the `src="..."` value.

## Deploying on GitHub Pages (organization repo)

1. Create a new repository under the organization (e.g. `clinic-landing`).
2. Push these files to the repo, keeping this folder structure at the repo root
   (i.e. `index.html` must be at the repo's top level, not inside a subfolder —
   or use the "docs/" option below).
3. In the repo: **Settings → Pages**.
4. Under "Build and deployment", set **Source: Deploy from a branch**.
5. Choose branch `main` and folder `/ (root)`, then **Save**.
6. GitHub will publish the site at:
   `https://<org-name>.github.io/<repo-name>/`
   (this can take a minute or two the first time).

If you'd rather keep this inside a monorepo alongside other things, put these
files under a `/docs` folder instead and pick `/docs` as the folder in step 5.

## Notes

- Font is Vazirmatn, loaded from jsdelivr CDN (not Google Fonts) because Google
  Fonts is often blocked for visitors inside Iran.
- The slider autoplay respects `prefers-reduced-motion` and pauses on hover.
- All buttons and links have visible keyboard focus states.
