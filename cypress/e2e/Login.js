import LoginPage from "../support/PageClass/LoginPage";

const login = new LoginPage();


const validEmail = require('../fixtures/userdata.json')[0];
const validOTP = require('../fixtures/userdata.json')[1];
const emptyEmail = require('../fixtures/userdata.json')[3];
const invalidOtp = require('../fixtures/userdata.json')[2];
const phoneLogin = require('../fixtures/userdata.json')[3];
const invalidNumber = require('../fixtures/userdata.json')[4];
const invalidCountry = require('../fixtures/userdata.json')[5];
describe('Login', {
    viewportWidth: 1920,
    viewportHeight: 1080
}, () => {

    beforeEach(() => {
        cy.visit(Cypress.env(Cypress.env('envurl')))
    });

    it('Verify Login with Valid Email', () => {

        login.elements.onBoardingLoginHeader().should('be.visible');

        //emailLogin Methods 
        login.emailLogin(validEmail.email);

        login.elements.verifyLoginToastMessage().should('be.visible');
        login.elements.loginHeaderText().should('be.visible');

        //Otp method
        login.enterOTP(validOTP.otp1, validOTP.otp2, validOTP.otp3, validOTP.otp4)
        login.elements.nextBtn().click()
        cy.url().should('include', 'https://noumena-web')


    });
    it('Verify the error message when user tries to login with invalid email', () => {
        login.emailLogin(validEmail.invalidemail)
        login.elements.getIncorrectEmailErrorMessage().should('be.visible')

    })

    it('Verify - Next button should be disabled when email field is empty', () => {
        login.elements.emailFiled().should('be.empty')
        login.elements.loginBtn().should('be.disabled')
    })
    it('Verify the Invalid OTP toast message', () => {
        const data = require('../fixtures/userdata.json')[0];
        login.emailLogin(data.email);
        //Otp method
        login.enterOTP(invalidOtp.otp1, invalidOtp.otp2, invalidOtp.otp3, invalidOtp.otp4)
        login.elements.nextBtn().click()
        login.elements.getInvalidOTPMessage().should('be.visible')


    })

    it('Verify - Login with valid phone number', () => {

        login.phoneLogin(phoneLogin.phoneNumber, phoneLogin.country)

        //OTP flow, we can reused the email otp method

        login.enterOTP(validOTP.otp1, validOTP.otp2, validOTP.otp3, validOTP.otp4)
        login.elements.nextBtn().click()
        cy.url().should('include', 'https://noumena-web')
    })


    it('Verify the error message when user tries to login with invalid phone number', () => {
        login.elements.getPhoneNumberHeader().click()
        login.elements.getPhoneNumber().type(invalidNumber.phoneNumber)
        login.elements.getPhoneLoginBtn().click()
        login.elements.getIncorrectPhoneNumberErrorMessage().should('be.visible')


    })
    it('Verify the error message when phone number field is empty', () => {
        login.elements.getPhoneNumberHeader().click()
        login.elements.getPhoneLoginBtn().click()
        login.elements.getEmptyPhoneNumberFieldErrorMessage().should('be.visible')
    })

    it('Verify login button should be disabled when phone number field in empty', () => {
        login.elements.getPhoneNumberHeader().click()
        login.elements.getPhoneNumber().should('be.empty')
    })

    it('Verify the message if the country is not found', () => {
        login.elements.getPhoneNumberHeader().click()
        login.elements.getCountryLists().click()
        login.elements.getCountrySearchfield().type(invalidCountry.country)
        login.elements.getCountryNotFoundMessage().should('be.visible')
    })

    it('Verify user should be able to see signup link and also clickable in login screen', () => {
        login.elements.getSignUpLink().should('be.visible')
        login.elements.getSignUpLink().click()
        login.elements.getSignUpScreenHeader().should('be.visible')

    })

    it('Verify entered data should be removed from the fields when user switch the tabs', () => {

        login.elements.emailFiled().type(validEmail.email)
        login.elements.getPhoneNumberHeader().click()
        login.elements.getEmailHeader().click()
        login.elements.loginBtn().should('be.disabled')

    })

    it('Verify that the user can remove the typed country', () => {
        login.elements.getPhoneNumberHeader().click()
        login.elements.getCountryLists().click()
        login.elements.getCountrySearchfield().type(invalidCountry.country)
        login.elements.getCrossIconForCountryList().click()

    })

    it('Verify when user redirect back from OTP screen to login screen then data should removed from the field', () => {
        cy.intercept({
            url: "https://events.launchdarkly.com/events/bulk/62845185262773159d06954b",
            method: "POST"
        }).as("beforeEmail")

        cy.wait('@beforeEmail')
        login.emailLogin(validEmail.email);
        login.elements.getOtpScreenBackBtn().click()
        login.elements.loginBtn().should('be.disabled')


    })

});
