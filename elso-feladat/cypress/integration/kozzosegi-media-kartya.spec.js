/// <reference types="cypress" />

context('Közösségi média kártya', () => {
    before(() => {
        cy.visit('./kozossegi-media-kartya/index.html')
    })

    it('megfelelő méretű és formályú kártya', () => {
        cy.get('.container')
        .should('have.css', 'height', '200px')

        cy.get('.container')
        .should('have.css', 'width', '320px')

        cy.get('.container')
        .should('have.css', 'border-radius',  '10px')
    })

    it('megfelelő kép lekerekítés', () => {
        cy.get('img')
        .should('have.css', 'border-radius', '50%')
    })

    it('megfelelő színek a kártyán', () => {
        cy.get('.user-name')
        .should('have.css', 'color', 'rgb(66, 103, 178)')

        cy.get('.post-date')
        .should('have.css', 'color', 'rgb(137, 143, 156)')

        cy.get('p')
        .should('have.css', 'color', 'rgb(0, 0, 0)')

        cy.get('.social-button')
        .should('have.css', 'background-color', 'rgb(255, 255, 255)')
        .and('have.css', 'border-color', 'rgb(255, 255, 255)')
    })

    it('megfelelő gombok', () => {
        cy.get('button')
        .contains('Like')
        .children().should('have.class', 'fa fa-thumbs-o-up')

        cy.get('button')
        .contains('Comment')
        .children().should('have.class', 'fa fa-comment-o')

        cy.get('button')
        .contains('Share')
        .children().should('have.class', 'fa fa-share')
    })
})
