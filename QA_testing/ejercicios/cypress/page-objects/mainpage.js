/// <reference types="cypress" />

export class MainPage{

    navigateMainPage(){
        cy.visit('https://the-internet.herokuapp.com/')
    }

    clickFormAuthentication(){
        cy.contains('Form Authentication').click()
    }

    clickShiftingContent(){
        cy.contains('Shifting Content').click()
    }
}