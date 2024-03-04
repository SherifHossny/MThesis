//Създаване на тестови сценарий в Cypress
describe("Bank Accounts", function () {

    //Създаване на тестови случай в Cypress
      it("creates a new bank account", function () {
    
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
    
        //Тъй като Cypress работи асинхронно се налага да ползвам логиката .then за да взема броя на акаунтите и в последствие да проверя дали се е увеличил след добавянето на нов акаунт 
          cy.get('[data-test*="bankaccount-list-item"]').then(items => {
          let count = items.length;
      
        //Кликане на бутона “Create” в списъка с акаунти
          cy.get('[data-test="bankaccount-new"]').click();
    
        //Проверка дали е отворена правилната страница
          cy.location("pathname").should("eq", "/bankaccounts/new");
    
          //Попълване на формата с валидни данни. Тук използвам променливата, която създадох при преброяването на акаунтите. По този начин името на акаунта ще бъде Master Thesis Account и поредният му номер за да се избегне повторение на имената на банковите акаунти.
    cy.get('[data-test*="bankName-input"]').type("Master Thesis Account"+(count+1));
          cy.get('[data-test*="routingNumber-input"]').type("444555666");
          cy.get('[data-test*="accountNumber-input"]').type("777888999");
    
    //Кликане на бутона “SAVE” във формата
          cy.get('[data-test*="submit"]').click();
      
        //Проверка на добавеният акаунт. Проверява се броят акаунти и дали името на последно добавеният акаунт е това, което се очаква
          cy.get('[data-test*="bankaccount-list-item"]')
            .should("have.length", count + 1)
            .eq(count)
            .should("contain", "Master Thesis Account"+(count+1));
      });});});
     
    