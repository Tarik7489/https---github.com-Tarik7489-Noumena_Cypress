import LoginPage from "../support/PageClass/LoginPage";
import AccountSettingsPage from "../support/PageClass/AccountSettingsPage";

const login = new LoginPage()
const settings = new AccountSettingsPage()

const email = require('../fixtures/userdata.json')[27];
const invalidNumber = require('../fixtures/userdata.json')[26];
const invalidOtp = require('../fixtures/userdata.json')[2];
describe('Account Settings', () => {

    let userData1
    before(() => {
        cy.fixture('testData.json').then(function (data) {

            userData1 = data
        })
    })

    beforeEach(() => {
        cy.visit(Cypress.env(Cypress.env('envurl')))
        login.reusedLoginMethod()
    });

    it('Verify user should be able to copy the referral code link', () => {
        settings.elements.getPorfileDropDown().click()
        settings.elements.getAccountSettingsBtn().click()
        settings.elements.getInviteUserBtn().click({ force: true })
        settings.elements.getCopyLinkBtn().click()
        settings.elements.getCopiedReferralCodeToastMsg().should('be.visible')
    })
    it('Verify after clicking on account settings button user navigates to Account Settings screen', () => {
        settings.elements.getPorfileDropDown().click()
        settings.elements.getAccountSettingsBtn().click()
        settings.elements.getMyAccountHeaderText().should('be.visible')
    })

    //edit phone number

    it('Verify initially next button is disable in edit phone number modal', () => {
        settings.elements.getPorfileDropDown().click()
        settings.elements.getAccountSettingsBtn().click()
        settings.elements.getEditPhoneBtn().click()
        settings.elements.getNextBtn().should('not.be.enabled')
    })
    it('Verify user should be able to close the edit phone number modal', () => {
        settings.elements.getPorfileDropDown().click()
        settings.elements.getAccountSettingsBtn().click()
        settings.elements.getEditPhoneBtn().click()
        settings.elements.getCancelBtn().click()
    })
    it('Verify the error message when user enters invalid phone number', () => {
        settings.editPhoneNumberModal(invalidNumber.number)
        settings.elements.getNextBtn().click()
        settings.elements.getErrMsgForInvalidNumber().should('be.visible')
    })
    it('Verify the error message when user enters existing phone number', () => {
        settings.editPhoneNumberModal(invalidNumber.existingNumber)
        settings.elements.getCountryDropDown().eq(1).click()
        login.elements.getCountrySearchfield().type(userData1.country)
        login.elements.getSearchedCountry().click()
        settings.elements.getNextBtn().click()
        settings.elements.getErrMsgForAlreadyExistNumber().should('be.visible')
    })
    it('Verify the error message when phone number field is empty', () => {
        settings.elements.getPorfileDropDown().click()
        settings.elements.getAccountSettingsBtn().click()
        settings.elements.getEditPhoneBtn().click()
        settings.elements.getNextBtn().click()
        settings.elements.getErrMsgForEmptyField().should('be.visible')
    })
    xit('Verify user navigates to OTP screen after entering valid number', () => {
        settings.editPhoneNumberModal(invalidNumber.validNumber)
        settings.elements.getNextBtn().click()
        settings.elements.getOtpVerificationHeader().should('be.visible')
    })
    xit('Verify the error message when user enters invalid OTP in edit phone number', () => {
        settings.editPhoneNumberModal(invalidNumber.validNumber)
        settings.elements.getCountryDropDown().eq(1).click()
        login.elements.getCountrySearchfield().type(userData1.country)
        login.elements.getSearchedCountry().click()
        settings.elements.getNextBtn().click()
        login.enterOTP(invalidOtp.otp1, invalidOtp.otp2, invalidOtp.otp3, invalidOtp.otp4)
        settings.elements.getNextBtn().click()
        settings.elements.getErrMsgForInvalidOtp().should('be.visible')
    })

    //edit email 

    it('Verify initially next button is disable in edit email modal', () => {
        settings.elements.getPorfileDropDown().click()
        settings.elements.getAccountSettingsBtn().click()
        settings.elements.getEditEmailBtn().click()
        settings.elements.getEmailNextBtn().should('not.be.enabled')
    })

    it('Verify user should be able to close the edit email modal', () => {
        settings.elements.getPorfileDropDown().click()
        settings.elements.getAccountSettingsBtn().click()
        settings.elements.getEditEmailBtn().click()
        settings.elements.getCancelBtn().click()
    })
    it('Verify the error message when user enters invalid email', () => {
        settings.editEmailModal(email.invalidEmail)
        settings.elements.getEmailNextBtn().click()
        settings.elements.getErrMsgForInvalidEmail().should('be.visible')
    })

    it('Verify the error message when user enters existing email', () => {
        settings.editEmailModal(email.existingEmail)
        settings.elements.getEmailNextBtn().click()
        settings.elements.getErrMsgForAlreadyExistEmail().should('be.visible')

    })
    xit('Verify user navigates to OTP screen after entering valid email', () => {
        settings.editEmailModal(email.validEmail)
        settings.elements.getEmailNextBtn().click()
        settings.elements.getEmailOtpVerificationHeader().should('be.visible')
    })
    xit('Verify the error message when user enters invalid OTP in edit email flow', () => {
        settings.editEmailModal(email.validEmail)
        settings.elements.getEmailNextBtn().click()
        login.enterOTP(invalidOtp.otp1, invalidOtp.otp2, invalidOtp.otp3, invalidOtp.otp4)
        settings.elements.getEmailNextBtn().click()
        settings.elements.getErrMsgForInvalidOtp().should('be.visible')
    })
    xit('Verify user should be able to see the web version on account settings screen', () => {
        settings.elements.getPorfileDropDown().click()
        settings.elements.getAccountSettingsBtn().click()
        //verify the version number
        cy.contains('Version 23.6.1').then(function (element) {
            const actualText = element.text()
            expect(actualText.includes('Version')).to.be.true
        })
    })
    it('Verify user should be able to see the privacy link', () => {
        settings.elements.getPorfileDropDown().click()
        settings.elements.getAccountSettingsBtn().click()
        settings.elements.getPrivacyLink().should('be.visible')
    })
    it('Verify user should be able to see the terms of use link', () => {
        settings.elements.getPorfileDropDown().click()
        settings.elements.getAccountSettingsBtn().click()
        settings.elements.getTermsLink().should('be.visible')
    })
    it('Verify user should be able to see the help link', () => {
        settings.elements.getPorfileDropDown().click()
        settings.elements.getAccountSettingsBtn().click()
        settings.elements.getHelpBtn().should('be.visible')
    })
    it('Verify user should be able to navigate to terms of use link', () => {
        settings.elements.getPorfileDropDown().click()
        settings.elements.getAccountSettingsBtn().click()
        cy.get('span[data-testid="terms"]').invoke('removeAttr', 'target').click();
        
       
    })
    it('Verify user should be able to navigate to privacy ink', () => {
        settings.elements.getPorfileDropDown().click()
        settings.elements.getAccountSettingsBtn().click()
        cy.get('span[data-testid="privacy"]').invoke('removeAttr', 'target').click();
       
        
    })
})