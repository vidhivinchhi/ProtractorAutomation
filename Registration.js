// var time1 = require('./timer.js');
// time1.setTime;

var origFn = browser.driver.controlFlow().execute;
browser.driver.controlFlow().execute = function() {
 var args = arguments;

 // queue 100ms wait
 origFn.call(browser.driver.controlFlow(), function() {
   return protractor.promise.delayed();
 });

 return origFn.apply(browser.driver.controlFlow(), args);
};


describe("Automation For \n",function(){
    it("Registration",function(){

          //var uname="MG";
          element(By.xpath(".//*[@class='btn btn-link']")).click();
          expect(browser.getCurrentUrl()).toContain("register");
          expect(browser.getCurrentUrl()).toEqual(global.url + "#!/register");

          element(By.xpath(".//*[.='Cancel']")).click();
          element(By.xpath(".//*[@class='btn btn-link']")).click();

          element(By.xpath(".//*[@id='firstName']")).sendKeys("Gagan");
          element(By.xpath(".//*[@id='firstName']")).clear();

          element(By.xpath(".//*[@id='Text1']")).sendKeys("Jaura");
          element(By.xpath(".//*[@id='Text1']")).clear();


          element(By.xpath(".//*[@id='username']")).sendKeys("GJ");
          element(By.xpath(".//*[@id='username']")).clear();


          element(By.xpath(".//*[@id='password']")).sendKeys("123456");
          element(By.xpath(".//*[@id='password']")).clear();


          element(By.xpath(".//*[@id='firstName']")).sendKeys("Gagan");
          element(By.xpath(".//*[@id='Text1']")).sendKeys("Jaura");
          element(By.xpath(".//*[@id='username']")).sendKeys("GJ");
          element(By.xpath(".//*[@id='password']")).sendKeys("123456");
          element(By.xpath(".//*[@class='btn btn-primary']")).click();


          element(By.binding("flash.message")).getText().then(function(text){
           expect(text).toEqual("Registration successful");
            });


           element(By.xpath(".//*[@class='btn btn-link']")).click();
           element(By.xpath(".//*[@id='firstName']")).sendKeys("protractor");
           element(By.xpath(".//*[@id='Text1']")).sendKeys("Test");

           element(By.xpath(".//*[@id='username']")).sendKeys("GJ");
           element(By.xpath(".//*[@id='password']")).sendKeys("123456");
           element(By.xpath(".//*[@class='btn btn-primary']")).click();
           browser.sleep(2000);
           element(By.xpath(".//*[.='Cancel']")).click();



    });
  });
