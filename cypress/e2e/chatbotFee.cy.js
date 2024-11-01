
// cypress/integration/enterQuestions.spec.js

import serviceSelect from "../support/Pages/serviceSelect";

describe('Enter questions in the input field', () => {
  beforeEach(() => {
    // Visit your application page
    cy.visit('https://chatbot.test.nascenia.com/');
  });

  it('Enter First 50 Data', () => {
    const selectService = new serviceSelect()
    cy.get("#big-minimized-view").click();
    cy.wait(3000)

    cy.get('#user-input').type(selectService.service).type('{enter}')
    cy.wait(3000)

    cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > p:nth-child(3) > button:nth-child(2) > span:nth-child(1)").click();
    cy.wait(3000)

    cy.fixture('feeQuestion.json').then((data) => {
      data.forEach((item) => {
        cy.get('#user-input')
          // .clear()
          .type(item.question).type('{enter}')
        cy.wait(3000)
        // cy.get('button#submitButton').click(); 
      });
    });
  });
  it('Enter Second 50 Data', () => {
    const selectService = new serviceSelect()
    cy.get("#big-minimized-view").click();
    cy.wait(3000)

    cy.get('#user-input').type(selectService.service).type('{enter}')
    cy.wait(3000)

    cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > p:nth-child(3) > button:nth-child(2) > span:nth-child(1)").click();
    cy.wait(3000)

    cy.fixture('feeQuestion2.json').then((data) => {
      data.forEach((item) => {
        cy.get('#user-input')
          // .clear()
          .type(item.question).type('{enter}')
        cy.wait(3000)
        // cy.get('button#submitButton').click(); 
      });
    });
  });
  it('Enter Rest Data', () => {
    const selectService = new serviceSelect()
    cy.get("#big-minimized-view").click();
    cy.wait(3000)

    cy.get('#user-input').type(selectService.service).type('{enter}')
    cy.wait(3000)

    cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > p:nth-child(3) > button:nth-child(2) > span:nth-child(1)").click();
    cy.wait(3000)

    cy.fixture('feeQuestion3.json').then((data) => {
      data.forEach((item) => {
        cy.get('#user-input')
          // .clear()
          .type(item.question).type('{enter}')
        cy.wait(3000)
        // cy.get('button#submitButton').click(); 
      });
    });
  });
});
