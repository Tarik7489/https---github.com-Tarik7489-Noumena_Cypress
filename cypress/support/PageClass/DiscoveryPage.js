class DiscoveryPage{
    elements={


        getDiscoveryTab:()=>cy.contains('Discovery'),
        getAllTab:()=>cy.contains('All'),
        getNoumSpaceTab:()=>cy.contains('Noum Spaces'),
        getMembersTab:()=>cy.contains('Members'),
        getNewNoumHeaderText:()=>cy.contains('New Noums for You'),
        getFeaturedTab:()=>cy.contains('Featured'),
        getMyCircleTab:()=>cy.contains('My Circle'),
        getPopularTab:()=>cy.contains('Popular'),
        getNextArrow:()=>cy.get(':nth-child(1) > [data-testid="slider"] > [data-testid="sliderheader"] > [data-test="SliderHeader-RecommendedSectionHeader"] > [data-testid="slidercontrols"] > [data-testid="next"]')

    }
}
export default DiscoveryPage