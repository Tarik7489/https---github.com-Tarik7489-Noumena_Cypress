import LoginPage from "../support/PageClass/LoginPage";
import GlobalCalendarPage from "../support/PageClass/GlobalCalendarPage";

const login = new LoginPage()
const event = new GlobalCalendarPage()

describe('Global Events', () => {
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

    it("Verify user should be able to create a instant event without attendee's", () => {
        event.instantEvent()

    })
    it("Verify user should be able to create a instant event with attendee's", () => {
        event.instantEventWithAttendees()

    })
    it("Verify user should be able to create a Schedule Event", () => {
        event.scheduleEvent()

    })
    it("Verify user should be able close the calendar side panel", () => {
        event.elements.getCalandarIcon().click()
        event.elements.getCloseBtnForCalendarSidePanel().click()

    })
    it("Verify user should be able to see the All tab along with upcoming events header", () => {
        event.elements.getCalandarIcon().click()
        event.elements.getAllTab().should('exist')

    })
    it("Verify user should be able to see and clicks on Attending tab", () => {
        event.elements.getCalandarIcon().click()
        event.elements.getAttendingTab().click().should('be.visible')
    })
    it("Verify user should be able to see and clicks on Hosting tab", () => {
        event.elements.getCalandarIcon().click()
        event.elements.getHostingTab().click().should('be.visible')
    })
    it("Verify user should be able to see and clicks on Invites tab", () => {
        event.elements.getCalandarIcon().click()
        event.elements.getInvitesTab().click().should('be.visible')
    })
    it("Verify user should be able to see and clicks on Past tab", () => {
        event.elements.getCalandarIcon().click()
        event.elements.getPastTab().click({ force: true }).should('be.visible')
    })
    it("Verify user should be able to edit and cancel the event", () => {
        event.elements.getCalandarIcon().click()
        event.goLiveState()
        event.elements.getEditEventBtn().click()
        event.elements.enterEventName().clear().type(userData.editEvent)
        event.elements.getSaveChangesBtn().click()
        event.elements.getUpdateEventToastMsg().should('be.visible')

        //cancel the event
        event.elements.getCalandarIcon().click()
        event.elements.getEditEventBtn().click()
        event.elements.getCancelEventBtn().click()
        event.elements.getConfirmCancelEventBtn().click()
        event.elements.getCancelledEventToastMsg().should('be.visible')
    })
    it("Verify user should be able to add the event to the calendar / copy the event link", () => {
        event.elements.getCalandarIcon().click()
        event.goLiveState()
        //copy the event link
        event.elements.getCopySHLinkBtn().click()
        event.elements.getCopyLinkedToastMsg().should('be.visible')

        //Add to calendar
        event.elements.getAddToCalendarBtn().click()

        //cancel the event
        event.elements.getEditEventBtn().click()
        event.elements.getCancelEventBtn().click()
        event.elements.getConfirmCancelEventBtn().click()
        event.elements.getCancelledEventToastMsg().should('be.visible')

    })

})
