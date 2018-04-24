# Apache NiFi Fluid Design System

The Apache NiFi Fluid Design System module is an atomic reusable platform providing consistent set of UI/UX components for open source friendly web applications to consume. Users can interact with this design system by running the demo-app locally or by visiting: [https://apache.github.io/nifi-fds/](https://apache.github.io/nifi-fds/). This demo application also provides an example of how an Angular application would leverage the nifi-fds NgModule.

#### npm

For developers not interested in building the FDS NgModule you can use **npm** to install the distribution files. (TBD: awaiting 0.1 release)

```bash
npm install nifi-fds
```

## Setup

Import the **Apache NiFi Fluid Design System** NgModule into your angular application:

```javascript
var fdsCore = require('fluid-design-system/core');
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

## Styles, Icons and Theming

A typical theme file will look something like this:

```javascript
@import '../../platform/core/theming/all-theme';

$primaryColor: #9E737D;
$primaryColorHover: #915D69;
$accentColor: #d0dbe0;
$accentColorHover: #CCCCCC;

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

The Apache NiFi Fluid Design System UI/UX Platform comes with a base CSS file `node_modules/fluid-design-system/core/common/styles/css/fluid-design-system.min.css` (includes icons) that should be included in the head of your HTML document.

## Building

Developers can easily build this project using **npm** from the root nifi-fds directory via:

```bash
npm run clean:install
```

or to run without unit tests run:

```bash
npm run clean:install:skipTests
```

## Developing

Developers can easily skip the re-instalation of node_modules and run unit tests in development mode using **npm**.

```bash
npm run dev:install
```

or to run without unit tests run:

```bash
npm run dev:install:skipTests
```

## Running locally

Once built you can start the application from the target directory via:

```bash
cd target
npm start
```

The demo application should now be availalbe at: [http://127.0.0.1:8080/](http://127.0.0.1:8080/). The port may differ if there is a conflict on 8080. See the output of the start command for the 
available URLs.

## Release Managment

For developers with permissions releasing a new version of the NiFi Fluid Design System is simple with [grunt bump](https://github.com/vojtajina/grunt-bump).

## Deploying github.io demo

The nifi-fds github.io demo can be deployed from the root nifi-fds directory via: (TBD: awaiting 0.1 release)

```bash
npm run deploy:ghpages
```

