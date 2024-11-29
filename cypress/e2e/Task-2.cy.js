describe('Cart Functionalities', () => {
   
    before(()=>{
        // it will execute for only one time before all test cases .
        cy.log("this is before")
    })

    beforeEach(()=>{
        // add a product to cart 
        cy.visit("https://magento.softwaretestingboard.com/");
        cy.get("#search").type("shirt"+"{enter}");
        cy.contains("a","Circe Hooded Ice Fleece").click();
        cy.wait(1000)
        cy.get(".swatch-option.text").contains("M").click();
        cy.get("[aria-label=Purple]").click()
        cy.get("#product-addtocart-button").click();
        cy.wait(3000)
    })

    it("Validate that the user can update products from the shopping cart", ()=>{
        cy.get(".action.showcart").click();
        cy.get(".item-qty").clear().type("2");
        cy.get(".update-cart-item").click();
        cy.wait(3000);
        cy.get(".count").should("contain", "2");
        cy.get(".subtotal").should("contain", "$136.00");
        cy.get(".counter-number").should("contain", "2");

    })

    it("Validate that the user can submit a review on the product page", ()=>{
        cy.get(".data.switch").contains("Reviews").click();
        cy.get("#Rating_3_label").click({ force: true });
        cy.get("#nickname_field").type("majd alaryan");
        cy.get("#summary_field").type("Great Product!");
        cy.get("#review_field").type("The product have excellent quality ");
        cy.get(".action.submit").contains("Submit Review").click();
        cy.wait(3000);
        cy.get("[role=alert]").should("be.visible").and("contain","You submitted your review for moderation.");
    })
})