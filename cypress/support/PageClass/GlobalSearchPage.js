class GlobalSearchPage {
    elements = {
        getSearchField: () => cy.get('input[placeholder="Search for Anything..."]'),
        getCrossIconForSearchField: () => cy.get('div[data-test="TextField-RightIcon"]'),
        getSeeAllResultsBtn: () => cy.contains('See All Results'),
        getAllTab: () => cy.contains('All'),
        getNoumsTab: () => cy.contains('Noums'),
        getMembersTab: () => cy.contains('Members'),
        getEventTab: () => cy.contains('Events'),
        getPostsTab: () => cy.contains('Posts'),
        getRecentSearchHeader: () => cy.contains('Recent Searches'),
        getSearchResultsHeaderText: () => cy.contains('Search Results'),
        getSearchedUser: () => cy.contains('Monster King'),
        getProfessionalTitle: () => cy.contains('QA Engineer'),
        getConnectedTag: () => cy.contains('Connected'),
        getMessageWhenNtgFound: () => cy.contains("We couldn't find anything matching your search."),
        getSearchedEvent:()=>cy.contains('Public'),
        getSearchedPost:()=>cy.contains('Mai here you go'),
        getSearchedNoum:()=>cy.contains('secret 6a'),
        getAboutTab:()=>cy.contains('About'),
        getNoumenaProfileTag:()=>cy.contains('Noumena'),
        getOwnedByYouTag:()=>cy.contains('Owned by You')
    }

    getSearchResultScreen() {
        cy.fixture('testData.json').then(testData => {

            this.elements.getSearchField().type(testData.search)
            this.elements.getSeeAllResultsBtn().click()
        })


    }
}

export default GlobalSearchPage