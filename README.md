# Apache NiFi Flow Design System

The Apache NiFi Flow Design System is an atomic reusable platform for providing a consistent set of UI/UX components for open source friendly web applications to consume. Users can interact with this design system by running the demo-app locally or by visiting: [https://apache.github.io/nifi-fds/](https://apache.github.io/nifi-fds/).

The demo application serves 2 main purposes
* As a way for code reviewers to validate code changes as well as each `@nifi-fds/core` release 
* Provides a working example of how an Angular application should leverage the `@nifi-fds/core`.

## Consumers

For developers not interested in building the FDS NgModule you can use **npm** to install the distribution files. (TBD: awaiting 0.1 release).

```bash
npm install @nifi-fds/core
```

#### Setup

If your project is using the SystemJS module loader, you will need to add `@nifi-fds/core` to the configuration:

```javascript
System.config({
  // existing configuration options
  map: {
    ...,
    '@flow-design-system/core': 'node_modules/@nifi-fds/core/flow-design-system.module.js',
    '@flow-design-system/dialogs': 'node_modules/@nifi-fds/core/dialogs/fds-dialogs.module.js',
    '@flow-design-system/dialog-component': 'node_modules/@nifi-fds/core/dialogs/fds-dialog.component.js',
    '@flow-design-system/dialog-service': 'node_modules/@nifi-fds/core/dialogs/services/dialog.service.js',
    '@flow-design-system/confirm-dialog-component': 'node_modules/@nifi-fds/core/dialogs/confirm-dialog/confirm-dialog.component.js',
    '@flow-design-system/snackbars': 'node_modules/@nifi-fds/core/snackbars/fds-snackbars.module.js',
    '@flow-design-system/snackbar-component': 'node_modules/@nifi-fds/core/snackbars/fds-snackbar.component.js',
    '@flow-design-system/snackbar-service': 'node_modules/@nifi-fds/core/snackbars/services/snackbar.service.js',
    '@flow-design-system/coaster-component': 'node_modules/@nifi-fds/core/snackbars/coaster/coaster.component.js',
    '@flow-design-system/common/storage-service': 'node_modules/@nifi-fds/core/common/services/fds-storage.service.js'
  }
});
```

Next, import the **Apache NiFi Flow Design System** NgModule into your angular application. 

```javascript
var fdsCore = require('flow-design-system/core');
AppModule.prototype = {
    constructor: AppModule
};

AppModule.annotations = [
    new ngCore.NgModule({
        imports: [
            fdsCore,
            ...
        ],
        ...
    })
...
```

#### Style and Theming
The Apache NiFi Flow Design System comes with a base CSS file `node_modules/@nifi-fds/core/common/styles/css/flow-design-system.min.css` (includes icons). This file must be included in the head of the HTML document before the theme file.


NiFi FDS is also a themeable UI/UX component platform. To customize the core FDS components create a simple Sass file that defines your palettes and passes them to mixins that output the corresponding styles. A typical theme file will look something like this:

```sass
@import '../../node_modules/@nifi-fds/core/common/styles/globalVars';
@import '../../node_modules/@nifi-fds/core/theming/all-theme';

//Change these
$primaryColor: $rose1;
$primaryColorHover: $rose2;
$accentColor: $blue7;
$accentColorHover: $grey4;

// Include the base styles for Angular Material core. We include this here so that you only
// have to load a single css file for Angular Material in your app.
@include mat-core;

// Define the palettes
$fds-base-palette: (50: #89df79, 100: $primaryColorHover, 200: #65d550, 300: #53d03b, 400: #46c32f, 500: $primaryColor, 600: $primaryColor, 700: #89df79, 800: #29701b, 900: #215c16, A100: #9be48d, A200: #ade9a2, A400: #bfedb6, A700: #1a4711, contrast: (50: $black-87-opacity, 100: $black-87-opacity, 200: $black-87-opacity, 300: white, 400: white, 500: $white-87-opacity, 600: $white-87-opacity, 700: $white-87-opacity, 800: $white-87-opacity, 900: $white-87-opacity, A100: $black-87-opacity, A200: white, A400: white, A700: $white-87-opacity));
$fds-accent-palette: (50: #89df79, 100: $accentColorHover, 200: #65d550, 300: #53d03b, 400: #46c32f, 500: $accentColor, 600: $accentColor, 700: #89df79, 800: #29701b, 900: #215c16, A100: #9be48d, A200: #ade9a2, A400: #bfedb6, A700: #1a4711, contrast: (50: $black-87-opacity, 100: $black-87-opacity, 200: $black-87-opacity, 300: white, 400: white, 500: $white-87-opacity, 600: $white-87-opacity, 700: $white-87-opacity, 800: $white-87-opacity, 900: $white-87-opacity, A100: $black-87-opacity, A200: white, A400: white, A700: $white-87-opacity));
$fds-warn-palette: (50: #81410f, 100: #D14A50, 200: #af5814, 300: #c66317, 400: #dd6f19, 500: $warnColor, 600: $warnColor, 700: #eea66e, 800: #f1b485, 900: #f4c29b, A100: #ec9857, A200: #89df79, A400: #89df79, A700: #f6d0b2, contrast: (50: $black-87-opacity, 100: $black-87-opacity, 200: $black-87-opacity, 300: white, 400: white, 500: $white-87-opacity, 600: $white-87-opacity, 700: $white-87-opacity, 800: $white-87-opacity, 900: $white-87-opacity, A100: $black-87-opacity, A200: white, A400: white, A700: $white-87-opacity));
$fds-primary: mat-palette($fds-base-palette, 500, 100, 500);
$fds-accent: mat-palette($fds-accent-palette, 500, 100, 500);
$fds-warn: mat-palette($fds-warn-palette, 500, 100, 500);

// Define the theme (Optionally specify a default, lighter, and darker hue.)
$fds-theme: mat-light-theme($fds-primary, $fds-accent, $fds-warn);

// FDS theme mixin
@include fds-theme($fds-theme);
```

You don't have to use Sass to style the rest of your application but you will need to compile this one. Angular CLI, grunt-sass, gulp-sass, and node-sass are all great options; the output of which will be a CSS file that must be included in the head of the HTML document after the base NiFi FDS CSS styles:

```html
<link rel="stylesheet" href='node_modules/@nifi-fds/core/common/styles/css/flow-design-system.min.css'/>
<link rel="stylesheet" href='demo-app/css/fds-demo.min.css'/>
```

NOTE: The theme file may be concatenated and minified with the rest of the application's CSS.

## Developers
The artifacts of the NiFi Flow Design System published to the npm repository are intended to be consumed. For developers interested in contributing to the `@nifi-fds/core` you should use **git** to clone the project:

```bash
git clone https://github.com/apache/nifi-fds.git
```

#### Building

Developers can easily build this project using **npm** from the root nifi-fds directory via:

```bash
npm run clean:install
```

or to build without running unit tests run:

```bash
npm run clean:install:skipTests
```

Developers can speed up development time by skipping the re-installation of all node_modules:

```bash
npm run dev:install
```

or to skip re-installation of node_modules as well as building without running unit tests:

```bash
npm run dev:install:skipTests
```

#### Running locally

Once built you can start the application from the target directory via:

```bash
cd target
npm start
```

The demo application should now be availalbe at: [http://127.0.0.1:8080/](http://127.0.0.1:8080/). The port may differ if there is a conflict on 8080. See the output of the start command for the available URLs.

#### Release Management

For developers with permissions releasing a new version of the NiFi Flow Design System is simple with [grunt bump](https://github.com/vojtajina/grunt-bump).

#### Deploying github.io demo

Before deploying the demo-app to the gh-pages branch please make sure you have the following in your local repo:
 
* Configured the apache git repo as a remote
* Created a local gh-pages branch

```bash
git remote add apache https://git-wip-us.apache.org/repos/asf/nifi-fds.git
git branch -f gh-pages
``` 

Then you can deploy any branch (typically this should be the latest release version) to the nifi-fds github.io from the root nifi-fds directory via:

```bash
git checkout <branch_name>
npm run deploy:ghpages
```

#### npm publish
Developers can easily publish the latest release artifacts to the public npm registry from the root nifi-fds directory via:

```bash
npm run publish
```
NOTE: These artifacts are maintained under the nifi-fds npm organization.
