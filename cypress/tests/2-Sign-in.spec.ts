
//Създаване на тестови сценарий в Cypress
describe("User Login", function () {

    //Създаване на тестови случай в Cypress
      it("should allow a visitor to login", function () {
    
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
    
      });
    }); 
    