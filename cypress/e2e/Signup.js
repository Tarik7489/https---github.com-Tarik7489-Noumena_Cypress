import SignupPage from "../support/PageClass/SignupPage";
import LoginPage from "../support/PageClass/LoginPage";

const login = new LoginPage()
const signAuto = new SignupPage()
const validOTP = require('../fixtures/userdata.json')[1];
describe('SignUp', {
    viewportWidth: 1920,
    viewportHeight: 1080
}, () => {

    beforeEach(() => {
        cy.visit(Cypress.env(Cypress.env('envurl')))
    });

    let globalData;

    before(() => {
        cy.fixture('testData').then((data) => {
            globalData = data;
        });
    });

    it('Verify signup with auto active flow', () => {

        signAuto.fillSignupScreen()
        login.enterOTP(validOTP.otp1, validOTP.otp2, validOTP.otp3, validOTP.otp4)
        signAuto.elements.getOTPSubmitBtn().click()
        cy.wait(4000)
        signAuto.fillQuestionsAutoVerified()
        // signAuto.elements.getFourthSignupHeaderText().should('be.visible')
        signAuto.elements.getContinueToNoumenaBtn().click()
        cy.url().should('include', 'https://noumena-web')

    })

    it('Verify signup with pending flow', () => {
        signAuto.elements.getSignupLink().click()

        //Use Cy.fixture('testData) to get the test data
        signAuto.elements.getEmailField().type(globalData.pendingEmail)
        signAuto.elements.getFirstNameField().type(globalData.firstName)
        signAuto.elements.getLastNameField().type(globalData.lastName)
        signAuto.elements.getSignUpBtn().click()

        //Reused the Login OTP method 
        login.enterOTP(validOTP.otp1, validOTP.otp2, validOTP.otp3, validOTP.otp4)
        signAuto.elements.getOTPSubmitBtn().click()
        cy.wait(4000)
        signAuto.fillQuestionPending()

    })

    it('Verify error message when user enters invalid email on email field', () => {
        signAuto.elements.getSignupLink().click()
        signAuto.elements.getEmailField().type(globalData.validFirstName)
        signAuto.elements.getInvalidEmailError().should('be.visible')
    })
    it('Verify error message when field is empty', () => {
        signAuto.elements.getSignupLink().click()
        signAuto.elements.getEmailField().type(globalData.validEmail).clear()
        signAuto.elements.getEmptyFieldError().should('be.visible')
    })
    it('Verify error message when user enters less than 3 characters in name fields', () => {
        signAuto.elements.getSignupLink().click()
        signAuto.elements.getFirstNameField().type(globalData.shortName)
        signAuto.elements.getSmallLengthErrorMessage().should('be.visible')
    })
    it('Verify error message when user enters long characters in first name fields', () => {
        signAuto.elements.getSignupLink().click()
        signAuto.elements.getFirstNameField().type(globalData.longName)
        signAuto.elements.getLongLenghtErrorMessage().should('be.visible')
    })
    it('Verify error message when user enters invalid number in phone number field', () => {
        signAuto.elements.getSignupLink().click()
        signAuto.elements.getPhoneNumberField().type(globalData.invalidNumber)
        signAuto.elements.getInvalidNumberErrMsg().should('be.visible')
    })
    it('Verify error message when user tries to signup with existing email', () => {
        signAuto.elements.getSignupLink().click()
        signAuto.elements.getEmailField().type(globalData.existingEmail)
        signAuto.elements.getFirstNameField().type(globalData.validFirstName)
        signAuto.elements.getLastNameField().type(globalData.validLastName)
        signAuto.elements.getSignUpBtn().click()
        signAuto.elements.getAlreadyExistEmailErrMsg().should('be.visible')

    })
    it('Verify error message when user tries to signup with existing phone number', () => {
        signAuto.elements.getSignupLink().click()
        signAuto.elements.getEmailField().type(globalData.newEmail)
        signAuto.elements.getFirstNameField().type(globalData.validFirstName)
        signAuto.elements.getLastNameField().type(globalData.validLastName)
        signAuto.elements.getCountryField().click()
        signAuto.elements.getCountrySearchField().type(globalData.country)
        signAuto.elements.getSelectedCountry().click()

        signAuto.elements.getPhoneNumberField().type(globalData.existingPhoneNumber)
        signAuto.elements.getSignUpBtn().click()
        signAuto.elements.getAlreadyNumberExistErrMsg().should('be.visible')
    })
    it('Verify error message when user enters less than 4 characters in referral code field', () => {
        signAuto.elements.getSignupLink().click()
        signAuto.elements.getReferralCodeField().type(globalData.minReferralCode)
        signAuto.elements.getReferralErrForSmallLength().should('be.visible')
    })
    it('Verify error message when user enters more than 5 characters in referral code field', () => {
        signAuto.elements.getSignupLink().click()
        signAuto.elements.getReferralCodeField().type(globalData.longReferralCode)
        signAuto.elements.getReferralErrMsgForExceedingLength().should('be.visible')
    })
    it('Verify initially Submit buttin should be disable', () => {
        signAuto.elements.getSignupLink().click()
        signAuto.elements.getSignUpBtn().should('be.disabled')

    })
    it('Verify user should be able to see and click on terms of use link', () => {
        signAuto.elements.getSignupLink().click()
        signAuto.elements.getTermsOfUseLink().should('be.visible')
        signAuto.elements.getTermsOfUseLink().click()

    })
    it('Verify user should be able to see and click on pricvacy&policy link', () => {
        signAuto.elements.getSignupLink().click()
        signAuto.elements.getPrivacyPolicyLink().should('be.visible')
        signAuto.elements.getPrivacyPolicyLink().click()

    })
    it('Verify sign up with auto rejected flow', () => {
        signAuto.elements.getSignupLink().click()
        signAuto.elements.getEmailField().type(globalData.autoRejected)
        signAuto.elements.getFirstNameField().type(globalData.firstName)
        signAuto.elements.getLastNameField().type(globalData.lastName)
        signAuto.elements.getSignUpBtn().click()

        //Reused the Login OTP method 
        login.enterOTP(validOTP.otp1, validOTP.otp2, validOTP.otp3, validOTP.otp4)
        signAuto.elements.getOTPSubmitBtn().click()
        cy.wait(4000)

        //auto reject
        signAuto.fillQuestionRejected()
        signAuto.elements.getRejectionScreen().should('be.visible')
    })

    it('Verify all the Asertions', () => {
        signAuto.elements.getSignupLink().click()
        signAuto.elements.getEmailField().type(globalData.assertionEmail)
        signAuto.elements.getFirstNameField().type(globalData.firstName)
        signAuto.elements.getLastNameField().type(globalData.lastName)
        signAuto.elements.getSignUpBtn().click()

        //Reused the Login OTP method 
        login.enterOTP(validOTP.otp1, validOTP.otp2, validOTP.otp3, validOTP.otp4)
        signAuto.elements.getOTPSubmitBtn().click()
        cy.wait(4000)

        //Perform all the assertion

        signAuto.elements.get1stQuestionHeader().should('be.visible')
        signAuto.elements.get2ndQuestionHeader().should('be.visible')
        signAuto.elements.get3rdQuestionHeader().should('be.visible')
        signAuto.elements.get4thQuestionHeader().should('be.visible')
        signAuto.elements.get5thQuestionHeader().should('be.visible')
        signAuto.elements.get6thQuestionHeader().should('be.visible')
        signAuto.elements.get7thQuestionHeader().should('be.visible')

    })
   
})