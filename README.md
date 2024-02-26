# Basis and Background

The goal of this project is to provide a lightly abstracted layer over a small set of data tools such as:

- S3 Compatible Storage (Cloudflare R2 in this case)
- Key-Value Store/Cache (Redis, or RaaS such as Upstash)
- RDBMS, SQL Provider (such as SQLite or PostgreSQL)

These key components together provide what is functionally a thin/light CMS system. This project ties together some basic primitives that should get you bootstrapped and up and running building a SolidJS application. Think of it like a foundation to build content off of. The primary purpose of this repository is to provide a quick start to using database level tools within the Solid ecosystem, so feel free to tear apart the examples to see how things work (it is encouraged!)


# SolidStart

Everything you need to build a Solid project, powered by [`solid-start`](https://start.solidjs.com);

## Creating a project

```bash
# create a new project in the current directory
npm init solid@latest

# create a new project in my-app
npm init solid@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Solid apps are built with _adapters_, which optimise your project for deployment to different environments.

By default, `npm run build` will generate a Node app that you can run with `npm start`. To use a different adapter, add it to the `devDependencies` in `package.json` and specify in your `vite.config.js`.

## Testing

Tests are written with `vitest`, `@solidjs/testing-library` and `@testing-library/jest-dom` to extend expect with some helpful custom matchers.

To run them, simply start:

```sh
npm test
```
