Feature: Inspiration and quotes

    As a young adult with IBD, I want to view suggested tips and quotes, so that, I can feel reassured and motivated

    As a patient, I want random daily/weekly quotes, so that, my days/ weeks start in a humorous and light-hearted way

    By viewing quotes I will gain inspiration with my illness to get me through tough days

    As an application author, I want my users to be encouraged to use the app everyday. So that, they get the benefit of usage

    @github-8
    Scenario: Home page

        Given an IBD sufferer has done the daily mood quiz
        When on the home page
        Then they will see the date
        And a personalised greeting
        And a comment about how they are feeling

    @github-6
    Scenario: Quote of the day

        Given it's a new day
        When on the home page
        Then a new quote will be shown
