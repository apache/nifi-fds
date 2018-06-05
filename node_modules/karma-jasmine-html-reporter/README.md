# karma-jasmine-html-reporter

Reporter that dynamically shows tests results at debug.html page.

Jasmine 1.3 is not supported. For Jasmine < 3.0.0, use version 0.2.2

![alt tag](/screenshots/reporter_1.png)

You can also run a describe block, or a single test.

![alt tag](/screenshots/reporter_2.png)

## Installation

The easiest way is to keep `karma-jasmine-html-reporter` as a devDependency in your `package.json`.
```json
{
  "devDependencies": {
    "karma": "~0.10",
    "karma-jasmine-html-reporter": "~0.1"
  }
}
```

You can simply do it by:
```bash
npm install karma-jasmine-html-reporter --save-dev
```

## Configuration
```js
// karma.conf.js
module.exports = function(config) {
  config.set({

    reporters: ['kjhtml']

  });
};
```

You can pass a list of reporters as a CLI argument too:
```bash
karma start --reporters kjhtml
```

## Develop

There's not much to this package.

`adapter.js` and `html.jasmine.reporter.js` are copied with small adjustments from `jasmine/lib/jasmine-core/boot.js` and `jasmine/lib/jasmine-core/jasmine-html.js` respectively.

Just pull over changes from Jasmine as needed.
