import LoginPage from "../support/PageClass/LoginPage";
import ProjectNoumPage from "../support/PageClass/ProjectNoumPage";

const login = new LoginPage()
const noum = new ProjectNoumPage()

const project = require('../fixtures/userData.json')[9]
const social = require('../fixtures/userData.json')[10]
const investment = require('../fixtures/userData.json')[11]
const story = require('../fixtures/userData.json')[12]
const special = require('../fixtures/userData.json')[13]
const public1 = require('../fixtures/userData.json')[14]
const public2 = require('../fixtures/userData.json')[15]
const public3 = require('../fixtures/userData.json')[16]
const public4 = require('../fixtures/userData.json')[17]
const public5 = require('../fixtures/userData.json')[18]
const secret1 = require('../fixtures/userData.json')[19]
const secret2 = require('../fixtures/userData.json')[20]
const secret3 = require('../fixtures/userData.json')[21]
const secret4 = require('../fixtures/userData.json')[22]
const secret5 = require('../fixtures/userData.json')[23]
const noumImage = require('../fixtures/userData.json')[24]

describe('Project Noums', () => {

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
    it('Verify create a private project noum without image', () => {
        noum.createNoumModal(project.projectNoum, project.desc)
        noum.elements.getCreateNoumBtn().click()
        noum.elements.getCreateNoumToastMessage().should('be.visible')
        noum.publishNoumFlow()
    })
    it('Verify create a  private Social noum without image', () => {
        noum.createNoumModal(social.socialNoum, social.desc)
        noum.elements.getProjectDropdown().click()
        noum.elements.getSocial().click()
        noum.elements.getCreateNoumBtn().click()
        noum.elements.getCreateNoumToastMessage().should('be.visible')
        noum.publishNoumFlow()

    })
    it('Verify create a  private Investment noum without image', () => {
        noum.createNoumModal(investment.investmentNoum, investment.desc)
        noum.elements.getProjectDropdown().click()
        noum.elements.getInvestment().click()
        noum.elements.getCreateNoumBtn().click()
        noum.elements.getCreateNoumToastMessage().should('be.visible')
        noum.publishNoumFlow()

    })
    it('Verify create a  private Story noum without image', () => {
        noum.createNoumModal(story.storyNoum, story.desc)
        noum.elements.getProjectDropdown().click()
        noum.elements.getStory().click()
        noum.elements.getCreateNoumBtn().click()
        noum.elements.getCreateNoumToastMessage().should('be.visible')
        noum.publishNoumFlow()

    })
    it('Verify create a  private Special noum without image', () => {
        noum.createNoumModal(special.specialNoum, story.desc)
        noum.elements.getProjectDropdown().click()
        noum.elements.getSpecial().click()
        noum.elements.getCreateNoumBtn().click()
        noum.elements.getCreateNoumToastMessage().should('be.visible')
        noum.publishNoumFlow()

    })

    //visibility changed
    it('Verify create a  Public Project noum without image', () => {
        noum.createNoumModal(public1.publicNoum1, public1.desc)
        noum.elements.getVisibilityDropDown().click()
        noum.elements.getPublicNoum().click()
        noum.elements.getCreateNoumBtn().click()
        noum.elements.getCreateNoumToastMessage().should('be.visible')
        noum.publishNoumFlow()

    })
    it('Verify create a  Public Social noum without image', () => {
        noum.createNoumModal(public2.publicNoum2, public1.desc)
        noum.elements.getProjectDropdown().click()
        noum.elements.getSocial().click()
        noum.elements.getVisibilityDropDown().click()
        noum.elements.getPublicNoum().click()
        noum.elements.getCreateNoumBtn().click()
        noum.elements.getCreateNoumToastMessage().should('be.visible')
        noum.publishNoumFlow()

    })
    it('Verify create a  Public Investment noum without image', () => {
        noum.createNoumModal(public3.publicNoum3, public1.desc)
        noum.elements.getProjectDropdown().click()
        noum.elements.getInvestment().click()
        noum.elements.getVisibilityDropDown().click()
        noum.elements.getPublicNoum().click()
        noum.elements.getCreateNoumBtn().click()
        noum.elements.getCreateNoumToastMessage().should('be.visible')
        noum.publishNoumFlow()

    })
    it('Verify create a  Public Story noum without image', () => {
        noum.createNoumModal(public4.publicNoum4, public1.desc)
        noum.elements.getProjectDropdown().click()
        noum.elements.getStory().click()
        noum.elements.getVisibilityDropDown().click()
        noum.elements.getPublicNoum().click()
        noum.elements.getCreateNoumBtn().click()
        noum.elements.getCreateNoumToastMessage().should('be.visible')
        noum.publishNoumFlow()

    })
    it('Verify create a Public Special noum without image', () => {
        noum.createNoumModal(public5.publicNoum5, public1.desc)
        noum.elements.getProjectDropdown().click()
        noum.elements.getSpecial().click()
        noum.elements.getVisibilityDropDown().click()
        noum.elements.getPublicNoum().click()
        noum.elements.getCreateNoumBtn().click()
        noum.elements.getCreateNoumToastMessage().should('be.visible')
        noum.publishNoumFlow()

    })

    //Again changed the visibility
    it('Verify create a Secret Project noum without image', () => {
        noum.createNoumModal(secret1.secretNoum1, public1.desc)
        noum.elements.getVisibilityDropDown().click()
        noum.elements.getSecretNoum().click()
        noum.elements.getCreateNoumBtn().click()
        noum.elements.getCreateNoumToastMessage().should('be.visible')
        noum.publishNoumFlow()

    })
    it('Verify create a Secret Social noum without image', () => {
        noum.createNoumModal(secret2.secretNoum2, public1.desc)
        noum.elements.getProjectDropdown().click()
        noum.elements.getSocial().click()
        noum.elements.getVisibilityDropDown().click()
        noum.elements.getSecretNoum().click()
        noum.elements.getCreateNoumBtn().click()
        noum.elements.getCreateNoumToastMessage().should('be.visible')
        noum.publishNoumFlow()

    })
    it('Verify create a Secret Investment noum without image', () => {
        noum.createNoumModal(secret3.secretNoum3, public1.desc)
        noum.elements.getProjectDropdown().click()
        noum.elements.getInvestment().click()
        noum.elements.getVisibilityDropDown().click()
        noum.elements.getSecretNoum().click()
        noum.elements.getCreateNoumBtn().click()
        noum.elements.getCreateNoumToastMessage().should('be.visible')
        noum.publishNoumFlow()

    })
    it('Verify create a Secret Story noum without image', () => {
        noum.createNoumModal(secret4.secretNoum4, public1.desc)
        noum.elements.getProjectDropdown().click()
        noum.elements.getStory().click()
        noum.elements.getVisibilityDropDown().click()
        noum.elements.getSecretNoum().click()
        noum.elements.getCreateNoumBtn().click()
        noum.elements.getCreateNoumToastMessage().should('be.visible')
        noum.publishNoumFlow()

    })
    it('Verify create a Secret Special noum without image', () => {
        noum.createNoumModal(secret5.secretNoum5, public1.desc)
        noum.elements.getProjectDropdown().click()
        noum.elements.getSpecial().click()
        noum.elements.getVisibilityDropDown().click()
        noum.elements.getSecretNoum().click()
        noum.elements.getCreateNoumBtn().click()
        noum.elements.getCreateNoumToastMessage().should('be.visible')
        noum.publishNoumFlow()

    })
    it('Verify user should be able to cancel the noum by clicking on cross icon',()=>{
        noum.elements.getNoumsTab().click({force:true})
        noum.elements.getNewNoumBtn().click({force:true})
        noum.elements.getCreateNoumModalCloseBtn().click()

    })
    it('Verify user should be able to cancel the noum by clicking on Cancel button',()=>{
        noum.elements.getNoumsTab().click({force:true})
        noum.elements.getNewNoumBtn().click({force:true})
        noum.elements.getCancelBtn().click()
    })
    it('Verify by default Create Noum button should be disabled',()=>{
        noum.elements.getNoumsTab().click({force:true})
        noum.elements.getNewNoumBtn().click({force:true})
        noum.elements.getCreateNoumBtn().should('be.disabled')
    })
    it('Verify the error message when field is empty',()=>{
        noum.elements.getNoumsTab().click({force:true})
        noum.elements.getNewNoumBtn().click({force:true})
        noum.elements.getNameField().type(userData.emptyText).clear()
        noum.elements.getEmptyFldErrMsg().should('be.visible')
    })
    it('Verify the error message when user enters too many characters on name field',()=>{
        noum.elements.getNoumsTab().click({force:true})
        noum.elements.getNewNoumBtn().click({force:true})
        noum.elements.getNameField().type(userData.longText)
        noum.elements.getExceddingCharErrMsg().should('be.visible')
    })
    it('Verify the error message for already exist noum',()=>{
        noum.createNoumModal(project.projectNoum, project.desc)
        noum.elements.getCreateNoumBtn().click()
        noum.elements.getErrMsgForAlreadyExistNoum().should('be.visible')
    })
    it('Verify create noum with image',()=>{
        noum.createNoumModal(noumImage.noumName, project.desc)
        noum.uploadImage()
        noum.elements.getCreateNoumBtn().click()
        noum.elements.getCreateNoumToastMessage().should('be.visible')
        noum.publishNoumFlow()

    })
})