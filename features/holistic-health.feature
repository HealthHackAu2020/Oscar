Feature: Holistic view of health

    As a patient, I want to track my health and wellbeing, so that I can better myself of the impacts of my diet, physical activity, etc and inform my medical care team

    .Given I am entering my mood daily I expect to see past mood logs to better track emotions

    @github-7
    Scenario: Keep track of health

        Given an IDB sufferer has responded to the daily mood quiz on previous days
        When they select Mood summaries
        Then they can see their previous results against each day in the past