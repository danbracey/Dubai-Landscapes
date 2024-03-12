# Dubai-Landscapes

Dubai Landscapes is a portfolio site for Adtrak, based on a fictional landscaping company based in Dubai

[![ESLint](https://github.com/danbracey/Dubai-Landscapes/actions/workflows/ESLint.yml/badge.svg)](https://github.com/danbracey/Dubai-Landscapes/actions/workflows/ESLint.yml)
[![Run Vitest](https://github.com/danbracey/Dubai-Landscapes/actions/workflows/vitest.yml/badge.svg)](https://github.com/danbracey/Dubai-Landscapes/actions/workflows/vitest.yml)

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

## Watch for changes in main.css / Tailwind CSS
(Remove --watch when wishing to build once)
```sh
npx tailwindcss -i ./src/assets/main.css -o ./src/assets/tailwind.css --watch
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
