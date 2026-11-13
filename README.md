# lorestonegames.com

The Lorestone Games studio website, served by GitHub Pages from this repository.

- `index.html`: the studio home page, featuring JournalScape.
- `privacy.html`: the website privacy notice.
- `style.css` and `fonts/`: EB Garamond and Cinzel Decorative, under the SIL Open Font License 1.1 (licence files included).
- `brand/`: the official Lorestone Games logos (banner, scene, dark logo, round emblem, one-colour logo).
- `img/icon-32.png` and `img/icon-180.png`: browser icons made from the round emblem.
- `img/hero-backdrop.svg`: the vector hero backdrop. `brand/lorestone-logo-transparent.*`: the official logo with its black background removed (keyed from lorestone-logo-dark), shown over the backdrop at no more than its natural size.
- `img/js-*.jpg`: real JournalScape screenshots in different themes (tools/showcase-shots.cjs in the app repo).

## Custom domain

The site is live at https://lorestonegames.com/ (set 12 November 2026). DNS at Porkbun:

1. Add the Porkbun DNS records:
   - **A records for `lorestonegames.com`:** 185.199.108.153, 185.199.109.153, 185.199.110.153 and 185.199.111.153.
   - **CNAME for `www`:** lorestone-games.github.io
   - Keep the existing `journalscape` CNAME.
2. Add a `CNAME` file containing `lorestonegames.com` and set the custom domain in the repository Pages settings. Turn on HTTPS once the certificate is issued.

Once the custom domain is set, GitHub serves this organization's project sites that have no domain of their own under lorestonegames.com instead (for example, `lorestone-games.github.io/grovekeeper/` becomes `lorestonegames.com/grovekeeper/`). Move or give those sites their own domain first.
