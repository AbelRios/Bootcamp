/// <reference types="cypress" />

//Chequeamos que el login es correcto
it ('check valid login', () => {

    cy.visit('https://the-internet.herokuapp.com/')
    //cy.get(':nth-child(21) > a').click()
    cy.contains('Form Authentication').click() //hace click en la parte que queremos
    cy.get('#username').type('tomsmith') //introduce nombre de usuario 'tomsmith'
    cy.get('#password').type('SuperSecretPassword!') // introduce contraseña 'SuperSecretPassword!'
    cy.get('.fa').click() // hace click en 'Log in?
    cy.get('#flash').contains('You logged into a secure area!') // Chequea que nos sale el mensaje de ingreso correcto

})

// Chequeando que el mensaje de error de contraseña incorrecta es el adecuado
it ('check invalid login wrong password', () => {

    cy.visit('https://the-internet.herokuapp.com/')
    //cy.get(':nth-child(21) > a').click()
    cy.contains('Form Authentication').click()
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('pass!')
    cy.get('.fa').click()
    cy.get('#flash').contains('Your password is invalid!')

})

// Chequeamos que el mensaje de error de username es el adecuado
it ('check invalid login wrong username', () => {

    cy.visit('https://the-internet.herokuapp.com/')
    //cy.get(':nth-child(21) > a').click()
    cy.contains('Form Authentication').click()
    cy.get('#username').type('NombreFalso')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.fa').click()
    cy.get('#flash').contains('Your username is invalid!')

})