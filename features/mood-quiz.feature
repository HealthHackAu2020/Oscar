Feature: Mood Quiz

    As a young adult with IBD, I want to see how to control my emotion, so that breathing/mindfulness can be suggested depending on condition.

    @github-4
    Scenario: Daily mood quiz

        Given the IBD sufferer is logged in
        When they haven't completed a mood quiz for the day
        Then they will be presented with a mental and physical mood questionnaire before anything else
        And be presented with activities after the questionnaire