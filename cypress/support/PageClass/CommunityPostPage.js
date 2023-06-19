
class CommunityPostPage {

    elements = {
        getCommunityTab: () => cy.contains('Community'),
        getCreatePostField: () => cy.get('div[data-test="Community-StartDiscussion"]'),
        getWhatOnYourMindPlacehonder: () => cy.get('div[aria-describedby="placeholder-editor"]'),
        getPostBtn: () => cy.get('button[data-testid="post_create_btn"]'),
        getToastMessage: () => cy.contains('New Post Published').should('be.visible'),
        getUploadImage: () => cy.get('input[accept="image/png,image/jpg,image/jpeg,video/mp4,video/quicktime"]'),
        getDisabledPostBtn: () => cy.get('button[data-testid="post_create_btn"]').should('not.be.clicked'),
        getAllPostTab: () => cy.contains('All posts').should('be.visible'),
        GetNoumenaAnnouncementsTab: () => cy.contains('Noumena Announcements'),
        getToastMsgforVideoUpload:()=>cy.contains('Noumena will verify video in your post. The video will be hosted permanently on platform only if it meets our verification criteria.'),
        getTaggedUser:()=>cy.contains('Tarik Aziz'),
        getCrossIconForPostModal:()=>cy.get('div[data-test="ModalCloseButton-CloseButtonWrapper"]'),
        
        getLiked:()=>cy.get('[data-test="PostItemFooter-ItemFooter"] > :nth-child(1) > [data-test="PostItemFooter-TSpan"]'),

        getLikeUnlikedBtn:()=> cy.get('.bIHbxI [data-test="PostItemFooter-ItemFooter"] :nth-child(1) [data-test="PostItemFooter-TSpan"]'),
        getComment1Tab:()=>cy.get('[data-test="PostItemFooter-ItemFooter"] :nth-child(3) [data-test="PostItemFooter-TSpan"]'),
        getCommentTab:()=>cy.get('.bIHbxI [data-test="PostItemFooter-ItemFooter"] :nth-child(3) [data-test="PostItemFooter-TSpan"]'),
        getCommentTextArea:()=>cy.get('textarea[data-testid="mentionsInput"]'),
        getSendCommentBtn:()=>cy.get('button[data-testid="comment-item-add-send"]'),
        getReplyTab:()=>cy.get(':nth-child(1) > [data-test="CommentItem-CommentsItemContainer"] > [data-test="CommentItem-CommentsListWrapper"] > [data-test="CommentItem-ButtonWrap"] > [data-test="CommentItem-TSpan"]'),
        getReplyTextArea:()=>cy.get('[data-test="CommentItem-CommentsItemContainer"] > [data-test="CommentsList-CommentsListContainer"] > [data-test="CommentItemAdd-CommentInputContainer"] > [style="width: 0px; flex: 1 1 0%;"] > [data-test="MentionComponent-Wrapper"] > [style="position: relative; overflow-y: visible;"] > [style="background-color: var(--bg-tablecell-neutral-alt-default); font-size: 16px; font-weight: normal; font-family: var(--font-family); min-height: 63px;"] > [data-test="MentionComponent-MentionsInput"]'),
        getThreeDots:()=>cy.get('[data-test="PostItemHead-ItemHead"] > [data-test="DropdownPicker"] > [data-test="Container"] > [data-test="Component"]'),
        getReportModal:()=>cy.contains('Report'),
        getReportReason:()=>cy.get(':nth-child(2) > .huygXG > [data-test="Radiobox-label"] > [data-testid="radio_box"]'),
        getReportBtn:()=>cy.get('button[data-testid="report_submit_btn"]'),
        getReportToastMsg:()=>cy.contains('Post is reported successfully'),
        getEditThreeDots:()=>cy.get('[data-test="PostItemHead-ItemHead"] > [data-test="DropdownPicker"] > [data-test="Container"] > [data-test="Component"]'),
        getEditBtn:()=>cy.contains('Edit'),
        getDeleteOption:()=>cy.contains('Delete'),
        getUpdatePostToastMsg:()=>cy.contains('Post is updated successfully'),
        getDeleteBtn:()=>cy.get('button[data-testid="post_delete_btn"]'),
        getDeltePostToastMsg:()=>cy.contains('Post is deleted successfully')





    }
    createPost(post) {
       
            this.elements.getCommunityTab().click({force:true})
            this.elements.getCreatePostField().click()

            this.elements.getWhatOnYourMindPlacehonder().type(post)
            this.elements.getPostBtn().click()
            this.elements.getToastMessage()

    };
    VerifyCreatePostWitEmptyText() {
        this.elements.getCommunityTab().click({force:true});
        post.getCreatePostField().click();
        post.getDisabledPostBtn().should('be.disabled')
    }
}
export default CommunityPostPage