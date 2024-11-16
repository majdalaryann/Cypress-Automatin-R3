/// <reference types = "cypress" />

describe("Task 1", ()=>{
    it("Conduit Logo Header", ()=>{
        cy.visit("/register")
        //cy.get('.navbar-brand').contains('conduit')
        cy.get("[href='#/']").first().contains('conduit')
        
    });

   it("Home Nav Link", ()=>{
    cy.visit("/register")
    cy.get(".nav").children().eq(0).contains("Home")
   });

   it("Sign up Nav Link", ()=>{
    cy.visit("/register")
    cy.get(".nav").children().eq(2).contains("Sign up")
    //cy.get("[href='#/register']").first()
   })

   it("Username field", ()=>{
    cy.visit("/register")
    cy.get("[placeholder=Username]")
   });

   it("Email field", ()=>{
    cy.visit("/register")
    cy.get("[type=email]")
   });

   it("password field", ()=>{
    cy.visit("/register")
    cy.get("[placeholder=Password]")
   });

   it("Sign up button", ()=>{
    cy.visit("/register")
    cy.get("[type=submit]")
   });

   it("Sign up text", ()=>{
    cy.visit("/register")
    cy.get(".text-xs-center").first().contains('Sign up')
   });

   it("Have an account? link", ()=>{
    cy.visit("/register")
    cy.get("[href='#/login']").last()
   });

   it("Conduit Footer", ()=>{
    cy.visit("/register")
    cy.get(".logo-font")
   });

   it("text in footer", ()=>{
    cy.visit("/register")
    cy.get('.container .attribution')
   });
});