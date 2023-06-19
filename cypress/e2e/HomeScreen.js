import LoginPage from "../support/PageClass/LoginPage";
import HomePage from "../support/PageClass/HomePage";

const login = new LoginPage();
const home = new HomePage()
describe('Home Page', () => {
    beforeEach(() => {
        cy.visit(Cypress.env(Cypress.env('envurl')));
        login.reusedLoginMethod();
    });

    it('Verify the user navigate to home screen after login', () => {
        home.elements.getHomePageHeaderText().should('be.visible')
    })
    it('Verify the schedule a call modal', () => {
        home.elements.getScheduleCallBtn().should('be.visible')
        home.elements.getScheduleCallBtn().click()
        home.elements.getTextForScheduleCall().should('be.visible')
        home.elements.getCrossIconForScheduleCallModal().click()

    })
    it('Verify user navigate to profile when user clicks on "Go To Your Profile" link', () => {
        home.elements.getGoToYourProfile().should('be.visible')
        home.elements.getGoToYourProfile().click()
        cy.url().should('include', '/profile')

    })
    it('Verify the Noum Me modal', () => {
        home.elements.getNoumMeBtn().should('be.visible')
        home.elements.getNoumMeBtn().click()
        home.elements.getNoumMeHeaderText().should('be.visible')
        home.elements.getNoumMeCloseModalBtn().click()
    })
    it('Verify user should be able to navigate to profile from Noum Me modal', () => {
        home.elements.getNoumMeBtn().should('be.visible')
        home.elements.getNoumMeBtn().click()
        home.elements.getNoumMeHeaderText().should('be.visible')
        home.elements.getProfileFromNoumMeModal().click({force:true})
        cy.url().should('include', '/profile')
    })
    it('Verify the Knowledge Base screen', () => {
        home.elements.getShowAllBtn().click({force:true})
        home.elements.getKnowledgeBaseScreenHeader().should('be.visible')
    })
    it('Verify the recommended noums', () => {
        home.elements.getRecommendedNoum().should('be.visible')
    })

});
