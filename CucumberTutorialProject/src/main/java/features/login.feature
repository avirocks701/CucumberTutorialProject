Feature: Login

Scenario: Login to CRM

Given User already available on CRM Home Page
When Title of page is verified
Then Users enters "avirocks701@gmail.com" and "Crm@1234"
Then User clicks on login button
Then User is on home page

Scenario Outline: Create New Contact

Given User is navigated to home page
When User navigates on contact screen
Then User clicks on New button
Then User enters "<FirstName>" and "<LastName>" and title
Then User Clicks on save button

Examples:
		|	FirstName	|	LastName	|
		|	Cont3		|	Cont3		|
		|	Cont4		|	Cont4		|