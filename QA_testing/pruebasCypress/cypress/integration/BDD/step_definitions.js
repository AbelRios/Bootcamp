import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps';

import { MainPage } from "../../page-objects/mainpage";
import { LogInPage } from "../../page-objects/loginpage";
import { SecureAreaPage } from "../../page-objects/secureareapage.js";

const mainpage = new MainPage;
const loginpage = new LogInPage;
const secureareapage = new SecureAreaPage;

Given('I navigate main page', () => {
    mainpage.navigateMainPage()
})
When('I click Form Authentication', () => {
    mainpage.clickFormAuthentication()
})
And('I enter username', () => {
    loginpage.insertUsername("tomsmith")
})
And('I enter password', () => {
    loginpage.insertPassword("SuperSecretPassword!")
})
And('I click the Login button', () => {
    loginpage.clickLoginButton()
})
Then('A message appears', () => {
    secureareapage.checkFlashMessage("You logged into a secure area!")
})
