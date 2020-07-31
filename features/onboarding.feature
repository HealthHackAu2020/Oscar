Feature: Onboarding

    @github-12
    Scenario: Onboarding

        Given the user has hit any Oscar link
        When the user is using the app for the first-time
        Then they will be presented with an option to "Login" or "Register"
        And upon registration or login they will presented with the mood quiz 

    @github-5
    Scenario: Loading screen

        Given a request has been submitted
        When the next page is not ready
        Then it will show an interesting loading screen so that the user is getting feedback that something is happening

    @github-1
    Scenario: Welcome screens
