# Amon-landing

Static landing site for Amon Studio — served by GitHub Pages at **https://amonstudio.io**.

## Structure

```
index.html            Home (logo + sticker trail on mouse move / gyroscope)
privacy.html          Privacy Policy
terms.html            Terms of Service
404.html              Not-found page
images/01..26.png     Stickers used by the trail effect
logo.png              Amon wordmark
favicon.png           Favicon
apple-touch-icon.png  iOS home-screen icon
CNAME                 Custom domain (amonstudio.io)
robots.txt            Crawl rules
sitemap.xml           Sitemap
.nojekyll             Disables Jekyll processing
```

No build step, no dependencies — plain HTML/CSS/JS with inline styles and scripts.

## Local preview

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deployment

Every push to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which uploads the repository root as-is and publishes it to GitHub Pages.

## Replacing a sticker

Stickers are cache-busted via a version query string. After swapping a file in
`images/`, bump `ASSET_VERSION` in `index.html` so browsers refetch it.
