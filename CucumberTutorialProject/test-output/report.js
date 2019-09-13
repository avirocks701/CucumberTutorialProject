$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/main/java/features/deals.feature");
formatter.feature({
  "line": 1,
  "name": "Deals",
  "description": "",
  "id": "deals",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Create New Deal",
  "description": "",
  "id": "deals;create-new-deal",
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
  "name": "Users enters username and password list",
  "rows": [
    {
      "cells": [
        "avirocks701@gmail.com",
        "Crm@1234"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_already_available_on_CRM_Home_Page()"
});
formatter.result({
  "duration": 18724673545,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.title_of_page_is_verified()"
});
formatter.result({
  "duration": 19381374,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.users_enters_username_and_password_list(DataTable)"
});
formatter.result({
  "duration": 533983859,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 81950895,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_is_on_home_page()"
});
formatter.result({
  "duration": 832283375,
  "status": "passed"
});
});