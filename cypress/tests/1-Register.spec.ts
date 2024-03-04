//Създаване на тестови сценарий в Cypress
describe("User Sign-up ", function () {

    //Създаване на тестови случай в Cypress
 it("should allow a User to sign-up", function () {

// Стъпки за регистрация на потребител
// Навигиране до нужният уеб адрес. В конкретният случай използвам апликация се намира на локален сървър и адреса и е 'http://localhost:3000'

   //Отваряне на началната страница
   cy.visit('http://localhost:3000/signin');

   //Кликане върху бутона за зареждане и отваряне на регистрационната форма
   cy.get('[data-test="signup"]').click();

   //Потвърждаване на отварянето на регистрационната форма
   cy.get('[data-test="signup-title"]').should("be.visible").and("contain", "Sign Up");

   //Попълване на регистрационната форма с валидни данни  
   cy.get('[data-test="signup-first-name"]').type("Sherif");
   cy.get('[data-test="signup-last-name"]').type("Hossny");
   cy.get('[data-test="signup-username"]').type("SH_H");
   cy.get('[data-test="signup-password"]').type("Hossny");
   cy.get('[data-test="signup-confirmPassword"]').type("Hossny");

   //Кликане на бутона за изпращане на заявка с попълнената регистрационна форма
   cy.get('[data-test="signup-submit"]').click();

   //Проверка, че при завършване на регистрацията потребителят е пренасочен към началната страница за да влезе с новосъздаденият профил   
   cy.get('[data-test="signin-title"]').should("be.visible").and("contain", "Sign in");
    });}); 
