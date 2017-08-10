# ReactNativeTutorial

A way to share application logic between a React Web app and a React Native app,
while keeping the individual component rendering unique to each platform.


## Technologies Used

  - [React](https://facebook.github.io/react/)
  - [React Native](https://facebook.github.io/react-native/)
  - [Redux](http://redux.js.org/)
  - [Webpack](https://webpack.github.io/)
  - [Babel](https://babeljs.io/)
  - [React Router](https://reacttraining.com/react-router/)

## Directory Structure

`android` houses the Android project files, `ios` houses the iOS project files,
and `web` houses the `webpack` configs and `index.html` (it is also the
destination of our minified bundle).


The reasoning for this is twofold - for one, React Native/React wasn't designed
to be a "write once, run everywhere" framework. Facebook constantly calls it a
"learn once, write everywhere" framework - the idea being that you tailor your
implementation to the platform you're writing for. The second is that React
Native and React are ultimately... different and the code wouldn't be reusable
without some crazy aliases.

## Entry Points

The entry point for the iOS app is `index.ios.js`, for android is
`index.android.js`, and for the web app is `app/web/index.js`.

## Configured Scripts

### Running in dev/production (WebApp)

  1. `git clone https://github.com/embibe/react-redux-tutorial.git`
  1. `cd react-redux-tutorial`
  1. `npm install`
  1. `npm run web-dev`
  
### Running in dev/production (React Native)

  1. `git clone https://github.com/embibe/react-redux-tutorial.git`
  1. `cd react-redux-tutorial`
  1. `react-native upgrade ( only for first time to build android and ios)`
  1. `npm install`
  1. `npm start`
  1. `react-native run-ios (for ios build)`
  1. `react-native run-android (for Android build)`
  
### start

`start` is used when running/bundling the native application. When you open
either the xcode project or the android studio project and hit "run", it
kicks off a node server via the `start` command. Every time you make a
JavaScript change, instead of needing to rebuild and recompile your application,
you simply refresh the app and the changes are magically there.

### bundlin

For `ios-bundle`, `ios-dev-bundle`, `android-bundle`, and `android-dev-bundle`,
the script builds the JavaScript bundle (either minified or not-minified
depending on the presence of `dev` or not), and places it where the
corresponding project expects it to be for running locally on your device.

### Web App

`web-dev` kicks off a webpack server on port 3001, it utilizes hot reloading
with some redux-time-machine-magic to have a crazy awesome dev experience where
you can rewind and revert actions in your application.

`web-bundle` creates a minified JavaScript bundle (that also houses the minified
css) and places it next to the `index.html` in `web/public` that you can serve
with any static file server.

### clear-cache

Every now and then, when React Native is doing it's thing, you'll swear that
you've changed something, but alas it is still causing your app to break! oh
noes! what do we do!

I'm glad you asked! Just run `npm run clear-cache`!

## Further Configuration

Webpack sets the `PLATFORM_ENV` environment variable to be `web`. You can use
this check to conditionally load different files depending on if you're building
your native or web app. For example - you can abstract out the difference
between local storage mechanisms.





