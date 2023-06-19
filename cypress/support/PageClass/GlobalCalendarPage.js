class GlobalCalendarPage {
    elements = {
        getCalandarIcon: () => cy.get('[data-test="MainHeaderInner-NotificationWrapper"] > :nth-child(2)'),
        getPlusIcon: () => cy.get(':nth-child(3) > [data-test="Button-ButtonStyled"]'),
        getAllTab: () => cy.contains('All'),
        getAttendingTab: () => cy.contains('Attending'),
        getHostingTab: () => cy.contains('Hosting'),
        getInvitesTab: () => cy.contains('Invites'),
        getPastTab: () => cy.contains('Past'),
        getLeftRightArrows: () => cy.get('div[data-test="BasicChipsTabsForm-LeftButton"]'),


        getStartNowBtn: () => cy.contains('Start now'),
        getStartEventBtn: () => cy.contains('Start Event'),
        getEndEventBtn: () => cy.contains('End the Event'),
        getConfirmEndEventBtn: () => cy.contains('Yes, End the Event'),
        verifyToastMessage: () => cy.contains('Your event has been canceled.').should('be.visible'),
        getSearchField: () => cy.get('input[placeholder="Select member(s) to invite"]'),
        selectMonsterKing: () => cy.contains('Monster King'),

        clkScheduleBtn: () => cy.get('.dyLQeE > .sc-iveFHk > .sc-gikAfH > .sc-ezOQGI'),
        enterEventName: () => cy.get('input[name="title"]'),
        enterDes: () => cy.get('textarea[name="description"]'),
        getEventTime: () => cy.get('input[placeholder="HH:MM AM/PM"]'),
        SelectFirstTimeZone: () => cy.get('div[data-test="EventTimePicker-EventTimeOption"]:first-child'),
        clkCreateEventBtn: () => cy.get('button[data-testid="create-event-button"]'),
        verifyPublishedToastMessage: () => cy.contains('Event Published').should('be.visible'),
        clkHostingTab: () => cy.contains('Hosting'),
        clkGoLiveBtn: () => cy.contains('Go Live!'),
        clkMicOffBtn: () => cy.get('div[data-title="Mic On"]'),
        clkRaisedHandBtn: () => cy.get('div[data-title="Raise Hand"]'),
        clkMembersTab: () => cy.get('div[data-title="Members"]'),
        verifyStageHeaderText: () => cy.contains('Stage').should('be.visible'),
        clkEndTheEventBtn: () => cy.contains('End the Event'),
        clkConfirmEndEventBtn: () => cy.contains('Yes, End the Event'),
        verifyCLoseEevntToastMessage: () => cy.contains('Your event has been canceled.').should('be.visible'),
        getCloseBtnForCalendarSidePanel: () => cy.get('[data-test="Breadcrumbs-StyledWrapper"] > :nth-child(1)'),
        getUpcomingEventsHeader: () => cy.contains('Upcoming events'),
        getAddToCalendarBtn: () => cy.get('button[data-title="Add to Calendar"]'),
        getCopySHLinkBtn: () => cy.get('button[data-title="Copy Link"]'),
        getEditEventBtn: () => cy.get('button[data-testid="edit-event-button"]'),
        getGoogleCalendar: () => cy.contains('Google'),
        getAppleCalendar: () => cy.contains('Apple'),
        getOutlookCalendar: () => cy.contains('Outlook.com'),
        getCopyLinkedToastMsg: () => cy.contains('Link copied.'),
        getCancelModalButton: () => cy.contains('Cancel'),
        getCancelEventBtn: () => cy.contains('Cancel the Event'),
        getConfirmCancelEventBtn: () => cy.get('button[data-testid="confirm-button"]'),
        getCancelledEventToastMsg: () => cy.contains('Event Canceled'),
        getUpdateEventToastMsg: () => cy.contains('Event Updated'),
        getSaveChangesBtn:()=>cy.contains('Save Changes')


    }
    instantEvent() {
        this.elements.getCalandarIcon().click({ force: true })
        this.elements.getPlusIcon().click()
        this.elements.getStartNowBtn().click()
        this.elements.getStartEventBtn().click()
        cy.intercept({
            "url": "https://nouqa-api.noumenati.com/api/v1/query",
            "method": "POST"
        }).as('loadEvent')
        cy.wait('@loadEvent')
        cy.wait(12000)
        this.elements.getEndEventBtn().click()
        this.elements.getConfirmEndEventBtn().click()
        this.elements.verifyToastMessage()
    }

    instantEventWithAttendees() {
        cy.fixture('testData.json').then(testData => {
            this.elements.getCalandarIcon().click({ force: true })
            this.elements.getPlusIcon().click()
            this.elements.getStartNowBtn().click()
            this.elements.getSearchField().type(testData.searchInvitee)
            this.elements.selectMonsterKing().click()
            this.elements.getStartEventBtn().click({ force: true })
            cy.intercept({
                "url": "https://nouqa-api.noumenati.com/api/v1/query",
                "method": "POST"
            }).as('loadEvent')
            cy.wait('@loadEvent')
            cy.wait(12000)
            this.elements.getEndEventBtn().click()
            this.elements.getConfirmEndEventBtn().click()
            this.elements.verifyToastMessage()
        })
    }
    goLiveState() {
        cy.fixture('testData.json').then((testData => {
            this.elements.getCalandarIcon().click({ force: true })
            this.elements.getPlusIcon().click()
            this.elements.clkScheduleBtn().click({ force: true })
            this.elements.enterEventName().type(testData.eventName)
            this.elements.enterDes().type(testData.eventDesc)
            this.elements.getEventTime().click()
            this.elements.SelectFirstTimeZone().click({ force: true })
            this.elements.clkCreateEventBtn().click()
            this.elements.verifyPublishedToastMessage()
            this.elements.clkHostingTab().click()

    }))
}
    scheduleEvent() {

        cy.fixture('testData.json').then((testData => {
            this.elements.getCalandarIcon().click({ force: true })
            this.elements.getPlusIcon().click()
            this.elements.clkScheduleBtn().click({ force: true })
            this.elements.enterEventName().type(testData.eventName)
            this.elements.enterDes().type(testData.eventDesc)
            this.elements.getEventTime().click()
            this.elements.SelectFirstTimeZone().click({ force: true })
            this.elements.clkCreateEventBtn().click()
            this.elements.verifyPublishedToastMessage()
            this.elements.clkHostingTab().click()
            this.elements.clkGoLiveBtn().click()
            cy.intercept({
                "url": "https://nouqa-api.noumenati.com/api/v1/query",
                "method": "POST"
            }).as('loadEvent')
            cy.wait('@loadEvent')
            cy.wait(7000)
            this.elements.clkMicOffBtn().click()
            this.elements.clkRaisedHandBtn().click()
            this.elements.clkMembersTab().click()
            this.elements.verifyStageHeaderText()
            this.elements.clkEndTheEventBtn().click()
            this.elements.clkConfirmEndEventBtn().click()
            this.elements.verifyCLoseEevntToastMessage()
        }))

        
    }

    
}
export default GlobalCalendarPage
