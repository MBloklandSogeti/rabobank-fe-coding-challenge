const fillForm = (
  firstName: string,
  lastName: string,
  password: string,
  email: string
) => {
  getById('first-name').type(firstName);
  getById('last-name').type(lastName);
  getById('password').type(password);
  getById('email').type(email);
};

const getById = (id: string) => cy.get(`[id="${id}"]`);

describe('signup-form', () => {
  const FIRST_NAME = 'John';
  const LAST_NAME = 'Doe';
  const PASSWORD = 'PassWord';
  const EMAIL = 'john.doe@doe.com';

  beforeEach(() => {
    cy.intercept('https://demo-api.now.sh/users', '');

    cy.visit('/');
  });

  it('should show form inputs and, fill correctly, show is-valid', () => {
    fillForm(FIRST_NAME, LAST_NAME, PASSWORD, EMAIL);

    cy.get('button[type="submit"]').contains('Register').click();

    cy.get('[id="first-name"]').should('have.class', 'is-valid');
    cy.get('[id="last-name"]').should('have.class', 'is-valid');
    cy.get('[id="password"]').should('have.class', 'is-valid');
    cy.get('[id="email"]').should('have.class', 'is-valid');

    cy.contains('Successfully registered!');
  });

  it("should give errors when clicking 'Register' when no fields are filled", () => {
    cy.get('button[type="submit"]').contains('Register').click();

    cy.contains('Registration form is not valid.');

    getById('first-name').should('have.class', 'is-invalid');
    getById('last-name').should('have.class', 'is-invalid');
    getById('password').should('have.class', 'is-invalid');
    getById('email').should('have.class', 'is-invalid');

    cy.get('.invalid-feedback').contains('First name is a required field');
    cy.get('.invalid-feedback').contains('Last name is a required field');
    cy.get('.invalid-feedback').contains('Password is a required field');
    cy.get('.invalid-feedback').contains('E-mail is a required field');
  });

  it('should have proper password validation', () => {
    fillForm(FIRST_NAME, LAST_NAME, PASSWORD, EMAIL);

    getById('password').clear();
    getById('password').type('test');
    cy.get('.invalid-feedback').contains(
      'Password should contain at least 1 uppercase letter'
    );

    getById('password').clear();
    getById('password').type('TEST');
    cy.get('.invalid-feedback').contains(
      'Password should contain at least 1 lowercase letter'
    );

    getById('password').clear();
    getById('password').type('Test');
    cy.get('.invalid-feedback').contains(
      'Password should be at least 8 characters long'
    );

    getById('password').clear();
    getById('password').type('johnTest');

    cy.get('.invalid-feedback').contains(
      'Password should not contain the given first or last name'
    );
  });

  it('should have proper email validation', () => {
    fillForm(FIRST_NAME, LAST_NAME, PASSWORD, EMAIL);

    getById('email').clear();
    getById('email').type('test');

    cy.get('button[type="submit"]').contains('Register').click();

    cy.get('.invalid-feedback').contains(
      'E-mail is not valid. Should be in the format: example@example.nl'
    );

    getById('email').type('@test');
    cy.get('.invalid-feedback').contains(
      'E-mail is not valid. Should be in the format: example@example.nl'
    );

    getById('email').type('.c');
    cy.get('.invalid-feedback').contains(
      'E-mail is not valid. Should be in the format: example@example.nl'
    );

    getById('email').type('om');
    cy.get('.invalid-feedback').should('not.exist');
  });
});
