/// <reference types="cypress" />

context('Elso feladat', () => {
    before(() => {
        cy.visit('./elso-feladat/elso.html')
    })

    it('megfelelő címek a weboldalon', () => {
        cy.title().should('include', 'Remek weboldal')
        cy.get('h1').should('contain', 'Remek weboldal')
        cy.get('h2').should('contain', 'Számozatlan listák')
        cy.get('h2').should('contain', 'Számozott listák')
    })

    it('p és em tag megfelelő', () => {
        cy.get('em').should('contain', 'Lorem Ipsum')
        .parent().should('contain', 
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.")
    })

    it('p és strong tag megfelelő', () => {
        cy.get('strong').should('contain', 'Lorem Ipsum')
        .parent().should('contain', 
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")    
    })

    it('megfelelő számozatlan lista', () => {
        cy.get('ul').children()
        .should('contain', 'Batman')
        .should('contain', 'Antman')
        .should('contain', 'Superman')
    })

    it('megfelelő számozott lista', () => {
        cy.get('ol').children()
        .should('contain', 'Batman')
        .should('contain', 'Antman')
        .should('contain', 'Superman')
    })  

    it('megfelelő link egy másik oldalra', () => {
        cy.get('a').should('have.attr', 'href').and('include', 'tigra.hu')
    })

    it('az oldal betölt egy képet', () => {
        cy.get('img').should('have.attr', 'src').and('include', 'tigra-logo-szines-s')
    })
})
