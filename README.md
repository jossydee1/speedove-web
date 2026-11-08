# Speedove Technologies — Static Website

A responsive, multi-page static website concept for Speedove Technologies.

## Included pages
- `index.html` — homepage
- `about.html` — company overview, values and working approach
- `services.html` — detailed service catalogue
- `projects.html` — illustrative capability portfolio
- `contact.html` — enquiry form interface

## Run locally
Open `index.html` in a browser, or serve this folder with any static web server.

For example:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`.

## Before publishing
1. Confirm the final Speedove logo and exact brand colours. The current design uses a deep navy / electric blue / aqua palette as a polished working direction.
2. In `assets/js/main.js`, replace `REPLACE_WITH_VERIFIED_EMAIL` with Speedove's verified business inbox. The contact form then prepares an email in the visitor's default mail application.
3. Replace the illustrative portfolio concepts in `projects.html` with approved client case studies, screenshots and verified outcomes. The page currently labels these as illustrative to avoid implying unverified client work.
4. Add verified company contact details, social profile links, privacy policy and any required legal information.
5. Add a server-side form endpoint or form service if you want enquiries submitted directly without opening the visitor's email app.
6. Review SEO metadata, analytics/consent requirements and hosting configuration before launch.

## Technology
HTML5, CSS3 and vanilla JavaScript. No build step or framework required.


## Speedove brand identity
- Sapphire: `#0460E9`
- Navy: `#010080`
- The supplied Speedove symbol is stored at `assets/images/speedove-mark.png` and is used in the site header and as the favicon.
- The social banner artwork was supplied as a reference; the website uses the clean standalone symbol with a live-text wordmark for sharper responsive rendering.
