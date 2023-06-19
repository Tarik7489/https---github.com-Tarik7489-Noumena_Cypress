class SignupPage {


    elements = {

        getSignupLink: () => cy.contains('Sign Up'),
        getFirstSignUpHeaderText: () => cy.contains('Supercharge Your Business'),
        getEmailField: () => cy.get('input[data-testid="emailInput"]'),
        getFirstNameField: () => cy.get('input[name="firstName"]'),
        getLastNameField: () => cy.get('input[name="lastName"'),
        getPhoneNumberField: () => cy.get('input[data-testid="testPhoneInput"]'),
        getCountryField: () => cy.get('input[data-test="CountryCodePicker-TextField"]'),
        getCountrySearchField: () => cy.get('input[data-test="DropdownContent-dropdownContent-TextField"]'),
        getSelectedCountry: () => cy.contains('India (भारत)'),
        getReferralCodeField: () => cy.get('input[name="referralCode"]'),
        getTermsOfUseLink: () => cy.contains('Terms of Use'),
        getPrivacyPolicyLink: () => cy.contains('Privacy Policy'),
        getSignUpBtn: () => cy.get('button[data-testid="submitBtn"]'),
        getToastMessageForVerificationCode: () => cy.contains('Verification Code Sent'),
        getOTPSubmitBtn: () => cy.get('button[data-testid="submitOtp"]'),
        getSecondSignupHeaderText: () => cy.contains('Your business, your way'),

        //Signup questions fields header

        get1stQuestionHeader: () => cy.contains('I am a … (pick one)'),
        get2ndQuestionHeader: () => cy.contains('How long have you been self employed?'),
        get3rdQuestionHeader: () => cy.contains('Which stage of business are you?'),
        get4thQuestionHeader: () => cy.contains('What country do you run your business in?'),
        get5thQuestionHeader: () => cy.contains('What kind of business do you have?'),
        get6thQuestionHeader: () => cy.contains('What is your expected revenue from your business this year?'),
        get7thQuestionHeader: () => cy.contains('What entity do you use for your primary self-employed business?'),

        //Signup questions field and Answers

        get1stQuestionField: () => cy.get(':nth-child(1) > [data-test="QuestionContainer-QuestionContainerWrapper"] > [data-test="TextField-Container"] > [data-test="TextField-StyledTextField"] > [data-test="QuestionContainer-TextField"]'),
        select1stAns: () => cy.contains('Gen Z (18-24)'),

        get2ndQuestionField: () => cy.get(':nth-child(2) > [data-test="QuestionContainer-QuestionContainerWrapper"] > [data-test="TextField-Container"] > [data-test="TextField-StyledTextField"] > [data-test="QuestionContainer-TextField"]'),
        select2ndAns: () => cy.contains('10+ years'),

        get3rdQuestionField: () => cy.get(':nth-child(3) > [data-test="QuestionContainer-QuestionContainerWrapper"] > [data-test="TextField-Container"] > [data-test="TextField-StyledTextField"] > [data-test="QuestionContainer-TextField"]'),
        select3rdAns: () => cy.contains('Builder'),

        get4thQuestionField: () => cy.get(':nth-child(4) > [data-test="QuestionContainer-QuestionContainerWrapper"] > [data-test="TextField-Container"] > [data-test="TextField-StyledTextField"] > [data-test="QuestionContainer-TextField"]'),
        selectChinaCountry: () => cy.contains('China (中国)'),

        getRejectionScreen:()=>cy.contains("Sorry, we don't have a solution today that fits your business needs."),


        get5thQuestionField: () => cy.get(':nth-child(5) > [data-test="QuestionContainer-QuestionContainerWrapper"] > [data-test="TextField-Container"] > [data-test="TextField-StyledTextField"] > [data-test="QuestionContainer-TextField"]'),
        select5thAns: () => cy.contains('3D Product Animation'),

        get6thQuestionField: () => cy.get(':nth-child(6) > [data-test="QuestionContainer-QuestionContainerWrapper"] > [data-test="TextField-Container"] > [data-test="TextField-StyledTextField"] > [data-test="QuestionContainer-TextField"]'),
        select6thAns: () => cy.contains('$30,000 - $60,000'),

        get7thQuestionField: () => cy.get(':nth-child(7) > [data-test="QuestionContainer-QuestionContainerWrapper"] > [data-test="TextField-Container"] > [data-test="TextField-StyledTextField"] > [data-test="QuestionContainer-TextField"]'),
        select7thAns: () => cy.contains('Sole Proprietor'),

        //pending locators

        selectOtherFrom7thField: () => cy.contains('Other'),


        getQuestionSubmitBtn: () => cy.get('button[data-testid="onboardingQuestionsSubmitButton"]'),


        //3rd signup screen - Aditional Screen

        getThirdSignupHeaderText: () => cy.contains('Sign Up: Additional Verification'),
        getAdditionalInfoField: () => cy.get('textarea[data-testid="TextArea"]'),
        getAdditionalLink: () => cy.get('input[placeholder="https://www.examplelink.com"]'),
        getAddtionalInfoSubmitBtn: () => cy.get('button[data-testid="submit_button"]'),

        //Final Screen
        getFourthSignupHeaderText: () => cy.contains('Thanks for signing up'),
        getContinueToNoumenaBtn: () => cy.get('button[data-testid="continue_button"]'),

        //error messages

        getInvalidEmailError: () => cy.contains('Please use a valid email address (email@address.com)'),
        getEmptyFieldError: () => cy.contains('Please complete this field.'),
        getSmallLengthErrorMessage: () => cy.contains('This name seems too short'),
        getLongLenghtErrorMessage: () => cy.contains('First name is too long'),
        getErrorMesForAlphaNumeric: () => cy.contains("Only special characters -  . or ' can be used"),
        getInvalidNumberErrMsg: () => cy.contains('Incorrect phone number'),
        getAlreadyExistEmailErrMsg: () => cy.contains('This account already exists.'),
        getAlreadyNumberExistErrMsg: () => cy.contains('This phone number already exists.'),
        getReferralErrForSmallLength: () => cy.contains('Referral code should be a minimum 4 characters'),
        getReferralErrMsgForExceedingLength: () => cy.contains('Referral code should not exceed 5 characters'),

    }
    fillSignupScreen() {
        cy.fixture('testData.json').then(testData => {
            this.elements.getSignupLink().click();
            this.elements.getEmailField().type(testData.validEmail);
            this.elements.getFirstNameField().type(testData.validFirstName);
            this.elements.getLastNameField().type(testData.validLastName);
            this.elements.getSignUpBtn().click();

            // otp reused the method
        });
    }

    fillQuestionsAutoVerified() {
        this.elements.get1stQuestionField().click();
        this.elements.select1stAns().click();
        this.elements.get2ndQuestionField().click();
        this.elements.select2ndAns().click();
        this.elements.get3rdQuestionField().click();
        this.elements.select3rdAns().click();
        this.elements.get5thQuestionField().click();
        this.elements.select5thAns().click();
        this.elements.get6thQuestionField().click();
        this.elements.select6thAns().click();
        this.elements.get7thQuestionField().click();
        this.elements.select7thAns().click();
        this.elements.getQuestionSubmitBtn().click();
    }
    fillQuestionPending() {

        cy.fixture('testData.json').then(testData => {
            this.elements.get1stQuestionField().click();
            this.elements.select1stAns().click();
            this.elements.get2ndQuestionField().click();
            this.elements.select2ndAns().click();
            this.elements.get3rdQuestionField().click();
            this.elements.select3rdAns().click();
            this.elements.get5thQuestionField().click();
            this.elements.select5thAns().click();
            this.elements.get6thQuestionField().click();
            this.elements.select6thAns().click();
            this.elements.get7thQuestionField().click();
            this.elements.selectOtherFrom7thField().click();
            this.elements.getQuestionSubmitBtn().click();

            //fill adiotional info
            this.elements.getAdditionalInfoField().type(testData.aditionalInfo)
            this.elements.getAdditionalLink().type(testData.additionalLink)
            this.elements.getAddtionalInfoSubmitBtn().click()
        });
    }

    fillQuestionRejected() {

        cy.fixture('testData.json').then(testData => {

            this.elements.get1stQuestionField().click();
            this.elements.select1stAns().click();
            this.elements.get2ndQuestionField().click();
            this.elements.select2ndAns().click();
            this.elements.get3rdQuestionField().click();
            this.elements.select3rdAns().click();
            //Select rejected country
            this.elements.get4thQuestionField().click().clear().type(testData.chinaCountry)
            this.elements.selectChinaCountry().click()

            this.elements.get5thQuestionField().click();
            this.elements.select5thAns().click();
            this.elements.get6thQuestionField().click();
            this.elements.select6thAns().click();
            this.elements.get7thQuestionField().click();
            this.elements.selectOtherFrom7thField().click();
            this.elements.getQuestionSubmitBtn().click();
        });



    }

}
export default SignupPage