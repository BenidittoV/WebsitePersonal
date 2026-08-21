# Beniditto Eka Viyantyo — Personal Web3 Portfolio Enhanced

A dependency-free personal portfolio built with HTML, CSS, and vanilla JavaScript. The interface keeps a modern Web3 atmosphere while remaining clearly personal: identity, biography, internship experience, individual project contributions, education, competition history, technical toolkit, and direct contact information.

## Enhanced interactions

- About statistics count rapidly from zero when entering the viewport and replay on hover or keyboard focus.
- Internship details rise from below and become fully visible when each experience is hovered or focused.
- On desktop, vertical scrolling drives the project gallery horizontally. Normal downward scrolling resumes after the final project.
- On tablets and phones, projects return to a conventional vertical layout for usability.
- The technical toolkit uses recognizable technology-logo tiles with names revealed on hover or focus.
- Contact links enter sequentially from right to left and replay when the link area is hovered.
- Reduced-motion preferences are respected.

## Run locally

### VS Code Live Server

1. Open this folder in VS Code.
2. Open `index.html`.
3. Click **Go Live**, or right-click and choose **Open with Live Server**.

### Python server

```bash
python -m http.server 8080
```

Open `http://localhost:8080`.

## Edit content

- Personal sections: `index.html`
- Project and toolkit data: `assets/js/content.js`
- Interactions and scroll behavior: `assets/js/app.js`
- Visual design and responsive rules: `assets/css/style.css`

## Included documents

- `assets/docs/Beniditto-Eka-Viyantyo-CV.pdf`
- `assets/docs/Beniditto-Eka-Viyantyo-Portfolio.pdf`

## Deployment

The site is static and requires no build command. Upload the complete folder to GitHub Pages, Netlify, Vercel static hosting, or a standard web server.

## Preview

Open `preview.png` to inspect the enhanced horizontal project presentation.


## Section-triggered motion update

The portfolio statistics, internship timeline, technical toolkit, and contact-link sequence now animate automatically when their section enters the viewport. These sequences no longer depend on mouse hover. Motion is played once per section and respects `prefers-reduced-motion`.
