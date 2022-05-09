/// <reference types="cypress" />

export class MenuPage{

    checkNumberElements(units){
        cy.get('ul').find('li').should('have.length', units)
    }
}