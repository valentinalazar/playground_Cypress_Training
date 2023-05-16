describe('Checkboxes', () => {

    beforeEach('before each', ()=>{
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
        cy.get('[id="dropdowm-menu-1"]').should('be.visible');
    })
    it('Checks/Unchecks 1 checkbox', () => {
        cy.get('[value="option-1"]').should('be.visible');
        cy.get('[value="option-1"]').check();
        cy.get('[value="option-1"]').should('be.checked');
        cy.get('[value="option-1"]').uncheck();
        cy.get('[value="option-1"]').should('not.be.checked');

    });

    it('Checks/UnchecksOption 2 checkbox', () => {
        cy.get('input[type="checkbox"]').first().should('be.visible');
        cy.get('input[type="checkbox"]').first().check();
        cy.get('input[type="checkbox"]').first().should('be.checked');
        cy.get('input[type="checkbox"]').first().uncheck();
        cy.get('input[type="checkbox"]').first().should('not.be.checked');
    });

    it('Checks/Unchecks Option 3 checkbox', () => {
        cy.get('input[type="checkbox"]').eq(2).should('be.visible');
        cy.get('input[type="checkbox"]').eq(2).check();
        cy.get('input[type="checkbox"]').eq(2).should('be.checked');
        cy.get('input[type="checkbox"]').eq(2).uncheck();
        cy.get('input[type="checkbox"]').eq(2).should('not.be.checked');
    });

    it('Checks/Unchecks Option 4 checkbox', () => {
        cy.get('input[type="checkbox"]').eq(3).should('be.visible');
        cy.get('input[type="checkbox"]').eq(3).check();
        cy.get('input[type="checkbox"]').eq(3).should('be.checked');
        cy.get('input[type="checkbox"]').eq(3).uncheck();
        cy.get('input[type="checkbox"]').eq(3).should('not.be.checked');
    });
});