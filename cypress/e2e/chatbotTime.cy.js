
// cypress/integration/enterQuestions.spec.js

import serviceSelect from "../support/Pages/serviceSelect";

describe('Enter time questions in the input field', () => {
    beforeEach(() => {
      // Visit your application page
      cy.visit('https://chatbot.test.nascenia.com/');
    });
    it('JSON file into the input field', () => {
        const selectService = new serviceSelect()
      cy.get("#big-minimized-view").click();
      cy.wait(3000)
  
      cy.get('#user-input').type(selectService.service).type('{enter}')
      cy.wait(3000)
  
      cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > p:nth-child(3) > button:nth-child(2) > span:nth-child(1)").click();
      cy.wait(3000)
  
      cy.fixture('time.json').then((data) => {
        data.forEach((item) => {
          cy.get('#user-input')
            // .clear()
            .type(item.question).type('{enter}')
          cy.wait(3000)
          // cy.get('button#submitButton').click(); 
        });
      });
    });
    it('JSON file into the input field', () => {
        const selectService = new serviceSelect()
      cy.get("#big-minimized-view").click();
      cy.wait(3000)
  
      cy.get('#user-input').type(selectService.service).type('{enter}')
      cy.wait(3000)
  
      cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > p:nth-child(3) > button:nth-child(2) > span:nth-child(1)").click();
      cy.wait(3000)
  
      cy.fixture('time2.json').then((data) => {
        data.forEach((item) => {
          cy.get('#user-input')
            // .clear()
            .type(item.question).type('{enter}')
          cy.wait(3000)
          // cy.get('button#submitButton').click(); 
        });
      });
    });
    it('JSON file into the input field', () => {
        const selectService = new serviceSelect()
      cy.get("#big-minimized-view").click();
      cy.wait(3000)
  
      cy.get('#user-input').type(selectService.service).type('{enter}')
      cy.wait(3000)
  
      cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > p:nth-child(3) > button:nth-child(2) > span:nth-child(1)").click();
      cy.wait(3000)
  
      cy.fixture('time3.json').then((data) => {
        data.forEach((item) => {
          cy.get('#user-input')
            // .clear()
            .type(item.question).type('{enter}')
          cy.wait(3000)
          // cy.get('button#submitButton').click(); 
        });
      });
    });
    it('JSON file into the input field', () => {
        const selectService = new serviceSelect()
      cy.get("#big-minimized-view").click();
      cy.wait(3000)
  
      cy.get('#user-input').type(selectService.service).type('{enter}')
      cy.wait(3000)
  
      cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > p:nth-child(3) > button:nth-child(2) > span:nth-child(1)").click();
      cy.wait(3000)
  
      cy.fixture('time4.json').then((data) => {
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
  