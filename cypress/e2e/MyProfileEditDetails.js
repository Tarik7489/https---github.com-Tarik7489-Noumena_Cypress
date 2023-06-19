import LoginPage from "../support/PageClass/LoginPage";
import MyProfileEditDetailsPage from "../support/PageClass/MyProfileEditDetailsPage";

const login = new LoginPage();
const editDetails = new MyProfileEditDetailsPage();

describe('My Profile Edit Details', () => {
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

    it('Verify user should be able to click on My Profile Link', () => {
        editDetails.elements.getPorfileDropDown().click()
        editDetails.elements.getMyProfileBtn().should('be.visible').click()
    })
    it('Verify the url after clicking on my profile button', () => {
        editDetails.elements.getPorfileDropDown().click()
        editDetails.elements.getMyProfileBtn().click()
        cy.url().should('include', '/profile')
    })
    it('Verify user is able to click on edit button', () => {
        editDetails.elements.getPorfileDropDown().click()
        editDetails.elements.getMyProfileBtn().click()
        editDetails.elements.getEditBtn().click()
    })
    it('Verify the url after clicking on edit button', () => {
        editDetails.elements.getPorfileDropDown().click()
        editDetails.elements.getMyProfileBtn().click()
        editDetails.elements.getEditBtn().click()
        cy.url().should('include', '/edit')
    })
    it('Verify user is able to click on Edit Details button', () => {
        editDetails.elements.getPorfileDropDown().click()
        editDetails.elements.getMyProfileBtn().click()
        editDetails.elements.getEditBtn().click()
        editDetails.elements.getEditInfoBtn().click()
    })
    it('Verify the url after clicking on edit info button', () => {
        editDetails.elements.getPorfileDropDown().click()
        editDetails.elements.getMyProfileBtn().click()
        editDetails.elements.getEditBtn().click()
        editDetails.elements.getEditInfoBtn().click()
        cy.url().should('include', '/profile/edit')
    })
    it('Verify the edit details screen header text', () => {
        editDetails.editDetailsScreen()
        editDetails.elements.getEditDetailsHeaderText().should('be.visible')
    })
    it('Verify the profile picture header text', () => {
        editDetails.editDetailsScreen()
        editDetails.elements.getProfilePictureHeaderText().should('be.visible')
    })
    it('Verify the error message when first name field is empty', () => {
        editDetails.editDetailsScreen()
        editDetails.elements.getFirstNameField().clear()
        editDetails.elements.getErrMsgForEmptyField().should('be.visible')
    })
    it('Verify the error message when user enters short name on first name field', () => {
        editDetails.editDetailsScreen()
        editDetails.elements.getFirstNameField().clear()
        editDetails.elements.getFirstNameField().type(userData.shortFirstName)
        editDetails.elements.getErrMsgForShortName().should('be.visible')
    })
    it('Verify the error message when user enters long name on first name field', () => {
        editDetails.editDetailsScreen()
        editDetails.elements.getFirstNameField().clear()
        editDetails.elements.getFirstNameField().type(userData.longFirstName)
        editDetails.elements.getErrMsgForLongFirstName().should('be.visible')
    })
    xit('Verify the error message when user enters alpha numeric values on first name field', () => {
        editDetails.editDetailsScreen()
        editDetails.elements.getFirstNameField().clear()
        editDetails.elements.getFirstNameField().type(userData.alphaNumericFirstName)
        editDetails.elements.getErrMsgForAlphaNumeric().should('be.visible')
    })
    it('Verify the error message when user enters special characters on first name field', () => {
        editDetails.editDetailsScreen()
        editDetails.elements.getFirstNameField().clear()
        editDetails.elements.getFirstNameField().type(userData.specialCharFirstName)
        editDetails.elements.getErrMsgForSpecialChar().should('be.visible')
    })

    //last name
    it('Verify the error message when last name field is empty', () => {
        editDetails.editDetailsScreen()
        editDetails.elements.getLastNameField().clear()
        editDetails.elements.getErrMsgForEmptyField().should('be.visible')
    })
    it('Verify the error message when user enters short name on last name field', () => {
        editDetails.editDetailsScreen()
        editDetails.elements.getLastNameField().clear()
        editDetails.elements.getLastNameField().type(userData.shortFirstName)
        editDetails.elements.getErrMsgForShortName().should('be.visible')
    })
    it('Verify the error message when user enters long name on last name field', () => {
        editDetails.editDetailsScreen()
        editDetails.elements.getLastNameField().clear()
        editDetails.elements.getLastNameField().type(userData.longFirstName)
        editDetails.elements.getErrMsgForLongLastName().should('be.visible')
    })
    xit('Verify the error message when user enters alpha numeric values on last name field', () => {
        editDetails.editDetailsScreen()
        editDetails.elements.getLastNameField().clear()
        editDetails.elements.getLastNameField().type(userData.alphaNumericFirstName)
        editDetails.elements.getErrMsgForAlphaNumeric().should('be.visible').and('includes', 'Only special characters');
    })
    it('Verify the error message when user enters special characters on last name field', () => {
        editDetails.editDetailsScreen()
        editDetails.elements.getLastNameField().clear()
        editDetails.elements.getLastNameField().type(userData.specialCharFirstName)
        editDetails.elements.getErrMsgForSpecialChar().should('be.visible')
    })

    //user name field
    it('Verify the error message when username field is empty', () => {
        editDetails.editDetailsScreen()
        editDetails.elements.getUserNameField().clear()
        editDetails.elements.getErrMsgForEmptyField().should('be.visible')
    })
    it('Verify the suggestion message for username field', () => {
        editDetails.editDetailsScreen()
        editDetails.elements.getUserNameField().clear()
        editDetails.elements.getUserNameField().type(userData.userName)
        editDetails.elements.getErrMsgForUserNameSuggestion().should('be.visible')
    })
    //professional title field
    it('Verify the error message when professional title field is excedding limits', () => {
        editDetails.editDetailsScreen()
        editDetails.elements.getProTitleField().clear()
        editDetails.elements.getProTitleField().type(userData.profTitle)
        editDetails.elements.getErrMsgForLongProTitle().should('be.visible')
    })

    //validation
    it('Verify user should be able to close the edit details modal', () => {
        editDetails.editDetailsScreen()
        editDetails.elements.getModalClsBtn().click()
    })
    it('Verify by default save button is disabled', () => {
        editDetails.editDetailsScreen()
        editDetails.elements.getSaveButton().should('not.be.enabled')
    })
    it('Verify by default save button is disabled', () => {
        editDetails.editDetailsScreen()
        editDetails.elements.getSaveButton().should('not.be.enabled')
    })
    it('Verify user should be able to remove the city name by clicking on cross icon', () => {
        editDetails.editDetailsScreen()
        editDetails.elements.getCityField().click()
        editDetails.elements.getCrossIconForCityField().click({ force: true })
    })
    it('Verify user should be able to see and clicks on remove photo button', () => {
        editDetails.editDetailsScreen()
        editDetails.elements.getRemovePhotoBtn().click()
    })
    it('Verify user should be able to change the age group from the drop down', () => {
        editDetails.editDetailsScreen()
        editDetails.elements.getAgeDropdown().click()
        editDetails.elements.getChangeAgeValue().click()
    })
    it('Verify user should be able to change the years of experience as a freelancing from the drop down', () => {
        editDetails.editDetailsScreen()
        editDetails.elements.getYearsOfFreelancingDropDown().click()
        editDetails.elements.getChangeFreelancingValue().click()
    })
    it('Verify the toast message when user save the changes', () => {
        editDetails.editDetailsScreen()
        editDetails.elements.getBioField().clear().type(userData.updatedBio)
        editDetails.elements.getSaveButton().click()
        editDetails.elements.getUpdateDetailsToastMsg().should('be.visible')
    })
    // it.only('Verify user should be able to upload the image', () => {
    //     const filePath = "Test.png"

    //     editDetails.editDetailsScreen()
    //     editDetails.elements.getUploadImage().attachFile(filePath)
    //     editDetails.elements.getSaveButton().click({force:true})
    //     editDetails.elements.getUpdateDetailsToastMsg().should('be.visible')
    // })





})