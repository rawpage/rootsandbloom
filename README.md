# Roots & Bloom

Website for Roots & Bloom, relaxed nursery photography in Bristol by Marianne and Melanie.

Live domain: www.rootsandbloom.uk

## Structure

```
index.html            Home
nurseries.html        For nurseries: what we offer, how it works, commission, FAQs, enquiry form
privacy.html          Privacy policy (draft)
assets/css/styles.css Design tokens and all styles
assets/js/main.js     Mobile menu, FAQ tabs, commission slider, enquiry form, scroll reveals
assets/logo.png       Wordmark logo
assets/icon.png       Browser tab and home-screen icon
```

Plain HTML, CSS and JavaScript with no build step. Open `index.html` in a browser, or run a local server:

```
python3 -m http.server 8000
```

## Deploying

Any static host works (GitHub Pages, Netlify, Vercel, Cloudflare Pages). Point the host at the repository root; there is nothing to build.

## To do before launch

- **Photo consent.** Confirm each child's photo in `assets/img/` is cleared for use on the website.
- **Enquiry form.** It currently opens the visitor's email app addressed to hello@rootsandbloom.uk. Connect a form service for in-page sending.
- **Privacy policy.** `privacy.html` is a draft. Fill in the peach highlighted placeholders (business name and address, ICO number, gallery retention period) and have it reviewed.
- **Social preview image.** Add an `og:image` once photography is chosen.

## Design

Colours, fonts and spacing live as CSS variables at the top of `assets/css/styles.css`.

- Ink `#2B2124`, dusty rose `#A14F5B`, pastel pink `#F9E3E1`, peach `#F4C7AE`, panel `#FBF3F0`
- Bricolage Grotesque (display), Figtree (body), Caveat (handwritten notes)
