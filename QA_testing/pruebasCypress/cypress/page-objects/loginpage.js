/// <reference types="cypress" />

export class LogInPage{

    insertUsername(user){
        cy.get('#username').type(user)
    }

    insertPassword(pass){
        cy.get('#password').type(pass)
    }

    clickLoginButton(){
        cy.get('.fa').click()
    }

}