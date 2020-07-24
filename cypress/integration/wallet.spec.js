/// <reference types="Cypress" />

import BalancePage from './PageObjects/BalancePage'
import OperationPage from './PageObjects/OperationPage'

describe('Wallet Test Suit', function(){

    
    it('Page shows otra transaccion and Historico', function(){

        const BalancePageObject = new BalancePage()

        BalancePageObject.visit()

        BalancePageObject.getSource().contains('Balance')

        BalancePageObject.clicOtraTransaccion()
        
    })

    it('Retiro dinero', function(){
        const OperationPageObject = new OperationPage()

        OperationPageObject.visit()

        OperationPageObject.populateOperacion('retiro')

        OperationPageObject.populateMonto('10')

        OperationPageObject.clicConfirmar()

        const BalancePageObject = new BalancePage()

        BalancePageObject.getSource().contains('Balance')

    })


})

