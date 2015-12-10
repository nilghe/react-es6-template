# React App Template
A simple reactjs app template for single page apps. Use this to get up and running in 5 minutes. Using altjs for the flux architecture in reactjs. Gulpjs as the build tool. 

## Quick start
```bash
$ npm install
$ gulp build
$ gulp webserver
```

## Dependencies
* [sass](http://sass-lang.com/install)
* [reactjs](https://facebook.github.io/react/)
* [gulpjs](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
* [altjs](http://alt.js.org/)

# Usage

## Gulp Commands
* `build` - compile the entire project into the `/dist` folder
* `watch` - watch the `scss` and `jsx` files for changes
* `webserver` - create a simple live reload web server for testing
* `sass` - compile sass files
* `browserify` - transform and bundle all `jsx` and `es6` into `es5` syntax
* `js-vendor` - bundle all vendor js files into a single `vendor.min.js`
