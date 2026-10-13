# AthleteOS public website

A static marketing site in plain HTML, CSS and JavaScript. It has no build step and no dependencies, and works on mobile and desktop.

## Files

| File | Purpose |
|---|---|
| `index.html` | All page content and sections |
| `styles.css` | Brand palette (from `docs/BRAND_AND_THEME.md`) and responsive layout |
| `script.js` | Mobile menu, scroll reveal, count-up stats, tabs, score ticker, back-to-top |
| `assets/athleteos-logo.png` | AthleteOS logo. Do not recolour it. |

## Preview

Open `index.html` in a browser, or serve the folder with either of these:

```
npx http-server . -p 3200
python -m http.server 3200
```

## Host

Upload the folder contents to any static host, such as Hostinger web hosting, Netlify, Cloudflare Pages or GitHub Pages.

To host it on the AthleteOS VPS with nginx:

```
server {
  server_name www.athleteos.club;
  root /var/www/athleteos-site;
  index index.html;
  location / { try_files $uri $uri/ =404; }
}
```

## Edit

- **Contact details:** search `index.html` for `admin@athleteos.club` and `www.athleteos.club`.
- **Colours:** change the CSS variables in the `:root` block at the top of `styles.css`.
- **Claims:** keep the pilot and beta wording accurate. See `SPORT_CERTIFICATION_MATRIX.md` before describing a sport as certified.
