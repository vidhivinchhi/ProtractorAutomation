// var time2 = require('./timer.js');
// time2.setTime;
var origFn = browser.driver.controlFlow().execute;
browser.driver.controlFlow().execute = function() {
 var args = arguments;

 // queue 100ms wait
 origFn.call(browser.driver.controlFlow(), function() {
   return protractor.promise.delayed();
 });

 return origFn.apply(browser.driver.controlFlow(), args);
};
describe("Automation \n",function(){
    it("Open the Application",function(){

          browser.waitForAngularEnabled(false);
          browser.driver.manage().window().maximize();
          browser.get(global.url);
          browser.ignoreSynchronization = true;
          expect(browser.getCurrentUrl()).toContain("login");
          expect(browser.getCurrentUrl()).toEqual(global.url + "#!/login");
    });
  });
