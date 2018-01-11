Prerequisites : 
<br />
1) Node.js : Protractor is a Node.js program. So we need to install Node.js before installing protractor.<br />
2) Jasmine : Protractor uses Jasmine Framework by default. It is not needed to install Jasmine separately.<br />
3) Java Development Kit (JDK) : For running selenium Standalone server it is needed to install JDK.<br />
4) Google Chrome version must be >= 62.0.3203.0

<br />
To run the application, please follow below steps<br />
Step 1) Open your command prompt and type command "$ npm install protractor-angular-screenshot-reporter --save-dev" <br />
 Step 2) Open command prompt and type "sudo npm install -g protractor" and hit Enter.<br />
Step 3) Check the installation and version using "protractor --version."<br />
Step 4) Update web driver manager using "sudo webdriver-manager update"<br />
Step 5) Start Selenium Server in a new terminal by typing "webdriver-manager start". This will start the selenium server. Make sure it is up all the time<br />
Step 6) Run the protractor from your project root folder using "protractor conf.js"<br />

