Feature: Login

Scenario: Login to CRM

Given User already available on CRM Home Page
When Title of page is verified
Then User enters username and password
Then User clicks on login button
Then User is on home page

Scenario: Create New Contact

Given User is navigated to home page
When User navigates on contact screen
Then User clicks on New button
Then User enters firstName and LastName
Then User Clicks on save button