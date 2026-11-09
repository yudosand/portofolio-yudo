# Yudo Sandewo Portfolio

Personal portfolio showcasing web and Android development, backend experience,
UI/UX, and selected projects.

**Live website:** [yudosand.github.io/portofolio-yudo](https://yudosand.github.io/portofolio-yudo/)

## Website Stack

- HTML5 and CSS3 for page structure and responsive styling.
- JavaScript for project detail modals and navigation behavior.
- Bootstrap 5.3.3 and Bootstrap Icons 1.11.3, loaded from a CDN.
- Inter typography served through Google Fonts.
- GitHub Pages for static hosting.

Flutter, Laravel, and other technologies mentioned in project descriptions belong
to the showcased applications, not the runtime of this portfolio. This repository
does not contain those applications' source code or private administration systems.

## Local Preview

No package installation or build step is required. With Python 3 available, run
the following from the repository root:

```sh
python -m http.server 8000
```

Open [localhost:8000](http://localhost:8000/). An internet connection is needed for
the existing CDN styles, scripts, icons, and Google Fonts.

## Repository Structure

- `index.html`: portfolio content, navigation, project cards, and modal markup.
- `css/style.css`: responsive styles and visual design.
- `js/portfolio.js`: project modal content and navigation interactions.
- `assets/`: public project images, company logos, favicons, and the approved CV
  in `assets/documents/CV_yudosand.pdf`.
- `img/`: profile imagery, including the active `yudo-profile.webp` portrait.

## Content Maintenance

Keep employment details, project roles, and technology claims evidence-based.
Use public-facing project descriptions and never add credentials, customer or
employee records, private administration URLs, or confidential project details.
Changes to the approved CV require separate review.

Keep local asset URLs relative so they work under the GitHub Pages project path.
Before publishing, check desktop and mobile layouts, navigation, project modals,
the CV download, and asset loading. Review changes before committing or deploying.
