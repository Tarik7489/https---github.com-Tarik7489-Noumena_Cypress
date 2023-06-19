
import LoginPage from "../support/PageClass/LoginPage";
import CommunityPostPage from "../support/PageClass/CommunityPostPage";


const login = new LoginPage()
const community = new CommunityPostPage()

const postText = require('../fixtures/userdata.json')[8];
const link = require('../fixtures/userdata.json')[26];

describe('Community Post', function () {

    beforeEach(() => {
        cy.visit(Cypress.env(Cypress.env('envurl')))
        login.reusedLoginMethod()

    });
    let userData
    before(() => {

        cy.fixture('testData.json').then(function (data) {
            userData = data
        })
    })


    it('Verify Filter - All posts, Noumena Announcements', function () {
        community.elements.getCommunityTab().click();
        community.elements.getAllPostTab().should('be.visible')
        community.elements.GetNoumenaAnnouncementsTab().should('be.visible')
        cy.url().should('include', 'community')


    })
    it('Verify Create Post - Text', function () {
        community.createPost(postText.post)


    })
    it('Verify Create Post - with Link', function () {
        community.elements.getCommunityTab().click({force:true})
        community.elements.getCreatePostField().click()
        community.elements.getWhatOnYourMindPlacehonder().type(userData.link)
        community.elements.getPostBtn().click()
        community.elements.getToastMessage().should('be.visible')

    })
    it('Verify Create Post - with Empty text', function () {
        community.elements.getCommunityTab().click()
        community.elements.getCreatePostField().click()
        community.elements.getPostBtn().should('be.disabled')

    })

    it('Verify Create Post-upload large file Image', function () {

        const filePath = 'Test.png'

        community.elements.getCommunityTab().click();
        community.elements.getCreatePostField().click();
        community.elements.getWhatOnYourMindPlacehonder().type(userData.communityPost);
        community.elements.getUploadImage().attachFile(filePath);
        cy.intercept({
            "url": "https://events.launchdarkly.com/events/bulk/62845185262773159d06954b",
            "method": "Post"
        }).as('imageLoad')
        cy.wait('@imageLoad')
        cy.wait(10000)
        community.elements.getPostBtn().click();
        community.elements.getToastMessage().should('be.visible');

    })
    xit('Verify Create Post-upload large file Video', function () {

        const filePath = 'Testvideo.mp4'

        community.elements.getCommunityTab().click();
        community.elements.getCreatePostField().click();
        community.elements.getWhatOnYourMindPlacehonder().type(userData.communityPost);
        community.elements.getUploadImage().attachFile(filePath);
        cy.intercept({
            "url": "https://nouqa-api.noumenati.com/api/v1/query",
            "method": "Post"
        }).as('videoLoad')
        cy.wait('@videoLoad')
        cy.wait(10000)
        community.elements.getPostBtn().click();
        // community.elements.getToastMsgforVideoUpload().should('be.visible')

    })

    xit('Verify Create Post- upload Image with links', function () {

        const filePath = 'Test.png'

        community.elements.getCommunityTab().click();
        community.elements.getCreatePostField().click();
        community.elements.getWhatOnYourMindPlacehonder().type(userData.link)
        cy.wait(4000)
        community.elements.getUploadImage().attachFile(filePath);
        cy.intercept({
            "url": "https://events.launchdarkly.com/events/bulk/62845185262773159d06954b",
            "method": "Post"
        }).as('imageLoad')
        cy.wait('@imageLoad')
        cy.wait(10000)
        community.elements.getPostBtn().click();
        community.elements.getToastMessage().should('be.visible');

    })

    it('Verify Create Post - large Text (200 Chars)', function () {

        community.createPost(userData.largeText)

    })
    it('Verify Create Post - Text with single links', function () {

        community.elements.getCommunityTab().click()
        community.elements.getCreatePostField().click()
        community.elements.getWhatOnYourMindPlacehonder().type(userData.communityPost).type('{enter}').type(userData.link)
        community.elements.getPostBtn().click()
        community.elements.getToastMessage().should('be.visible')

    })
    it('Verify Create Post - Text with multiples links', function () {

        community.elements.getCommunityTab().click()
        community.elements.getCreatePostField().click()
        community.elements.getWhatOnYourMindPlacehonder().type(userData.communityPost).type('{enter}').type(userData.link).type('{enter}').type(userData.link).type('{enter}').type(userData.link).type('{enter}').type(userData.link)
        community.elements.getPostBtn().click()
        community.elements.getToastMessage().should('be.visible')

    })

    it('Verify Create Post - Multiples Text with Single link', function () {

        community.elements.getCommunityTab().click()
        community.elements.getCreatePostField().click()
        community.elements.getWhatOnYourMindPlacehonder().type(userData.communityPost).type('{enter}').type(userData.communityPost).type('{enter}').type(userData.communityPost).type('{enter}').type(userData.communityPost).type('{enter}').type(userData.link)
        community.elements.getPostBtn().click()
        community.elements.getToastMessage().should('be.visible')

    })
    it('Verify Create Post - Multiples Text with Multiples links', function () {

        community.elements.getCommunityTab().click()
        community.elements.getCreatePostField().click()
        community.elements.getWhatOnYourMindPlacehonder().type(userData.communityPost).type('{enter}').type(userData.communityPost).type('{enter}').type(userData.communityPost).type('{enter}').type(userData.communityPost).type('{enter}').type(userData.link).type('{enter}').type(userData.link).type('{enter}').type(userData.link).type('{enter}').type(userData.link)
        community.elements.getPostBtn().click()
        community.elements.getToastMessage().should('be.visible')

    })

    it('Verify Create Post - Tag single user', function () {

        community.elements.getCommunityTab().click()
        community.elements.getCreatePostField().click()
        community.elements.getWhatOnYourMindPlacehonder().type(userData.taggedUser)
        community.elements.getTaggedUser().click({ force: true })
        community.elements.getPostBtn().click()
        community.elements.getToastMessage().should('be.visible')

    })
    it('Verify Create Post - Navigate to tagged user noum', function () {

        community.elements.getCommunityTab().click()
        community.elements.getCreatePostField().click()
        community.elements.getWhatOnYourMindPlacehonder().type(userData.communityPost).type('{enter}').type(userData.taggedUser)
        community.elements.getTaggedUser().click({ force: true })
        cy.contains('Messages').should('be.visible')

    });
    it('Verify - Cancel the post', function () {

        community.elements.getCommunityTab().click()
        community.elements.getCreatePostField().click()
        community.elements.getCrossIconForPostModal().click()
        community.elements.GetNoumenaAnnouncementsTab().should('be.visible')

    });
    it('Verify - Like/Unliked other post', function () {

        community.elements.getCommunityTab().click({ force: true })
        community.elements.getLiked().first().click({multiple:true})
        community.elements.getLiked().first().click({multiple:true})

    });
    it('Verify - Comment to other Post', function () {

        community.elements.getCommunityTab().click({ force: true })
        community.elements.getComment1Tab().first().click({multiple:true})
        community.elements.getCommentTextArea().type(userData.comment)
        community.elements.getSendCommentBtn().click()
    });
    it('Verify - Reply to other Post', function () {

        community.elements.getCommunityTab().click({ force: true })
        community.elements.getComment1Tab().first().click({multiple:true})
        community.elements.getCommentTextArea().type(userData.comment)
        community.elements.getSendCommentBtn().click()
        community.elements.getReplyTab().click()
        community.elements.getReplyTextArea().type(userData.reply)

    })
    it('Verify - Report Post', function () {

        community.elements.getCommunityTab().click({ force: true })
        community.elements.getThreeDots().first().click({multiple:true})
        community.elements.getReportModal().click()
        community.elements.getReportReason().click()
        community.elements.getReportBtn().click()
        community.elements.getReportToastMsg().should('be.visible')
    })
    it('Verify - Edit Post', function () {
        community.createPost(postText.post)
        community.elements.getEditThreeDots().eq(1).click({multiple:true})
        community.elements.getEditBtn().click()
        community.elements.getPostBtn().click()
        community.elements.getUpdatePostToastMsg().should('be.visible')

    })
    it('Verify - Delete Post', function () {
        community.createPost(postText.post)
        community.elements.getEditThreeDots().eq(1).click({multiple:true})
        community.elements.getDeleteOption().click()
        community.elements.getDeleteBtn().click()
        community.elements.getDeltePostToastMsg().should('be.visible')

    })
})
