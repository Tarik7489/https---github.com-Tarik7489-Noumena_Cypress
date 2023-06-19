import LoginPage from "../support/PageClass/LoginPage";
import GlobalMessagePage from "../support/PageClass/GlobalMessagePage";

const login = new LoginPage()
const message = new GlobalMessagePage()

describe('Global Message', () => {
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

    it('Verify user should be able to clicks on the message icon', () => {
        message.elements.getGlobalMsgIcon().click()
    })
    it('Verify user should be able to see the All tab', () => {
        message.elements.getGlobalMsgIcon().click()
        message.elements.getAllTab().should('be.visible')
    })
    it('Verify user should be able to see and clicks on the Direct conversation tab', () => {
        message.elements.getGlobalMsgIcon().click()
        message.elements.getDirectConversionTab().should('be.visible').click()
    })
    it('Verify user should be able to see and clicks on the Noums tab', () => {
        message.elements.getGlobalMsgIcon().click()
        message.elements.getNoumsTab().should('be.visible').click()
    })
    it('Verify user should be able to see the message header', () => {
        message.elements.getGlobalMsgIcon().click()
        message.elements.getMessageHeaderText().should('be.visible')
    })
    it('Verify user should be able to send text message', () => {
        message.getUser()
        message.elements.getMessageBox().type(userData.message)
        message.elements.getSendMsgBtn().click()
    })
    it('Verify user should be able to send image message', () => {
        const filePath = "Test.png"
        message.getUser()
        message.elements.getUploadImage().attachFile(filePath)
        message.elements.getSendMsgBtn().click()
    })
    it('Verify user should be able to send large text', () => {
        message.getUser()
        message.elements.getMessageBox().type(userData.largeMessage)
        message.elements.getSendMsgBtn().click()
    })
    it('Verify by default send button should not be visible', () => {
        message.getUser()
        message.elements.getSendMsgBtn().should('not.be.visible')
    })
    it('Verify user should be able to send text message with image', () => {
        const filePath = "Test.png"
        message.getUser()
        message.elements.getUploadImage().attachFile(filePath)
        message.elements.getMessageBox().type(userData.message)
        message.elements.getSendMsgBtn().click()
    })


})