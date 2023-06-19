import LoginPage from "../support/PageClass/LoginPage";
import DiscoveryPage from "../support/PageClass/DiscoveryPage";

const login=new LoginPage()
const discovery=new DiscoveryPage()

describe('Discovery',()=>{

    beforeEach(()=>{

        cy.visit(Cypress.env(Cypress.env('envurl')))
        login.reusedLoginMethod()
    });
it('Verify - User should be able to see and clicks on All tab',()=>{

    discovery.elements.getDiscoveryTab().click({force:true})
    discovery.elements.getAllTab().should('be.visible')
    discovery.elements.getAllTab().click()
})
it('Verify - User should be able to see and clicks on Members tab',()=>{

    discovery.elements.getDiscoveryTab().click({force:true})
    discovery.elements.getMembersTab().should('be.visible')
    discovery.elements.getMembersTab().click()
})
it('Verify the URL when user navigate to discovery page',()=>{

    discovery.elements.getDiscoveryTab().click({force:true})
    cy.url().should('include','/discovery')
})
it('Verify - User should be able to see the New Noums header',()=>{

    discovery.elements.getDiscoveryTab().click({force:true})
    discovery.elements.getNewNoumHeaderText().should('be.visible')
})
it('Verify - User should be able to see the Featured noums',()=>{

    discovery.elements.getDiscoveryTab().click({force:true})
    discovery.elements.getFeaturedTab().should('be.visible')
})
it('Verify - User should be able to see the My Circle noums',()=>{

    discovery.elements.getDiscoveryTab().click({force:true})
    discovery.elements.getMyCircleTab().should('exist').and('be.visible')
})
it('Verify - User should be able to see the Popular noums',()=>{

    discovery.elements.getDiscoveryTab().click({force:true})
    discovery.elements.getPopularTab().should('exist').and('be.visible')
})
})


