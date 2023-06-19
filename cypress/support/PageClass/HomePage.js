class HomePage {
    elements = {

        getHomePageHeaderText: () => cy.contains('Ready to make something happen today?'),
        getScheduleCallBtn: () => cy.contains('Schedule a Call'),
        getTextForScheduleCall: () => cy.contains('Tell Us Your Story'),
        getCrossIconForScheduleCallModal: () => cy.get('button[data-testid="modal_close_btn"]'),
        getGoToYourProfile: () => cy.contains('Go to Your Profile'),
        getNoumMeBtn: () => cy.contains('Noum Me'),
        getNoumMeHeaderText:()=>cy.contains('Let us introduce you to the community'),
        getNoumMeCloseModalBtn:()=>cy.get('button[data-testid="modal_close_btn"]'),
        getProfileFromNoumMeModal:()=>cy.contains('Go to Your Profile'),
        getShowAllBtn:()=>cy.contains('Show All'),
        getRecommendedNoum:()=>cy.contains('New Noums - Recommended for You'),
        getKnowledgeBaseScreenHeader:()=>cy.contains('Knowledge Base')

    }
}

export default HomePage