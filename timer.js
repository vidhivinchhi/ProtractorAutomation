function setTime(){

  var origFn = browser.driver.controlFlow().execute;
  browser.driver.controlFlow().execute = function() {
   var args = arguments;

   // queue 100ms wait
   origFn.call(browser.driver.controlFlow(), function() {
     return protractor.promise.delayed(50000);
   });

   return origFn.apply(browser.driver.controlFlow(), args);
  };

}
module.exports = setTime;
