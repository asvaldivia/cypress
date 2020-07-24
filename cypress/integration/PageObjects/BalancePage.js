/// <reference types="Cypress" />
class BalancePage{


    visit() {

        cy.visit("http://localhost:27246/Billeteras/Balance")

    }

    getSource(){

        return cy.get('.body-content');
    }
  
    clicOtraTransaccion(){
        cy.get('#otra_transaccion > a').click()

    }

    clicHistoricoTransacciones(){
        cy.get('#historico_transacciones > a').click()

    }

}

export default BalancePage