

var HtmlReporter = require('protractor-angular-screenshot-reporter');
exports.config = {


  directConnect: true,
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'chromeOptions': { 'args': ['incognito'] },
    browserName: 'chrome'


},

specs: [
           'Open.js',
           'Registration.js',
           'Login.js',
           'Delete.js',
           'LogOut.js'
         ],



  jasmineNodeOpts: {

    showColors: true, // Use colors in the command line report.
    defaultTimeoutInterval: 99000
  },



 framework: 'jasmine2',
 onPrepare: function() {
    global.url = "http://localhost:8080/";
     // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
     jasmine.getEnv().addReporter(new HtmlReporter({
        baseDirectory: 'screenshots'
     }).getJasmine2Reporter());
  }

};
