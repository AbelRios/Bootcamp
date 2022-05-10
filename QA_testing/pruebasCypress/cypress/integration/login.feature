Feature: Test de Login

Scenario: Login Válido  

Given I navigate main page
When I click Form Authentication
And I enter username
And I enter password
And I click the Login button
Then A message appears

Scenario: Login Inválido

Given I navigate main page
When I click Form Authentication
And I enter username
And I enter wrong password
And I click the Login button
Then An error message appears