/// <reference types="cypress" />

export class SecureAreaPage{

    checkFlashMessage(message){
        cy.get('#flash').contains(message)
    }

}