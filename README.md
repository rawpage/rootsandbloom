# Roots & Bloom

Website for Roots & Bloom, relaxed nursery photography in Bristol by Marianne and Melanie.

Live domain: www.rootsandbloom.co

## Structure

```
index.html            Home
nurseries.html        For nurseries: what we offer, how it works, commission, FAQs, enquiry form
privacy.html          Privacy policy (draft)
assets/css/styles.css Design tokens and all styles
assets/js/main.js     Mobile menu, FAQ tabs, commission slider, enquiry form, scroll reveals
assets/favicon.svg    Bloom mark
```

Plain HTML, CSS and JavaScript with no build step. Open `index.html` in a browser, or run a local server:

```
python3 -m http.server 8000
```

## Deploying

Any static host works (GitHub Pages, Netlify, Vercel, Cloudflare Pages). Point the host at the repository root; there is nothing to build.

## To do before launch

- **Photo consent.** Confirm each child's photo in `assets/img/` is cleared for use on the website.
- **Enquiry form.** It currently opens the visitor's email app addressed to hello@rootsandbloom.co. Connect a form service for in-page sending.
- **Privacy policy.** `privacy.html` is a draft. Fill in the yellow highlighted placeholders (business name and address, ICO number, gallery provider, retention periods) and have it reviewed.
- **Social preview image.** Add an `og:image` once photography is chosen.

## Design

Colours, fonts and spacing live as CSS variables at the top of `assets/css/styles.css`.

- Ink `#15171C`, cobalt `#2743E8`, marigold `#FFC933`, panel `#F3F4F8`
- Bricolage Grotesque (display), Figtree (body), Caveat (handwritten notes)
