# MICRO-ONE · Hugo website

A complete, responsive English-language site for the MICRO-ONE planning initiative. Includes homepage, project/about, objectives, consortium, work plan, contact, sources/status and a custom 404 page. Original templates, local CSS/JavaScript and an original SVG surveillance workflow; no external theme, package installation, fonts, tracking or image services.

## Run locally

Install [Hugo](https://gohugo.io/installation/) **0.161.1 or later**. Standard Hugo is sufficient; Extended also works. This project was built with Hugo 0.161.1. No Node.js, Go modules or theme downloads are required.

From this folder:

```sh
hugo server --disableFastRender
```

Open the local URL printed by Hugo (normally http://localhost:1313). Stop with Ctrl+C.

Build production files:

```sh
hugo --gc --minify --panicOnWarning
```

Output is in `public/`. Serve it with a web server rather than opening HTML directly, because the site uses directory URLs. For example:

```sh
python3 -m http.server 8080 --directory public
```

## Deploy to GitHub Pages

The `.github/workflows/hugo.yml` workflow follows the GitHub Pages approach used for `medbioinfo.se`. It builds with pinned Hugo 0.161.1 and deploys on every push to `main`, or through the manual Actions button. No Node.js, Sass, external themes or additional project packages are needed.

1. Create `samuelflores/micro-one-web` on GitHub and push this folder's source to its `main` branch.
2. In repository **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions** before the first workflow run.
3. Follow the **Deploy Hugo site to GitHub Pages** run under **Actions**. When it succeeds, visit https://samuelflores.github.io/micro-one-web/.
4. Subsequent pushes to `main` rebuild and publish automatically. Changes on other branches are not published.

The configured `baseURL` is `https://samuelflores.github.io/micro-one-web/`. The workflow uses the actual URL returned by GitHub Pages, preserving the project subpath. If the repository name or owner changes, update `baseURL` too. No custom domain is configured.

The repository must have access to Pages and GitHub Actions. Public repositories can use GitHub Pages on GitHub Free; private repository Pages requires a supported paid plan. Review the public source and page content before publication. The supplied grant documents and proposal draft are **not** part of this repository.

Documentation: [GitHub Pages publishing sources](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) and [Hugo deployment to GitHub Pages](https://gohugo.io/host-and-deploy/deploy-to-github-pages/).

## Deploy to GitLab Pages

The included `.gitlab-ci.yml` targets **GitLab 17.9+** with Pages enabled and a Linux **amd64 Docker runner**. It downloads the pinned Hugo 0.161.1 standard binary into the ephemeral runner, builds the site and publishes `public/`. The runner needs outbound access to GitHub releases. For an ARM runner, change the download suffix to `linux-arm64`.

1. Create a GitLab repository and put the **contents of this folder**, including `.gitlab-ci.yml`, at its root. Do not nest the Hugo project below the repository root.
2. Set `baseURL` in `hugo.toml` to the final absolute site URL, ending in `/`. Initially it is the non-production placeholder `https://example.org/`.
3. Commit and push the source to the repository's default branch. CI publishes only that branch. GitLab's `CI_PAGES_URL` overrides the config during deployment, handling a Pages project subpath or unique domain automatically.
4. Follow the job in **Build → Pipelines**, then use the deployment URL shown under **Deploy → Pages**. UI labels may differ by GitLab version. Ensure Pages is enabled by your GitLab administrator on self-managed instances.
5. For a custom domain, configure DNS, TLS and the domain in GitLab Pages, update `hugo.toml`, and supply the intended absolute URL to `--baseURL` in CI if it differs from `CI_PAGES_URL`. Rebuild after a URL change to update canonicals and the sitemap.

Only source files need committing. `public/` and generated Hugo files are ignored. Deployment requires your own GitLab repository and runner; no remote deployment has been performed or verified as part of this delivery.

Deployment setup follows [Hugo's GitLab guide](https://gohugo.io/host-and-deploy/deploy-to-gitlab-pages/) and [GitLab's Pages documentation](https://docs.gitlab.com/user/project/pages/), using the current [`pages.publish` syntax](https://docs.gitlab.com/ci/yaml/).

## Edit content and appearance

- `content/*.md`: inner-page text and metadata.
- `layouts/index.html`: homepage content and composition.
- `layouts/partials/`: navigation and footer.
- `static/css/site.css`: palette, typography, responsive and print layouts.
- `static/images/one-health.svg`: original proposed surveillance workflow, not scientific data.
- `hugo.toml`: title, site description, base URL and optional `params.contactEmail`.

Set `contactEmail` only to a verified address with permission to publish it. This reveals an email link on the contact page; there is no form backend. Revise the contact-page explanation when a real project channel is added. The no-JavaScript fallback keeps navigation visible; JavaScript enhances it with a mobile menu, expanded state and Escape support.

## Evidence and project scope

Content has been revised against the supplied Vinnova application (`proof.pdf`), decision letter (`Beslutsmeddelande.pdf`) and Horizon Europe Part B draft (`MICRO-ONE-PartB-Draft.2.docx`), with the project lead’s clarification that surveillance is the central focus. The documents are not included in this project or exposed as downloads.

The website focuses on metagenomic monitoring of soil, water and animals for livestock disease threats entering Europe, antimicrobial resistance and zoonoses. The wider application also addresses livestock microbiome interventions and sustainability. `content/sources.md` records source sections and verified PDF page references.

The decision dated 11 November 2026 confirms a Vinnova planning-grant award, reference 2026-03720, total maximum SEK 499,980, for 7 November 2026 to 28 September 2027. This is an award, not confirmation of disbursement. The site distinguishes funded consortium/proposal preparation from the proposed future research. No Horizon Europe award or operational surveillance network is claimed.

The work-plan page now follows the application’s **five** planning work packages, with the dates on pp. 8–19. These are planned activities, not completed milestones. The only institutions named are **SLU and Karolinska Institutet**, as requested by the project lead; other draft participants are not listed.

Before public use, confirm any subsequent amendments to the award or schedule, approved institutional wording and a public project contact. Keep future research and expected benefits distinct from demonstrated results. Add an appropriate rights licence if desired. No institutional logos are included.

## Checks and accessibility

Delivery checks include warning-free production builds at both the domain root and `/micro-one/`, plus internal-page, asset, anchor and document-structure checks. Desktop and mobile browser previews have also been inspected. The GitLab runner itself has not been executed here.

The templates include semantic landmarks, a skip link, keyboard focus styles, an accessible mobile-menu button, current-page markers, responsive layouts, reduced-motion support and a descriptive SVG image alternative. No-JavaScript navigation remains available. These measures are not a formal accessibility certification.

## Files and reuse

No third-party images, fonts, logos or theme assets are bundled. Institution names are informational and do not imply endorsement. No software/content licence or institutional ownership claim has been invented; add an appropriate licence once the rights holder has chosen one.
