describe("Frontend", () => {
  it("connects", () => {
    const url = Cypress.env("FRONTEND_URL");
    cy.visit(url);
  });
  it("creates todo", () => {
    const url = Cypress.env("FRONTEND_URL");
    cy.visit(url);
    cy.get("[data-cy='todo-text']").type("yes");
    cy.get("[data-cy='submit']").click();
  });
});
