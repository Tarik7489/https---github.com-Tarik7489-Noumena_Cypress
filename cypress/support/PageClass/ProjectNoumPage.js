class ProjectNoumPage{
    elements={

        getNoumsTab:()=>cy.contains('Noums'),
        getMyNoumsTab:()=>cy.contains('My Noums'),
        getConnectedTab:()=>cy.contains('Connected'),
        getFollowingTab:()=>cy.contains('Following'),
        getArchivedTab:()=>cy.contains('Archived'),
        getLinkedTab:()=>cy.contains('Linked'),
        getRecentlyVisitedTab:()=>cy.contains('Recently Visited'),
        getAllTypesTab:()=>cy.contains('All Types'),

        getNewNoumBtn: ()=> cy.contains('New Noum'),
        getNameField:()=> cy.get('input[name="name"]'),
        getDescField:()=> cy.get('input[name="description"]'),
        getProjectDropdown:()=>cy.get('[data-test="ProjectCreate-StyledDropDownWrapper"] > [data-test="TextField-Container"] > [data-test="TextField-StyledTextField"] > [data-test="ProjectCreate-TextField"]'),
        
        getUploadImage:()=>cy.get('input[accept="image/png,image/jpg,image/jpeg"]'),
        getCancelBtn:()=>cy.get('button[data-testid="Create-Noum-Cancel"]'),
        getCreateNoumBtn:()=> cy.get('[data-testid="Create-Noum-Button"]'),
        getCreateNoumToastMessage:()=> cy.contains('Noum Created').should('be.visible'),
        getStartEditingBtn:()=> cy.contains('Start Editing'),
        getPublishBtn:()=> cy.contains('Publish'),
        getPublishChangesBtn:()=> cy.get('button[data-testid="confirmChamberPublish"]'),
        getPublishToastMessage:()=>cy.contains('Changes have been published.'),
        getCreateNoumModalCloseBtn:()=>cy.get('button[data-testid="modal_close_btn"]'),

        getSocial:()=>cy.get(':nth-child(2) > .sc-iveFHk > .sc-gikAfH > .sc-ezOQGI'),
        getInvestment:()=>cy.get(':nth-child(3) > .sc-iveFHk > .sc-gikAfH > .sc-ezOQGI'),
        getStory:()=>cy.get(':nth-child(4) > .sc-iveFHk > .sc-gikAfH > .sc-ezOQGI'),
        getSpecial:()=>cy.get('.fiUYqO > .sc-iveFHk > .sc-gikAfH > .sc-ezOQGI'),
        

        //visibility
        getVisibilityDropDown:()=>cy.get('[data-test="ProjectTypeDropdown-TextField"]'),
        getPublicNoum:()=>cy.get(':nth-child(1) > .sc-iveFHk > .sc-gikAfH > .sc-ezOQGI'),
        getSecretNoum:()=>cy.get('.fiUYqO > .sc-iveFHk > .sc-gikAfH > .sc-ezOQGI'),

        //error message
        getEmptyFldErrMsg:()=>cy.contains('Name required'),
        getExceddingCharErrMsg:()=>cy.contains('Too many characters'),
        getErrMsgForAlreadyExistNoum:()=>cy.contains('Error: A Noum with this name already exists.')

    }

createNoumModal(projectNoum,desc){
    this.elements.getNoumsTab().click({ force: true })
    this.elements.getNewNoumBtn().click({force:true})
    this.elements.getNameField().type(projectNoum)
    this.elements.getDescField().type(desc)

}
publishNoumFlow(){
    this.elements.getStartEditingBtn().click()
    this.elements.getPublishBtn().click()
    this.elements.getPublishChangesBtn().click()
    this.elements.getPublishToastMessage().should('be.visible')
}

uploadImage(){
    const filePath='Test.png'
    this.elements.getUploadImage().attachFile(filePath)
}
  
}

export default ProjectNoumPage