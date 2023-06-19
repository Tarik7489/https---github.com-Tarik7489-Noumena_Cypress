import LoginPage from "../support/PageClass/LoginPage";
import ProjectNoumPage from "../support/PageClass/ProjectNoumPage";

const login = new LoginPage()
const noum = new ProjectNoumPage()

describe('Project Noums', () => {

    let userData
    before(() => {

        cy.fixture('testData.json').then(function (data) {
            userData = data
        })
    })
    beforeEach(() => {

        cy.visit(Cypress.env(Cypress.env('envurl')))
        login.reusedLoginMethod()
    });

    it('Verify the URL when user navigate to Noum page', () => {
        noum.elements.getNoumsTab().click({ force: true })
        cy.url().should('include', '/noums')
    })
    it('Verify My Noums Tab', () => {
        noum.elements.getNoumsTab().click({ force: true })
        noum.elements.getMyNoumsTab().should('be.visible')
        noum.elements.getMyNoumsTab().click()
        cy.url().should('include', '/noums?tab=Owned')
    })
    it('Verify Connected Tab', () => {
        noum.elements.getNoumsTab().click({ force: true })
        noum.elements.getConnectedTab().should('be.visible')
        noum.elements.getConnectedTab().click()
        cy.url().should('include', 'tab=Connected&type=All')
    })
    it('Verify Following Tab', () => {
        noum.elements.getNoumsTab().click({ force: true })
        noum.elements.getFollowingTab().should('be.visible')
        noum.elements.getFollowingTab().click()
        cy.url().should('include', 'tab=Following&type=All')
    })
    it('Verify Archived Tab', () => {
        noum.elements.getNoumsTab().click({ force: true })
        noum.elements.getArchivedTab().should('be.visible')
        noum.elements.getArchivedTab().click()
        cy.url().should('include', 'tab=Archived')
    })
    it('Verify Linked Tab', () => {
        noum.elements.getNoumsTab().click({ force: true })
        noum.elements.getLinkedTab().should('be.visible')
        noum.elements.getLinkedTab().click()
        cy.url().should('include', 'tab=Linked')
    })
    
    })
