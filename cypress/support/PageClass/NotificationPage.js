class NotificationPage{
    elements={
        getNotificationIcon:()=>cy.get('div[data-test="MainHeaderInner-IconContainer"]'),
        getAllTabs:()=>cy.get('input[name="All"]'),
        getNoumsTab:()=>cy.get('input[name="Noums"]'),
        getMoneyTab:()=>cy.get('input[name="Money"]'),
        getCommunityTab:()=>cy.get('input[name="Community"]'),
        getOtherTab:()=>cy.get('input[name="Other"]'),
        getCrossIcon:()=>cy.get('[data-test="Breadcrumbs-StyledWrapper"] > :nth-child(1)'),
        getMarkAllNotiBtn:()=>cy.contains('Mark All as Read'),
        getNotificationIconText:()=>cy.contains('Notifications')

    }
}

export default NotificationPage