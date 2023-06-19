class AccountSettingsPage{
    elements={

        getPorfileDropDown:()=>cy.get('div[data-testid="avatarContainer"]'),
        getAccountSettingsBtn:()=>cy.contains('Account Settings'),
        getMyAccountHeaderText:()=>cy.contains('My Account'),
        getInviteUserBtn:()=>cy.get('span[data-test="InviteFriendSideMenuSection-TSpan"]'),
        getCopyLinkBtn:()=>cy.contains('Copy Link'),
        getCopiedReferralCodeToastMsg:()=>cy.contains('Referral code copied!'),
        getAccountSettingsLink:()=>cy.get('div[data-testid="Nav-label"]'),
        getEditPhoneBtn:()=>cy.get('button[data-testid="edit-phone"]'),
        getPhoneNumberHeaderText:()=>cy.contains('Phone number'),
        getEmailAddressHeaderText:()=>cy.contains('Email address'),
        getCancelBtn:()=>cy.get('button[data-testid="cancelButton"]'),
        getNextBtn:()=>cy.get('[data-test="ModalFooter-ModalFooterStyled"] > [data-testid="button"] > [data-testid="button_text"]'),
        getErrMsgForInvalidNumber:()=>cy.contains('Incorrect phone number'),
        getErrMsgForEmptyField:()=>cy.contains('This field cannot be empty'),
        getErrMsgForAlreadyExistNumber:()=>cy.contains('Error: This account already exists.'),
        getVerificationToastMsg:()=>cy.contains('Verification Code Sent'),
        getUpdatedNumberToastMsg:()=>cy.contains('Success: OTP verified successfully!'),

        getEditEmailBtn:()=>cy.get('button[data-testid="edit-email"]'),
        getErrMsgForInvalidEmail:()=>cy.contains('Error: Invalid email address'),
        getErrMsgForAlreadyExistEmail:()=>cy.contains('Error: This account already exists.'),
        getEmailNextBtn:()=>cy.get('button[type="submit"]'),
        getUpdatedEmailToastMsg:()=>cy.contains('Success: OTP verified successfully!'),
        getPhoneNumberField:()=>cy.get('input[data-test="PhoneInput-TextField"]'),
        getCountryDropDown:()=>cy.get('input[data-test="CountryCodePicker-TextField"]'),
        getOtpVerificationHeader:()=>cy.contains('Please verify your phone'),
        getErrMsgForInvalidOtp:()=>cy.contains('Error: Invalid OTP, Please try again!'),
        getEmailField:()=>cy.get('input[data-testid="testEmailLoginTextField"]'),
        getEmailOtpVerificationHeader:()=>cy.contains('Please verify your email'),
        getPrivacyLink:()=>cy.get('span[data-testid="privacy"]'),
        getTermsLink:()=>cy.get('span[data-testid="terms"]'),
        getHelpBtn:()=>cy.contains('Help'),
        getPrivacyScreen:()=>cy.contains('Noumena privacy disclosure'),
        getTermsScreen:()=>cy.contains('Terms and Conditions of Use and Membership ')


    }
    editPhoneNumberModal(number){
        this.elements.getPorfileDropDown().click()
        this.elements.getAccountSettingsBtn().click()
        this.elements.getEditPhoneBtn().click()
        this.elements.getPhoneNumberField().eq(1).type(number)
        
    }
    editEmailModal(email){
        this.elements.getPorfileDropDown().click()
        this.elements.getAccountSettingsBtn().click()
        this.elements.getEditEmailBtn().click()
        this.elements.getEmailField().eq(1).type(email)
        
    }

}

export default AccountSettingsPage