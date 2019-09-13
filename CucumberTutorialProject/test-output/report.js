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
  "name": "User enters username and password",
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
  "duration": 13599363839,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.title_of_page_is_verified()"
});
formatter.result({
  "duration": 20733911,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_enters_username_and_password()"
});
formatter.result({
  "duration": 586456291,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 109460287,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_is_on_home_page()"
});
formatter.result({
  "duration": 794401695,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Create New Contact",
  "description": "",
  "id": "login;create-new-contact",
  "type": "scenario",
  "keyword": "Scenario"
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
  "name": "User enters firstName and LastName",
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
  "duration": 13641114114,
  "status": "passed"
});
formatter.match({
  "location": "NewContactStepDef.user_navigates_on_contact_screen()"
});
formatter.result({
  "duration": 2665478966,
  "status": "passed"
});
formatter.match({
  "location": "NewContactStepDef.user_clicks_on_New_button()"
});
formatter.result({
  "duration": 410278422,
  "status": "passed"
});
formatter.match({
  "location": "NewContactStepDef.user_enters_firstName_and_LastName()"
});
formatter.result({
  "duration": 1677531046,
  "status": "passed"
});
formatter.match({
  "location": "NewContactStepDef.user_Clicks_on_save_button()"
});
formatter.result({
  "duration": 340637313,
  "status": "passed"
});
});