# Active Neural Scene Representations — IROS 2026 Workshop

Workshop website for "Active Neural Scene Representations for Robotic Perception and Planning" at IROS 2026.

## Hosting on GitHub Pages

1. Create a new GitHub repository (e.g., `iros2026-workshop`)
2. Push the contents of this folder to the `main` branch
3. Go to **Settings → Pages**
4. Set **Source** to "Deploy from a branch" → `main` / `/ (root)`
5. Your site will be live at `https://<your-username>.github.io/iros2026-workshop/`

## File Structure

```
iros_workshop/
├── index.html          # Main single-page website
├── style.css           # All styles
├── script.js           # Navigation toggle, scroll effects
├── _config.yml         # GitHub Pages configuration
├── .nojekyll           # Tells GitHub Pages to skip Jekyll processing
├── README.md           # This file
└── assets/
    ├── speakers/       # Speaker headshot photos
    ├── organizers/     # Organizer headshot photos
    ├── papers/         # Accepted paper PDFs
    └── sponsors/       # Sponsor logos
```

## Customization

- Edit `index.html` to update content (speakers, schedule, organizers, etc.)
- Edit `style.css` to change colors, fonts, or layout
- Replace placeholder images in `assets/` with actual photos
- Update the contact email in the footer

## Local Preview

```bash
# Using Python
cd iros_workshop
python3 -m http.server 8000
# Then open http://localhost:8000

# Using Node.js
npx serve .
```
