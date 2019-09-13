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
  "duration": 14993364893,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.title_of_page_is_verified()"
});
formatter.result({
  "duration": 19146708,
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
  "duration": 608337085,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 111904665,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_is_on_home_page()"
});
formatter.result({
  "duration": 844418654,
  "status": "passed"
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
  "duration": 11403475634,
  "status": "passed"
});
formatter.match({
  "location": "NewContactStepDef.user_navigates_on_contact_screen()"
});
formatter.result({
  "duration": 1910893036,
  "status": "passed"
});
formatter.match({
  "location": "NewContactStepDef.user_clicks_on_New_button()"
});
formatter.result({
  "duration": 1219997056,
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
  "duration": 2222478555,
  "status": "passed"
});
formatter.match({
  "location": "NewContactStepDef.user_Clicks_on_save_button()"
});
formatter.result({
  "duration": 382105989,
  "status": "passed"
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
  "duration": 16679132329,
  "status": "passed"
});
formatter.match({
  "location": "NewContactStepDef.user_navigates_on_contact_screen()"
});
formatter.result({
  "duration": 2815431713,
  "status": "passed"
});
formatter.match({
  "location": "NewContactStepDef.user_clicks_on_New_button()"
});
formatter.result({
  "duration": 414754591,
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
  "duration": 1498506876,
  "status": "passed"
});
formatter.match({
  "location": "NewContactStepDef.user_Clicks_on_save_button()"
});
formatter.result({
  "duration": 305982519,
  "status": "passed"
});
});