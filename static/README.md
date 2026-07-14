# AK Web Services — Static Site

Plain HTML/CSS/JS build of the luxury real estate site. Ready to host on **GitHub Pages**, Netlify, Vercel static, or any static host.

## Files

```
static/
├── index.html      # entire page markup
├── styles.css      # Noir & Gold theme + animations
├── script.js       # parallax, scroll-reveal, ROI calculator
└── assets/         # all 8 images (hero, properties, communities, agent)
```

## Deploy to GitHub Pages

1. Create a new GitHub repo (e.g. `ak-web-services`).
2. Copy the **contents of the `static/` folder** to the repo root.
3. Push to GitHub.
4. Repo → **Settings → Pages** → Source: `Deploy from branch` → Branch: `main` / root → Save.
5. Your site goes live at `https://<username>.github.io/<repo>/` in ~1 minute.

## Local preview

Open `static/index.html` directly in a browser, or serve it:

```bash
cd static && python3 -m http.server 8000
# open http://localhost:8000
```

## Notes

- Icons load from a CDN (`lucide-static`). No build step required.
- Fonts load from Google Fonts (Urbanist + Epilogue).
- All 3 pieces (HTML, CSS, JS) are self-contained — no React, no bundler.
