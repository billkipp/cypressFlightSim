

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

    //cy.visit("https://flightsim.to/by-country/US/search/mckinney");
    cy.visit("/");

    cy.contains("Sceneries", { matchCase: false })
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
  
    
   cy.get('#search').closest('form').submit();

    cy.get('div.tile-grid.results')
      .children()
      .should('have.length', 0);


  });


});
