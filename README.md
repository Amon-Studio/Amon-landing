# Amon-landing

Static landing site for Amon Studio, served by GitHub Pages at
**https://amonstudio.io**

## Structure

```
index.html            Home (logo + sticker trail on mouse move / gyroscope)
privacy.html          Privacy Policy
terms.html            Terms of Service
404.html              Not-found page
CNAME                 Custom domain (amonstudio.io)
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

`amonstudio.io` is served from this repo (it used to point at Framer). The domain is
set in Settings → Pages, and mirrored in the `CNAME` file so the intent lives in the
repo too. HTTPS is enforced; GitHub renews the Let's Encrypt certificate on its own.
`www` 301-redirects to the apex, which is what the `canonical` tags point at.

DNS lives at Squarespace Domains (nameservers are still `ns-cloud-c*.googledomains.com`,
a leftover from the Google Domains migration):

| Record | Name | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153` |
| CNAME | `www` | `amon-studio.github.io` |

The same zone carries Google Workspace email (`MX smtp.google.com`, `TXT v=spf1
include:_spf.google.com ~all`) plus Search Console and TikTok verification records.
**Don't delete those** — `contact@amonstudio.io` is in the footer of every page, and
a "reset to defaults" in the Squarespace DNS panel would take the MX records with it.

## SEO

Each page carries a unique title and description, a `canonical` link, Open Graph +
Twitter card tags pointing at `og.png`, and `theme-color`. The home page also has a
single `<h1>` (wrapping the wordmark, whose `alt` carries the text) and an
`Organization` JSON-LD block.

Absolute URLs (`canonical`, `og:url`, `og:image`, `sitemap.xml`, `robots.txt`) all
point at `https://amonstudio.io`. Update them together if the domain ever changes:

```bash
grep -rl amonstudio.io --include='*.html' --include='*.xml' --include='*.txt' .
```

## Replacing a sticker

Stickers are cache-busted via a version query string. After swapping a file in
`images/`, bump `ASSET_VERSION` in `index.html` so browsers refetch it.
