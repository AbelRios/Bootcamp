/// <reference types="cypress" />

export class MenuPage{

    check5elements(){
        cy.get('ul').find('li').should('have.length', 5)
    }
}