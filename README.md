# WORLDS: World Models and Spatial Intelligence for Physical AI

Workshop website for **"WORLDS: World Models and Spatial Intelligence for Physical AI"** — a half-day workshop at **IROS 2026**.

🌐 **Live site:** [https://worlds-iros2026.github.io](https://worlds-iros2026.github.io)

## Organizers

- **Koichiro Niinuma** — Fujitsu Research of America
- **Laszlo Jeni** — Carnegie Mellon University
- **Mihoko Niitsuma** — Chuo University
- **Makoto Kawano** — University of Tokyo
- **Shaunak Mehta** — Fujitsu Research of America
- **Ananya Hazarika** — Fujitsu Research of America
- **Prajit Krisshna Kumar** — Fujitsu Research of America

## File Structure

```
├── index.html                          # Main single-page website
├── style.css                           # All styles
├── script.js                           # Navigation toggle, scroll effects
├── _config.yml                         # GitHub Pages configuration
├── .nojekyll                           # Skip Jekyll processing
├── README.md                           # This file
└── assets/
    ├── IROS-2026-logo-768x499-1.png.webp  # IROS 2026 logo
    ├── speakers/                       # Speaker headshot photos
    ├── organizers/                     # Organizer headshot photos
    ├── papers/                         # Accepted paper PDFs
    └── sponsors/                       # Sponsor logos
```

## How to Update the Site

1. Edit files locally or on the remote server
2. Commit and push:
   ```bash
   git add -A
   git commit -m "Description of changes"
   git push
   ```
3. GitHub Pages auto-deploys within ~1 minute

## Customization

- Edit `index.html` to update content (speakers, schedule, dates, etc.)
- Edit `style.css` to change colors, fonts, or layout
- Replace placeholder SVGs in `assets/speakers/` and `assets/organizers/` with actual headshot photos
- Update the contact email in the footer of `index.html`

## Local Preview

```bash
python3 -m http.server 8000
# Then open http://localhost:8000
```

If working on a remote server, use SSH port forwarding:
```bash
ssh -L 8000:localhost:8000 user@server-hostname
```
