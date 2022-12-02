const URL_LOCAL = Cypress.env("url_local");
const URL_DEV = Cypress.env("url_dev");

describe("File visit", () => {
  it("visti PAX - Local", () => {
    //Arrange
    cy.visit(URL_LOCAL);
    const a = "asdasd";
    //Act

    cy.url().should("eq", URL_LOCAL + "/guest/login");
    //Assert
  });
  it("visti PAX - dev", () => {
    //Arrange
    cy.visit(URL_DEV);
    //Act

    cy.url().should("eq", URL_DEV + "/guest/login");
    //Assert
  });
});
