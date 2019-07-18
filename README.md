# Apache NiFi Flow Design System

The Apache NiFi Flow Design System is an atomic reusable platform for providing a consistent set of UI/UX components for open source friendly web applications to consume. Users can interact with this design system by running the demo application locally or by visiting: [https://apache.github.io/nifi-fds/](https://apache.github.io/nifi-fds/).

The demo application serves 2 main purposes
* As a way for code reviewers to validate code changes and `@nifi-fds/core` releases. 
* Provides a working example of how an Angular application should leverage `@nifi-fds/core`.

## Requirements
This project requires npm version 5.6.0.

## Quick Start
For developers not interested in building the FDS NgModule you can use **npm** to install the distribution files.

```bash
npm install @nifi-fds/core --save
```

#### ES6
```javascript
import { NgModule } from '@angular/core';
import { FdsCoreModule } from '@nifi-fds/core';

function AppModule() {}

AppModule.prototype = {
    constructor: AppModule
};

AppModule.annotations = [
    new NgModule({
        imports: [
            FdsCoreModule,
            ...
        ],
        ...
    })
...
```

#### Style and Theming
NiFi FDS is a themeable UI/UX component platform. To customize the core FDS components create a simple Sass file that defines your primary, accent, and warn palettes and passes them to mixins that output the corresponding styles. A typical theme file will look something like this:

```sass
// Include the base styles and mixins for Nifi FDS core
@import 'platform/core/common/styles/flow-design-system';

//Change these
$primaryColor: $rose1;
$primaryColorHover: $rose2;
$accentColor: $blue-grey1;
$accentColorHover: $blue4;

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

You don't have to use Sass to style the rest of your application but you will need to compile this file and include the corresponding style sheet in the head of the HTML document:

```html
<link rel="stylesheet" href='node_modules/@nifi-fds/core/common/styles/css/flow-design-system.min.css'/>
```

_NOTE: The theme file may be concatenated and minified with the rest of the application's CSS._

#### Overriding font files path
Optionally you can override the font file paths if you want your font files to be served from a different location.

```sass
$fdsFontPath: '/path/to/font/files';
```

#### Developing
Developers can perform code changes and automatically build this project using **npm** and **webpack** from the root directory via:

```bash
npm run watch 
```

#### Building
_NOTE: Building depends on `bash` scripts found in the `scripts` folder. Therefore, building on Windows is not supported at this time._

Full builds are also available using **npm** from the root directory via:

```bash
npm run clean:install
```

or to build without running unit tests run:

```bash
npm run clean:install:skipTests
```

_NOTE: Full builds for this project assume a 2 stage build but it only completes the first stage for you. In the first stage all of the assets for the project are copied into the `target/frontend-working-directory`, tested, and bundled/minified/obfuscated. It is up to the consumer of this project to integrate the second stage to include the produced index.html and optimized assets files into any deployable archive of their choosing._

#### Running full builds locally
Once built you can start the application from the `target/frontend-working-directory` directory via:

```bash
cd target/frontend-working-directory
npm start
```

The demo application should now be available at: [http://127.0.0.1:28080/](http://127.0.0.1:28080/). The port may differ if there is a conflict on 28080. See the output of the start command for the available URLs.

## Contact us!
The developer mailing list (dev@nifi.apache.org) is monitored pretty closely, and we tend to respond quickly.  If you have a question, don't hesitate to shoot us an e-mail - we're here to help! Unfortunately, though, e-mails can get lost in the shuffle, so if you do send an e-mail and don't get a response within a day or two, it's our fault - don't worry about bothering us. Just ping the mailing list again.

## Documentation
* [Contributing Guidelines](docs/CONTRIBUTING.md)
