
## FlyBase GitHub Orgnization Website

This repository contains the code that generates the FlyBase
GitHub organization website hosted at https://flybase.github.io/

### Background

This site uses [Gatsbyjs](https://www.gatsbyjs.org/) to produce the documentation.

### Content

Content for this site is generated via two main methods.  Either via a React based
page under `src/pages/` or MD/MDX content under `src/content/`.

MD stands for Markdown and MDX are Markdown files that can use JSX components.

#### Layouts, Header, Footer, CSS, etc.

The `src/components` directory contains most of the React and CSS code that drives the
main page layout.

#### Adding pages

To add content to the site, create a new React component under `src/pages` or
a new MD/MDX file under `src/content`.

Any sub-directories created will be reflected in the URL path.  In other words, 
creating a file called `src/content/chado/queries/index.md` will populate a page
at `https://flybase.github.io/chado/queries/`.

### Commands

List of yarn/npm commands:
 * npm run develop - Starts the developer mode via a local webserver.
 * npm run build   - Builds/compiles the static site.
 * npm run format  - Formats all JS/JSX code under `src` using prettier
 * npm run deploy  - Builds and publishes the static site to the GitHub website.
 

