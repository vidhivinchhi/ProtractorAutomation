// var time1 = require('./timer.js');
// time1.setTime;

var origFn = browser.driver.controlFlow().execute;
browser.driver.controlFlow().execute = function() {
 var args = arguments;

 // queue 100ms wait
 origFn.call(browser.driver.controlFlow(), function() {
   return protractor.promise.delayed(140);
 });

 return origFn.apply(browser.driver.controlFlow(), args);
};
describe("Automation For \n",function(){
    it(" User LogOute",function(){

          element(By.xpath(".//*[@href='#!/login']")).click();
          //browser.sleep(4000);
    });
  });
