/// <reference types="Cypress" />
class OperationPage{


    visit() {

        cy.visit("http://localhost:27246/Billeteras/Create")

    }
  
    clicConfirmar(){
        const button = cy.get('#confirmar')
        button.click()

    }

    populateOperacion(operacion){

        const field = cy.get('#operacion')
        field.clear()
        field.type(operacion)
        return this
    }

    populateMonto(monto){

        const field = cy.get('#monto')
        field.clear()
        field.type(monto)
        return this
    }
 

}

export default OperationPage