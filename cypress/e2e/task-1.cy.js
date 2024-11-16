/// <reference types = "cypress" />

describe("Task 1", ()=>{
    it("Conduit Logo Header", ()=>{
        cy.visit("https://demo.productionready.io/#/register")
        cy.get('.navbar-brand').contains('conduit')
        
    });

   it("Home Nav Link", ()=>{
    cy.visit("https://demo.productionready.io/#/register")
    cy.get(".nav").children().eq(0).contains("Home")
   });

   it("Sign up Nav Link", ()=>{
    cy.visit("https://demo.productionready.io/#/register")
    cy.get(".nav").children().eq(2).contains("Sign up")
    //cy.get("[href='#/register']").first()
   })

   it("Username field", ()=>{
    cy.visit("https://demo.productionready.io/#/register")
    cy.get("[placeholder=Username]")
   });

   it("Email field", ()=>{
    cy.visit("https://demo.productionready.io/#/register")
    cy.get("[type=email]")
   });

   it("password field", ()=>{
    cy.visit("https://demo.productionready.io/#/register")
    cy.get("[placeholder=Password]")
   });

   it("Sign up button", ()=>{
    cy.visit("https://demo.productionready.io/#/register")
    cy.get("[type=submit]")
   });

   it("Sign up text", ()=>{
    cy.visit("https://demo.productionready.io/#/register")
    cy.get(".text-xs-center").first()
   });

   it("Have an account? link", ()=>{
    cy.visit("https://demo.productionready.io/#/register")
    cy.get("p.text-xs-center")
   });

   it("Conduit Footer", ()=>{
    cy.visit("https://demo.productionready.io/#/register")
    cy.get(".logo-font")
   });

   it("text in footer", ()=>{
    cy.visit("https://demo.productionready.io/#/register")
    cy.get('.container .attribution')
   });





})