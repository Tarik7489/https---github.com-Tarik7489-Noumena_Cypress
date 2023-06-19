import LoginPage from "../support/PageClass/LoginPage";
import GlobalSearchPage from "../support/PageClass/GlobalSearchPage";

const login = new LoginPage()
const global = new GlobalSearchPage()

describe('Global Search', () => {
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

    it('Verify user should be able to type anything on the search field', () => {
        global.elements.getSearchField().type(userData.search)
    })
    it('Verify user should be able to delete the text from the search field by clicking on the cross icon', () => {
        global.elements.getSearchField().type(userData.search)
        global.elements.getCrossIconForSearchField().click()
    })
    it('Verify the message when nothing found on search field', () => {
        global.elements.getSearchField().type(userData.wrongSearch)
        global.elements.getMessageWhenNtgFound().should('be.visible')
    })
    it('Verify the searched user is displayed under Members tab', () => {
        global.getSearchResultScreen()
        global.elements.getSearchField().clear()
        global.elements.getSearchField().type(userData.member)
        global.elements.getMembersTab().click()
        global.elements.getSearchedUser().should('be.visible')
    })
    it('Verify the searched event is displayed under Events tab', () => {
        global.getSearchResultScreen()
        global.elements.getSearchField().clear()
        global.elements.getSearchField().type(userData.event)
        global.elements.getEventTab().click()
        global.elements.getSearchedEvent().should('be.visible')
    })
    it('Verify the searched post is displayed under Posts tab', () => {
        global.getSearchResultScreen()
        global.elements.getSearchField().clear()
        global.elements.getSearchField().type(userData.searchPost)
        global.elements.getPostsTab().click()
        global.elements.getSearchedPost().should('be.visible')
    })
    it('Verify the searched noum is displayed under Noums tab', () => {
        global.getSearchResultScreen()
        global.elements.getSearchField().clear()
        global.elements.getSearchField().type(userData.searchNoum)
        global.elements.getNoumsTab().click()
        global.elements.getSearchedNoum().should('be.visible')
    })
    it('Verify all the tabs is visible', () => {
        global.getSearchResultScreen()
        global.elements.getAllTab().should('be.visible')
        global.elements.getNoumsTab().should('be.visible')
        global.elements.getMembersTab().should('be.visible')
        global.elements.getEventTab().should('be.visible')
        global.elements.getPostsTab().should('be.visible')
       
    })
    it('Verify user should be able to see the Search Results header', () => {
        global.getSearchResultScreen()
        global.elements.getSearchResultsHeaderText().should('be.visible')
       
    })
    it('Verify user should be able to see the Recent Searches header', () => {
        global.getSearchResultScreen()
        global.elements.getRecentSearchHeader().should('be.visible')
       
    })
    it('Verify the searched user name', () => {
        global.getSearchResultScreen()
        global.elements.getSearchField().clear()
        global.elements.getSearchField().type(userData.member)
        global.elements.getMembersTab().click()
        global.elements.getSearchedUser().should('be.visible')
       
       
    })
    it('Verify the searched user professional title', () => {
        global.getSearchResultScreen()
        global.elements.getSearchField().clear()
        global.elements.getSearchField().type(userData.member)
        global.elements.getMembersTab().click()
        global.elements.getProfessionalTitle().should('be.visible')
       
    })
    it('Verify the searched user connection tabs', () => {
        global.getSearchResultScreen()
        global.elements.getSearchField().clear()
        global.elements.getSearchField().type(userData.member)
        global.elements.getMembersTab().click()
        global.elements.getConnectedTag().should('be.visible')
       
    })
    it('Verify user should be able to navigate to searched user profile', () => {
        global.getSearchResultScreen()
        global.elements.getSearchField().clear()
        global.elements.getSearchField().type(userData.member)
        global.elements.getMembersTab().click()
        global.elements.getSearchedUser().click()
       
    })
    it('Verify the tag, when user search for own profile', () => {
        global.getSearchResultScreen()
        global.elements.getSearchField().clear()
        global.elements.getSearchField().type(userData.ownProfile)
        global.elements.getMembersTab().click()
        global.elements.getNoumenaProfileTag().should('be.visible')
       
    })
    it('Verify the owned by you tag, when user search for own noums', () => {
        global.getSearchResultScreen()
        global.elements.getSearchField().clear()
        global.elements.getSearchField().type(userData.searchNoum)
        global.elements.getNoumsTab().click()
        global.elements.getOwnedByYouTag().should('be.visible')
       
    })

})