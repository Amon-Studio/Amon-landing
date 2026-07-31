# Amon-landing

Static landing site for Amon Studio, served by GitHub Pages at
**https://amon-studio.github.io/Amon-landing/**

## Structure

```
index.html            Home (logo + sticker trail on mouse move / gyroscope)
privacy.html          Privacy Policy
terms.html            Terms of Service
404.html              Not-found page
images/01..26.png     Stickers used by the trail effect
logo.png              Amon wordmark (900px wide — 3x its 300px max display size)
og.png                1200x630 social share card
favicon.png           Favicon (48x48)
apple-touch-icon.png  iOS home-screen icon (180x180)
robots.txt            Crawl rules
sitemap.xml           Sitemap
.nojekyll             Disables Jekyll processing
```

No build step, no dependencies — plain HTML/CSS/JS with inline styles and scripts.
All internal links are relative, so the site works both at a domain root and under
the `/Amon-landing/` project path.

## Local preview

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deployment

Every push to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which uploads the repository root as-is and publishes it to GitHub Pages.

## Custom domain

`amonstudio.io` is **not** served from this repo — its DNS points to Framer
(apex `31.43.160.6` / `31.43.161.6`, `www` → `sites.framer.app`). This repo had a
stale GitHub Pages custom-domain setting for it, which made the Pages URL redirect
to a host GitHub doesn't serve; that setting has been removed.

To serve this site on the domain instead, repoint DNS at GitHub Pages, then set the
custom domain in Settings → Pages (which recreates the `CNAME` file):

| Record | Name | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` |
| CNAME | `www` | `amon-studio.github.io` |

## SEO

Each page carries a unique title and description, a `canonical` link, Open Graph +
Twitter card tags pointing at `og.png`, and `theme-color`. The home page also has a
single `<h1>` (wrapping the wordmark, whose `alt` carries the text) and an
`Organization` JSON-LD block.

Absolute URLs (`canonical`, `og:url`, `og:image`, `sitemap.xml`, `robots.txt`) all
point at **`https://amonstudio.io`**, the intended production home — so the DNS
switch below needs no code change. Until it happens, those URLs resolve to the
Framer site, and the Pages URL above is staging.

To stage on the Pages URL instead:

```bash
grep -rl amonstudio.io --include='*.html' --include='*.xml' --include='*.txt' . | xargs sed -i '' 's|https://amonstudio.io|https://amon-studio.github.io/Amon-landing|g'
```

## Replacing a sticker

Stickers are cache-busted via a version query string. After swapping a file in
`images/`, bump `ASSET_VERSION` in `index.html` so browsers refetch it.
