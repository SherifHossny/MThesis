//Създаване на тестови сценарий в Cypress
describe("Bank Accounts", function () {

    //Създаване на тестови случай в Cypress
      it("deletes a bank account", function () {
        
    // Стъпки за влизане на потребител
    // Навигиране до нужният уеб адрес.
        cy.visit('http://localhost:3000/signin');
    
        
    //Потвърждаване, че потребителя се намира на нужната страница
            cy.get('[data-test="signin-title"]').should("be.visible").and("contain", "Sign in");
    
        //Попълване на логин формата с валидни данни
        cy.get('#username').type('SH_H')
        cy.get('#password').type('Hossny')
    
        //Кликане на бутона за изпращане на заявка с попълнената логин форма
        cy.contains('Sign In').click()
    
        //Проверка дали след успешно влизане потребителят е пренасочен към правилната страница 
        cy.location("pathname").should("equal", "/");
              
        //Кликане върху бутона “Bank Accounts” в страничното меню
        cy.get('[data-test="sidenav-bankaccounts"]').click();
    
        //Кликане на бутона “Delete” на първият активен акаунт в списъка
        cy.get('[data-test="bankaccount-delete"]').first().click();
    
        //Потвърждаване, че акаунта е изтрит (При изтриване акаунта остава в списъка, но към него се добавя думата "Deleted"
        cy.get('[data-test*="list-item"]').children().contains("Deleted");
        
    
      });  
    });  
    