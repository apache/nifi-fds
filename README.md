# Apache NiFi Fluid Design System

The Apache NiFi Fluid Design System module is an atomic reusable platform providing consistent set of UI/UX components for open source friendly web applications to consume. Checkout the demo web application on the `gh-pages` branch to see a complete example of an Angular application that leverages this NGModule. This demo application allows users to interact with and provides sample code for the available UI/UX components: [https://apache.github.io/nifi-fds/](https://apache.github.io/nifi-fds/).

#### npm

For developers not interested in building the FDS NgModule you can use **npm** to install the distribution files.

```bash
npm install nifi-fds
```

## Setup

Import the **Fluid Design System** NgModule into your angular application:

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

NiFi Fluid Design System UI/UX Platform comes with a base CSS file `node_modules/fluid-design-system/core/common/styles/css/fluid-design-system.min.css` (includes icons).

## Building

Developers can easily build this project using **npm**.

First install or update your local project's **npm** tools:

```bash
npm install
```

Next run:

```bash
npm run build
```

## Testing

Developers can easily test this project using **npm**.

```bash
npm test
```

Or, during development:

```bash
npm run test:dev
```

## Release Managment

For developers with permissions releasing a new version of the NiFi Fluid Design System is simple with [grunt bump](https://github.com/vojtajina/grunt-bump)

## Running the demo locally

For developers that would like to contribute to the demo please checkout the `gh-pages` branch:

```bash
git checkout gh-pages
```

Next, you will need to update the base url. To do this simply edit the index.html file on line 21:

```bash
<base href='/fluid-design-system/'>
```

should be:

```bash
<base href='/'>
```

Finally, start the application:

```bash
npm start
```

The demo application should now be availalbe at: [http://127.0.0.1:8080/](http://127.0.0.1:8080/).

