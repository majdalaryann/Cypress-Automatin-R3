import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given("The user navigate to magento website", ()=>{
    cy.visit("https://magento.softwaretestingboard.com/");
});

When("The user clicks on what's new link in navigation menu", ()=>{
    cy.get('.level0.nav-1').contains("a", "What's New").click();
});
Then("The Categories in New in women's section are available", ()=>{
   cy.get(".categories-menu").find('.items').first().find("li a").then((categories)=>{
        for (let i = 0; i < categories.length; i++) {
            cy.wrap(categories[i]).invoke('text').then((categoriesName)=>{
                cy.log(categoriesName);
        });
    };
});
});