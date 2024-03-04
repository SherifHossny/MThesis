
//Създаване на тестови сценарий в Cypress
describe("User Onboarding", function () {

    //Създаване на тестови случай в Cypress
        it("should allow a visitor to onboard", function () {
      
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
    
    
    //Потвърждаване на отварянето на началната страница на онбординг формата
        cy.get('[data-test="user-onboarding-dialog"]').should("be.visible");
        cy.get('[data-test="list-skeleton"]').should("not.exist");
        cy.get('[data-test="nav-top-notifications-count"]').should("exist");
       
        //Кликане на бутона “Next” на началната страница на онбординг формата
        cy.get('[data-test="user-onboarding-next"]').click();
    
    
    //Потвърждаване на отварянето на работната страница на онбординг формата
        cy.get('[data-test="user-onboarding-dialog-title"]').should("contain", "Create Bank Account");
    
        //Попълване на формата с валидни данни
        cy.get('[data-test*="bankName-input"]').type("Burgas Free University Bank");
        cy.get('[data-test*="accountNumber-input"]').type("321321321");
        cy.get('[data-test*="routingNumber-input"]').type("654654654");
       
        //Кликане на бутона “SAVE” на работната страница на онбординг формата
        cy.get('[data-test*="submit"]').click();
    
    //Потвърждаване на отварянето на финалната страница на онбординг формата
        cy.get('[data-test="user-onboarding-dialog-title"]').should("contain", "Finished");
        cy.get('[data-test="user-onboarding-dialog-content"]').should("contain", "You're all set!");
        
        //Кликане на бутона “DONE” на финалната страница на онбординг формата
        cy.get('[data-test="user-onboarding-next"]').click();
    
        //Проверка дали след успешно онбордване потребителят е пренасочен към правилната страница 
        cy.get('[data-test="transaction-list"]').should("be.visible");
       
    
    });
    });
    
    