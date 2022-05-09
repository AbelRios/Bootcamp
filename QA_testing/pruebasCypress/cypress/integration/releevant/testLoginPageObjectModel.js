/// <reference types="cypress" />

import { MainPage } from "../../page-objects/mainpage.js";
import { LogInPage } from "../../page-objects/loginpage";
import { SecureAreaPage } from "../../page-objects/secureareapage.js";

describe('tests de login', () => {

    const mainpage = new MainPage;
    const loginpage = new LogInPage;
    const secureareapage = new SecureAreaPage;

    beforeEach(() => {

        mainpage.navigateMainPage()
        mainpage.clickFormAuthentication()

    })

    it('check valid login', () => {

        loginpage.insertUsername("tomsmith");
        loginpage.insertPassword("SuperSecretPassword!");
        loginpage.clickLoginButton();
        secureareapage.checkFlashMessage("You logged into a secure area!");

    })

    it('check invalid login wrong password', () =>{

        loginpage.insertUsername("invalido");
        loginpage.insertPassword("SuperSecretPassword!");
        loginpage.clickLoginButton();
        secureareapage.checkFlashMessage("Your username is invalid!");

    })

    it('check invalid login wrong password', () => {

        loginpage.insertUsername("tomsmith");
        loginpage.insertPassword("invalido");
        loginpage.clickLoginButton();
        secureareapage.checkFlashMessage("Your password is invalid!");

    })
    
})