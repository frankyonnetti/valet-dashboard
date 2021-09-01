# Valet Dashboard Development


## Build 🛠

We use [NPM](https://www.npmjs.com) for compiling SCSS to CSS and minifing Javascript.

1. **Install node modules globally:** `npm install -g gulp-cli`

2. **Install node modules in the same directory as this readme file.**

`yarn add autoprefixer browser-sync gulp gulp-dart-sass gulp-notify gulp-postcss gulp-sourcemaps gulp-uglify postcss --dev`


**Building**

To hot-reload your browser on SCSS and Javascript changes:

`yarn watch`

To compile SCSS changes without hot-reload:

`yarn styles`

To uglify Javascript changes without hot-reload:

`yarn scripts`


## Linting 🧼

We'll also be linting our SCSS and Javascript in order to produce well written and consistent code.

1. **Install node modules in the same directory as this readme file.**

`yarn add standard stylelint stylelint-config-sass-guidelines stylelint-config-standard --dev`

Required lint files (should be added during initial setup):

- .eslintrc.json
- .stylelint.json
- .stylelintignore

To do a global lint on the SCSS files run: `npx stylelint "assets/scss/**/*.scss"`. To fix found errors add the `--fix` flag.

**Sublime:** install the following packages using package control:

- SublimeLinter
- SublimeLinter-contrib-standard
- SublimeLinter-eslint
- SublimeLinter-stylelint

**VS Code:** install the following extensions:

Workspace seeting should be located in the root of this project's repo: `/.vscode/settings.json`

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
