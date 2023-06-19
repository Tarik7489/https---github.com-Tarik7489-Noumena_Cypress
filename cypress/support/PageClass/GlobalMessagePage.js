class GlobalMessagePage{
    elements={
        getGlobalMsgIcon:()=>cy.get('div[data-test="MainHeaderInner-IconContainer"]').eq(3),
        getAllTab:()=>cy.contains('All'),
        getDirectConversionTab:()=>cy.contains('Direct Conversation'),
        getNoumsTab:()=>cy.contains('Noums'),
        getMessageHeaderText:()=>cy.contains('Messages'),
        getUser:()=>cy.contains('Monster King'),
        getMessageBox:()=>cy.get('textarea[data-testid="TextArea"]'),
        getSendMsgBtn:()=>cy.get('div[data-test="MessageInput-SendButtonWrapper"]'),
        getUploadImage:()=>cy.get('input[accept="image/png,image/jpg,image/jpeg,video/mp4"]')

    }

    getUser(){
        this.elements.getGlobalMsgIcon().click()
        this.elements.getDirectConversionTab().click()
        this.elements.getUser().click()
    }
}
export default GlobalMessagePage