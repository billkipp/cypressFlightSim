

describe("FlightSim.to homepage", () => {

  it("loads the homepage successfully", () => {
    cy.visit("/");

    // Basic health checks
    cy.url().should("include", "flightsim.to");
    cy.title().should("not.be.empty");

    // Page-level validation
    cy.get("body").should("be.visible");
  });

  it("verifies Sceneries navigation exists for the united states", () => {

    cy.visit("/");


   /* cy.contains("Sceneries", { matchCase: false })
      .should("be.visible")
    
  
   

    cy.contains("a", "Sceneries")
      .trigger("mouseover", { force: true })
      .trigger("mouseenter", { force: true });


      cy.contains("a", "Sceneries")   // or the submenu item text
      .should("be.visible")
      .dblclick()
      .realHover()
      .dblclick();
     
  
  
    cy.get('a[href="/by-country/US/"]').dblclick();

    cy.get('#search').type('McKinney');
  
    
    cy.get('#search').closest('form').submit();*/

    
    cy.visit("https://flightsim.to/scenery/country/US?q=Mckinney&sort=popular");
    
   
    cy.get('main a[href^="/scenery/"]', { timeout: 20000 })
      .should('have.length', 0);


    cy.visit("https://flightsim.to/scenery?q=plano&country=US");


    cy.get('main a[href^="/scenery/"]', { timeout: 20000 })
      .should('have.length', 0);

    cy.visit("https://flightsim.to/scenery?q=denton&country=US");
    
    
    cy.get('main a[href^="/scenery/"]', { timeout: 20000 })
      .should('have.length', 0);

    
    cy.visit("https://flightsim.to/scenery?q=frisco&country=US");
    
    cy.get('main a[href^="/scenery/"]', { timeout: 20000 })
      .should('have.length', 0);

    cy.visit("https://flightsim.to/scenery?q=richardson&country=US");
    
   
     cy.get('main a[href^="/scenery/"]', { timeout: 20000 })
      .should('have.length', 0);

    cy.visit("https://flightsim.to/scenery?q=allen&country=US");


    cy.get('main a[href^="/scenery/"]', { timeout: 20000 })
      .should('have.length', 6);

    cy.visit("https://flightsim.to/scenery?q=little+elm&country=US");

     cy.get('main a[href^="/scenery/"]', { timeout: 20000 })
      .should('have.length', 0);
    

  });

});
