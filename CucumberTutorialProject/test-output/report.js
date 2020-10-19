$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/main/java/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login to CRM",
  "description": "",
  "id": "login;login-to-crm",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User already available on CRM Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of page is verified",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Users enters \"avirocks701@gmail.com\" and \"Crm@1234\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_already_available_on_CRM_Home_Page()"
});
formatter.result({
  "duration": 12674930800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.title_of_page_is_verified()"
});
formatter.result({
  "duration": 12726100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "avirocks701@gmail.com",
      "offset": 14
    },
    {
      "val": "Crm@1234",
      "offset": 42
    }
  ],
  "location": "LoginStepDef.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 296504600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 72977900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_is_on_home_page()"
});
formatter.result({
  "duration": 876731000,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003cC[]RM\u003e but was:\u003cC[ogmento C]RM\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepDefinitions.LoginStepDef.user_is_on_home_page(LoginStepDef.java:54)\r\n\tat ✽.Then User is on home page(./src/main/java/features/login.feature:9)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Create New Contact",
  "description": "",
  "id": "login;create-new-contact",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "User is navigated to home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User navigates on contact screen",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User clicks on New button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User enters \"\u003cFirstName\u003e\" and \"\u003cLastName\u003e\" and title",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User Clicks on save button",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "login;create-new-contact;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName"
      ],
      "line": 20,
      "id": "login;create-new-contact;;1"
    },
    {
      "cells": [
        "Cont3",
        "Cont3"
      ],
      "line": 21,
      "id": "login;create-new-contact;;2"
    },
    {
      "cells": [
        "Cont4",
        "Cont4"
      ],
      "line": 22,
      "id": "login;create-new-contact;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Create New Contact",
  "description": "",
  "id": "login;create-new-contact;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "User is navigated to home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User navigates on contact screen",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User clicks on New button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User enters \"Cont3\" and \"Cont3\" and title",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User Clicks on save button",
  "keyword": "Then "
});
formatter.match({
  "location": "NewContactStepDef.user_is_navigated_to_home_page()"
});
formatter.result({
  "duration": 10419119000,
  "status": "passed"
});
formatter.match({
  "location": "NewContactStepDef.user_navigates_on_contact_screen()"
});
formatter.result({
  "duration": 1574854700,
  "status": "passed"
});
formatter.match({
  "location": "NewContactStepDef.user_clicks_on_New_button()"
});
formatter.result({
  "duration": 209210400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cont3",
      "offset": 13
    },
    {
      "val": "Cont3",
      "offset": 25
    }
  ],
  "location": "NewContactStepDef.user_enters_firstName_and_LastName(String,String)"
});
formatter.result({
  "duration": 20171052200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027first_name\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.75)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027AVINASH-LAPTOP-\u0027, ip: \u0027192.168.0.11\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d86.0.4240.22 (398b0743353ff36fb1b82468f63a3a93b4e2e89e-refs/branch-heads/4240@{#378}), userDataDir\u003dC:\\Users\\Avinash\\AppData\\Local\\Temp\\scoped_dir12508_1473353684}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dXP, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:57707}, acceptInsecureCerts\u003dfalse, browserVersion\u003d86.0.4240.75, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 671ec39619681844e5e7fd3ca8076233\n*** Element info: {Using\u003dname, value\u003dfirst_name}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:494)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat stepDefinitions.NewContactStepDef.user_enters_firstName_and_LastName(NewContactStepDef.java:45)\r\n\tat ✽.Then User enters \"Cont3\" and \"Cont3\" and title(./src/main/java/features/login.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "NewContactStepDef.user_Clicks_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 22,
  "name": "Create New Contact",
  "description": "",
  "id": "login;create-new-contact;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "User is navigated to home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User navigates on contact screen",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User clicks on New button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User enters \"Cont4\" and \"Cont4\" and title",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User Clicks on save button",
  "keyword": "Then "
});
formatter.match({
  "location": "NewContactStepDef.user_is_navigated_to_home_page()"
});
formatter.result({
  "duration": 10465325000,
  "status": "passed"
});
formatter.match({
  "location": "NewContactStepDef.user_navigates_on_contact_screen()"
});
formatter.result({
  "duration": 1605990100,
  "status": "passed"
});
formatter.match({
  "location": "NewContactStepDef.user_clicks_on_New_button()"
});
formatter.result({
  "duration": 141582400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cont4",
      "offset": 13
    },
    {
      "val": "Cont4",
      "offset": 25
    }
  ],
  "location": "NewContactStepDef.user_enters_firstName_and_LastName(String,String)"
});
formatter.result({
  "duration": 20071979200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027first_name\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.75)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027AVINASH-LAPTOP-\u0027, ip: \u0027192.168.0.11\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d86.0.4240.22 (398b0743353ff36fb1b82468f63a3a93b4e2e89e-refs/branch-heads/4240@{#378}), userDataDir\u003dC:\\Users\\Avinash\\AppData\\Local\\Temp\\scoped_dir8464_106139008}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dXP, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:57778}, acceptInsecureCerts\u003dfalse, browserVersion\u003d86.0.4240.75, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 28087401d67866a4461988b3b840da42\n*** Element info: {Using\u003dname, value\u003dfirst_name}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:494)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat stepDefinitions.NewContactStepDef.user_enters_firstName_and_LastName(NewContactStepDef.java:45)\r\n\tat ✽.Then User enters \"Cont4\" and \"Cont4\" and title(./src/main/java/features/login.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "NewContactStepDef.user_Clicks_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
});