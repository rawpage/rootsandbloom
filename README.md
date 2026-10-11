# Roots & Bloom

Website for Roots & Bloom, relaxed nursery and primary school photography in Bristol by Marianne and Melanie.

Live domain: www.rootsandbloom.co

## Structure

```
index.html            Home
nurseries.html        For nurseries: what we offer, how it works, commission, FAQs, enquiry form
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

- **Portraits of Marianne and Melanie.** The two "Meet us" blocks are still labelled colour placeholders. Replace the label with an image:
  `<figure class="photo photo--tall tilt-l-sm"><img src="assets/img/marianne.jpg" alt="Marianne"></figure>`
- **Photo consent.** Confirm each child's photo in `assets/img/` is cleared for use on the website.
- **Enquiry form.** It currently opens the visitor's email app addressed to hello@rootsandbloom.co. Connect a form service for in-page sending.
- **Legal pages.** Privacy policy and cookie notice are not yet written.
- **Social preview image.** Add an `og:image` once photography is chosen.

## Design

Colours, fonts and spacing live as CSS variables at the top of `assets/css/styles.css`.

- Ink `#15171C`, cobalt `#2743E8`, marigold `#FFC933`, panel `#F3F4F8`
- Bricolage Grotesque (display), Figtree (body), Caveat (handwritten notes)
