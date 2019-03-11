$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Testing2.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify Login with Valid Credentials",
  "description": "",
  "id": "login-test;verify-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Launch orange HRM",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters Valid Username \"\u003cUsername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Enters valid password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the User gets onto the Auth Page and  Verifies the title of the page",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "login-test;verify-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 11,
      "id": "login-test;verify-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "admin",
        "admin123"
      ],
      "line": 12,
      "id": "login-test;verify-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 222769,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify Login with Valid Credentials",
  "description": "",
  "id": "login-test;verify-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Launch orange HRM",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters Valid Username \"admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Enters valid password \"admin123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the User gets onto the Auth Page and  Verifies the title of the page",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.launch_orange_HRM()"
});
formatter.result({
  "duration": 8530107655,
  "error_message": "org.openqa.selenium.WebDriverException: timeouts\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:42:22.379Z\u0027\nSystem info: host: \u0027LHTU05CG6503PZB\u0027, ip: \u002710.198.80.254\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 60.2.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:headless: false, moz:processID: 17420, moz:profile: C:\\Users\\bpaul100\\AppData\\L..., moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: XP, platformName: XP, platformVersion: 10.0, rotatable: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}}\nSession ID: a783ce2f-63a1-4c04-916e-9385a1e85326\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:160)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteTimeouts.implicitlyWait(RemoteWebDriver.java:835)\r\n\tat stepdef.Stepdef.launch_orange_HRM(Stepdef.java:38)\r\n\tat ✽.Given Launch orange HRM(Testing2.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 28
    }
  ],
  "location": "Stepdef.user_enters_Valid_Username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 23
    }
  ],
  "location": "Stepdef.enters_valid_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdef.the_User_gets_onto_the_Auth_Page_and_Verifies_the_title_of_the_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 269948,
  "status": "passed"
});
});