# GitHub Pages Deployment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deploy the Next.js portfolio to the repository's GitHub Pages root URL.

**Architecture:** Next.js generates a fully static site in `out/`. A GitHub Actions workflow builds that artifact on pushes to `main` and deploys it with GitHub's Pages actions.

**Tech Stack:** Next.js 14, npm, GitHub Actions, GitHub Pages

---

### Task 1: Configure static export

**Files:**
- Create: `.gitignore`
- Modify: `next.config.mjs`

- [ ] Add `output: "export"` and `images.unoptimized: true` to the Next.js configuration.
- [ ] Ignore `node_modules/`, `.next/`, `out/`, and common local environment files.
- [ ] Run `npm ci` and `npm run build`; expect exit code 0 and an `out/index.html` file.

### Task 2: Add GitHub Pages deployment

**Files:**
- Create: `.github/workflows/deploy-pages.yml`

- [ ] Add a workflow triggered by pushes to `main` and manual dispatch.
- [ ] Grant `contents: read`, `pages: write`, and `id-token: write` permissions.
- [ ] Build with Node.js 20 and `npm ci`, upload `out/`, and deploy it using the official Pages actions.
- [ ] Inspect the generated artifact and run `git diff --check`.

### Task 3: Publish

- [ ] Commit the complete portfolio and deployment configuration.
- [ ] Push `main` to `origin`.
- [ ] Verify the remote branch contains the pushed commit.
