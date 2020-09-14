# Valet Dashboard Development


## Compiling Scss

Install the following node mdules (npm) for compiling the SCSS.

**Install node modules globally:** `npm install -g browser-sync gulp-cli`

**Install node modules in the same directory this readme file resides in:**

`yarn add browser-sync fibers gulp gulp-notify gulp-dart-sass gulp-sourcemaps --dev`


## Linting

We'll also be linting our SCSS and Javascript in order to produce well written and consistent code.

**Install node modules in the same directory this readme file resides in:**

`yarn add stylelint stylelint-config-sass-guidelines stylelint-config-standard standard --dev`

Required lint files (already part of this repo):

- .eslintrc.json
- .stylelint.json
- .stylelintignore

### Editor

**Sublime:** install the following packages using package control:

- SublimeLinter
- SublimeLinter-contrib-standard
- SublimeLinter-eslint
- SublimeLinter-stylelint

**VS Code:** install the following extensions:

Workspace setting should be located in the root of this project's repo: `/.vscode/settings.json`

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
