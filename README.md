# Oleh Mordach — Portfolio

Professional portfolio website for Oleh Mordach, Senior Product & Program Manager.

**Live site**: [mordach.com](https://mordach.com)

## Technology Stack

- **React 18** with TypeScript
- **Vite** for fast builds
- **Tailwind CSS** for styling
- **Framer Motion** for animations

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploying to GitHub Pages

### Option 1: Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. The `dist/` folder contains all static files ready for deployment.

3. Push the contents of `dist/` to your GitHub Pages repository, or configure GitHub Pages to serve from the `dist/` folder.

### Option 2: GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Then in your repository settings:
1. Go to **Settings** → **Pages**
2. Set **Source** to "Deploy from a branch"
3. Select the `gh-pages` branch and `/ (root)` folder

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx         # Fixed header with mobile menu
│   ├── HeroSection.tsx        # Full-height hero with name & value prop
│   ├── AboutSection.tsx       # Background & philosophy
│   ├── ExperienceSection.tsx  # Career highlights
│   ├── SkillsSection.tsx      # Core competencies
│   ├── CertificationsSection.tsx  # Professional credentials
│   ├── ContactSection.tsx     # Contact links
│   └── Footer.tsx
├── pages/
│   └── Index.tsx              # Main portfolio page
├── index.css                  # Design system & global styles
└── main.tsx                   # App entry point
```

## Customization

### Updating Content

All content is in the respective component files under `src/components/`. Edit the data arrays and text directly.

### Changing Colors

The design system is defined in `src/index.css` using CSS custom properties. All colors use HSL values:

```css
:root {
  --background: 0 0% 7%;    /* Dark charcoal */
  --foreground: 0 0% 98%;   /* Almost white */
  --accent: 210 14% 40%;    /* Slate blue accent */
  /* ... */
}
```

### Fonts

The site uses:
- **Playfair Display** for headings (elegant serif)
- **Inter** for body text (clean sans-serif)

Fonts are loaded via Google Fonts in `src/index.css`.

## SEO

The site includes:
- Semantic HTML structure
- Optimized meta tags
- Open Graph & Twitter Card tags
- Canonical URL
- Fast load times with minimal dependencies

## License

© 2026 Oleh Mordach. All rights reserved.
