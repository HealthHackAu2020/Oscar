Feature: Connection

    As a young adult with IBD, I want to link to social channels, so that I can belong to a wider community

    Interacting with a wider IBD community will benefit the sense of belonging to others in a similar situation

    @github-3
    Scenario: Further support on IDB

        Given the user is logged in
        And they select "Further support for IDB"
        Then they will be taken to the support page

    @github-2
    Scenario: Navigated to About oscar