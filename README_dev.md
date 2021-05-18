# Valet Dashboard Development


## Build 🛠

We use [NPM](https://www.npmjs.com) for compiling SCSS to CSS and minifing Javascript.

**Install node modules in the same directory as this readme file.**

`yarn add autoprefixer browser-sync dart-sass mkdirp npm-run-all onchange postcss postcss-cli uglify-js --dev`


**Building**

To hot-reload your browser on SCSS and Javascript changes, setup Browsersync.

- Duplicate file `browsersync-sample.js` and rename it `browsersync.js`.
- Change or add vaules as needed with [Browsersync options](http://www.browsersync.io/docs/options/).
- Then. from the theme directory, run:

`yarn watch`

To watch SCSS changes without hot-reload:

`yarn watch:css`

To watch Javascript changes without hot-reload:

`yarn watch:js`


## Linting 🧼

We'll also be linting our SCSS and Javascript in order to produce well written and consistent code.

**Install node modules in the same directory as this readme file.**

`yarn add standard stylelint stylelint-config-sass-guidelines stylelint-config-standard --dev`

Required lint files (should be added during initial theme setup):

- .eslintrc.json
- .stylelint.json
- .stylelintignore

To do a global lint on the SCSS files run: `npx stylelint "scss/**/*.scss"`. To fix found errors add the `--fix` flag.

**Sublime:** install the following packages using package control:

- SublimeLinter
- SublimeLinter-contrib-standard
- SublimeLinter-eslint
- SublimeLinter-stylelint

**VS Code:** install the following extensions:

Workspace seeting should be located in the root of this project's repo: `/.vscode/settings.json`

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
