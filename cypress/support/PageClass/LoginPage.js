class LoginPage {
    elements = {
        onBoardingLoginHeader: () => cy.contains('Log in'),
        emailFiled: () => cy.get("input[name='email']"),
        loginBtn: () => cy.get('#email-login-btn'),
        verifyLoginToastMessage: () => cy.contains('Verification Code Sent'),
        loginHeaderText: () => cy.contains('Please verify your email').should('be.visible'),
        firstOTP: () => cy.get('input[data-testid="OtpInputTestId-0"]'),
        secondOTP: () => cy.get('input[data-testid="OtpInputTestId-1"]'),
        thirdOTP: () => cy.get('input[data-testid="OtpInputTestId-2"]'),
        fourthOTP: () => cy.get('input[data-testid="OtpInputTestId-3"]'),
        nextBtn: () => cy.get('button[data-testid="otp-submit-button"]'),
        getIncorrectEmailErrorMessage: () => cy.contains('Please use a valid email address (email@address.com)'),
        getInvalidOTPMessage: () => cy.contains('Invalid code. Please try again.'),
        getPhoneNumber: () => cy.get('input[data-testid="testLoginPhoneInput"]'),

        getIncorrectPhoneNumberErrorMessage: () => cy.contains('Incorrect phone number'),

        getPhoneNumberHeader: () => cy.contains('Phone'),

        getPhoneLoginBtn: () => cy.get('#phone-login-btn'),


        getCountryLists: () => cy.get('input[data-test="CountryCodePicker-TextField"]'),

        getCountrySearchfield: () => cy.get('input[data-test="DropdownContent-dropdownContent-TextField"]'),

        getSearchedCountry: () => cy.contains('India (भारत)'),

        getPhoneLoginBtn:()=>cy.get('#phone-login-btn'),

        getEmptyPhoneNumberFieldErrorMessage:()=>cy.contains('This field cannot be empty'),

        getDisablePhoneLoginBtn:()=>cy.get('button[data-testid="testPhoneLoginButton"]'),

        getCountryNotFoundMessage:()=>cy.contains('No results'),

        getSignUpLink:()=>cy.contains('Sign Up'),

        getSignUpScreenHeader:()=>cy.contains('Sign Up: Step 1 of 2'),

        getEmailHeader:()=>cy.contains('Email'),

        getCrossIconForCountryList:()=>cy.get('body > div.modal-root > div > div > div.sc-lllmON.fJFDsN > div > div > div.sc-iOeugr.geBsnI'),

        getOtpScreenBackBtn:()=>cy.get('button[data-testid="otp-back-button"]')

    
        
    }



    emailLogin(email) {
        // cy.fixture('userData.json').then(userData => {

        this.elements.emailFiled().type(email)
        this.elements.loginBtn().click()
        // })
    };
    enterOTP(otp1, otp2, otp3, otp4) {
        // cy.fixture('userData.json').then(userData => {
        this.elements.firstOTP().type(otp1)
        this.elements.secondOTP().type(otp2)
        this.elements.thirdOTP().type(otp3)
        this.elements.fourthOTP().type(otp4)


    }

    phoneLogin(phoneNumber, country) {
        this.elements.getPhoneNumberHeader().click()
        this.elements.getPhoneNumber().type(phoneNumber)
        this.elements.getCountryLists().click()
        this.elements.getCountrySearchfield().type(country)
        this.elements.getSearchedCountry().click()
        this.elements.getPhoneLoginBtn().click()

    }

    reusedLoginMethod(){
        cy.fixture('testData.json').then(testData=>{
            this.elements.emailFiled().type(testData.reUsedEmailLogin)
            this.elements.loginBtn().click()
            this.elements.firstOTP().type(testData.firstOtp)
            this.elements.secondOTP().type(testData.secondOtp)
            this.elements.thirdOTP().type(testData.thirdOtp)
            this.elements.fourthOTP().type(testData.fourthOtp)
            this.elements.nextBtn().click()
            cy.url().should('include','https://noumena-web')


        })

    }
}

export default LoginPage