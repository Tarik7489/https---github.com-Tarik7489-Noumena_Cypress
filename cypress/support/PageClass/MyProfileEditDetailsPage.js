class MyProfileEditDetailsPage {
    elements = {
        getPorfileDropDown: () => cy.get('div[data-testid="avatarContainer"]'),
        getMyProfileBtn: () => cy.contains('My Profile'),
        getEditBtn: () => cy.get('button[data-testid="button"]').eq(1),
        getEditInfoBtn: () => cy.contains('Edit Information'),
        getFirstNameField: () => cy.get('input[name="firstName"]'),
        getLastNameField: () => cy.get('input[name="lastName"]'),
        getUserNameField:()=>cy.get('input[name="username"]'),
        getProTitleField: () => cy.get('input[name="title"]'),
        getBioField: () => cy.get('textarea[name="bio"]'),
        getUploadImage:()=>cy.get('input[accept="image/png,image/jpg,image/jpeg"]'),
        getAgeDropdown: () => cy.get('[data-test="Content"] > :nth-child(1) > [data-test="TextField-StyledTextField"] > [data-test="TextField"]'),
        getChangeAgeValue: () => cy.contains('31-40'),
        getYearsOfFreelancingDropDown: () => cy.get('[data-test="Content"] > :nth-child(2) > [data-test="TextField-StyledTextField"] > [data-test="TextField"]'),
        getChangeFreelancingValue:()=>cy.contains('9-11'),
        getCityField:()=>cy.get('input[name="location"]'),
        getSearchedCity:()=>cy.contains('Hyderabad, Uttar Pradesh, India'),
        getSaveButton:()=>cy.get('button[type="submit"]'),
        getModalClsBtn:()=>cy.get('button[data-testid="modal_close_btn"]'),
        getEditDetailsHeaderText:()=>cy.contains('Edit Personal Details'),
        getProfilePictureHeaderText:()=>cy.contains('Profile Picture'),
        getRemovePhotoBtn:()=>cy.contains('Remove photo'),
        getCrossIconForCityField:()=>cy.get(':nth-child(4) > [data-test="TextField-StyledTextField"] > [data-test="TextField-RightIcon"]'),
        //error message
        getErrMsgForEmptyField:()=>cy.contains('This field cannot be empty'),
        getErrMsgForShortName:()=>cy.contains('This name seems too short'),
        getErrMsgForLongFirstName:()=>cy.contains('First name is too long'),
        getErrMsgForLongLastName:()=>cy.contains('Last name is too long'),
        getErrMsgForAlphaNumeric:()=>cy.contains("Only special characters -  . or ' can be used"),
        getErrMsgForUserNameSuggestion:()=>cy.contains('The username should contain 5 - 12 characters, lowercase letters and digits only, no spaces.'),
        getErrMsgForSpecialChar:()=>cy.contains("A special character can't be added here."),
        getErrMsgForLongProTitle:()=>cy.contains('Too many characters'),
        getMsgWhenCityNotFound:()=>cy.contains('Nothing found'),

        //toast message
        getUpdateDetailsToastMsg:()=>cy.contains('Success: Changes saved successfully.')




    }
    editDetailsScreen(){
        this.elements.getPorfileDropDown().click()
        this.elements.getMyProfileBtn().click()
        this.elements.getEditBtn().click()
        this.elements.getEditInfoBtn().click()
    }
}

export default MyProfileEditDetailsPage