# GitHub Pages Deployment Design

## Goal

Publish this Next.js portfolio at `https://thestoryfoundry.github.io/` whenever `main` is pushed.

## Design

- Configure Next.js static export so `npm run build` produces an `out/` directory that GitHub Pages can serve without a Node.js runtime.
- Disable the Next.js image optimization server because it is unavailable on static hosting.
- Use GitHub's official Pages Actions to build, upload, and deploy the `out/` artifact.
- Ignore generated dependency and build directories so they cannot be committed accidentally.

## Validation

Run a clean dependency install and production build, then verify that `out/index.html` and referenced local assets exist. Check the workflow syntax and the final Git diff before committing and pushing.

## Scope

Portfolio content and components remain unchanged. Existing Netlify configuration and duplicate starter files are left intact because removing them is not required for GitHub Pages deployment.
