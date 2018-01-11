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
    it("Login",function(){
          var wrong_username="abcd";
          var wrong_pass="123";
          var un="GJ";
          var pass="123456";
          element(By.xpath(".//*[@id='username']")).sendKeys(wrong_username);
          element(By.xpath(".//*[@id='password']")).sendKeys(wrong_pass);
          element(By.xpath(".//*[@class='btn btn-primary']")).click();

          element(By.xpath(".//*[@id='username']")).clear();
          element(By.xpath(".//*[@id='password']")).clear();

          element(By.xpath(".//*[@id='username']")).sendKeys(un);
          element(By.xpath(".//*[@id='password']")).sendKeys(pass);

          element(By.xpath(".//*[@class='btn btn-primary']")).click();
          browser.sleep(2000);
    });
  });
