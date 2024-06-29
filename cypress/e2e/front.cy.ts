describe("Frontend", () => {
  it("connects", () => {
    const url = Cypress.env("FRONTEND_URL");
    cy.visit(url);
  });
  it("creates todo", () => {
    const url = Cypress.env("FRONTEND_URL");
    const text = (new Date()).getTime().toString()
    cy.visit(url);
    cy.get("[data-cy='todo-text']").type(text);
    cy.get("[data-cy='submit']").click();
    cy.get("[data-cy='todo-item-wrapper']").contains(text)
  });

  it("deletes todo", ()=>{
    const url = Cypress.env("FRONTEND_URL")

    const text = (new Date()).getTime().toString()
    cy.visit(url);
    cy.get("[data-cy='todo-text']").type(text);
    cy.get("[data-cy='submit']").click();
    cy.get("[data-cy='todo-item-wrapper']").contains(text).parent().within(

      ()=> {


    cy.get("[data-cy='todo-item-delete']").click();
      }
    ) 




  })
});
