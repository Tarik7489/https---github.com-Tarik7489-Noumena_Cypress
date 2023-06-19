import LoginPage from "../support/PageClass/LoginPage";
import NotificationPage from "../support/PageClass/NotificationPage";

const login = new LoginPage()
const notification = new NotificationPage()

describe('Notification', () => {

    beforeEach(() => {
        cy.visit(Cypress.env(Cypress.env('envurl')))
        login.reusedLoginMethod()
    });

    it('Verify user should be able to click on notification bell icon', () => {

        notification.elements.getNotificationIcon().eq(2).click({ force: true })
    })
    it('Verify user should be able to closs the notification side panel',()=>{

        notification.elements.getNotificationIcon().eq(2).click({force:true})
        notification.elements.getCrossIcon().click()
    })
    it('Verify user should be able to see the notification header text',()=>{

        notification.elements.getNotificationIcon().eq(2).click({force:true})
        notification.elements.getNotificationIconText().should('be.visible')
    })
    it('Verify user should be able to see the All tabs',()=>{

        notification.elements.getNotificationIcon().eq(2).click({force:true})
        notification.elements.getAllTabs().should('be.visible')
    })
    it('Verify user should be able to see and clicks on the Noums tabs',()=>{

        notification.elements.getNotificationIcon().eq(2).click({force:true})
        notification.elements.getNoumsTab().click({force:true}).should('be.visible')
    })
    it('Verify user should be able to see and clicks on the Money tabs',()=>{

        notification.elements.getNotificationIcon().eq(2).click({force:true})
        notification.elements.getMoneyTab().click({force:true}).should('be.visible')
    })
    it('Verify user should be able to see and clicks on the Community tabs',()=>{

        notification.elements.getNotificationIcon().eq(2).click({force:true})
        notification.elements.getCommunityTab().click({force:true}).should('be.visible')
    })
    it('Verify user should be able to see and clicks on the Others tabs',()=>{

        notification.elements.getNotificationIcon().eq(2).click({force:true})
        notification.elements.getOtherTab().should('exist').click({force:true})
    })
    it('Verify user should be able to see and clicks on "Mark All As Read" link',()=>{

        notification.elements.getNotificationIcon().eq(2).click({force:true})
        notification.elements.getMarkAllNotiBtn().click().should('be.visible')
    })
    
})