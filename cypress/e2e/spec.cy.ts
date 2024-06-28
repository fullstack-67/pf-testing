describe("Backend", () => {
  it("checks env", () => {
    cy.log(JSON.stringify(Cypress.env()));
  });

  it("check get request", () => {
    const url = Cypress.env("BACKEND_URL");
    cy.request({
      method: "GET",
      url: `${url}/todo`,
    }).then((res) => {
      // cy.log(JSON.stringify(res));
      console.log(res);
      expect(res.headers).to.have.property("access-control-allow-origin");
    });
  });
});
