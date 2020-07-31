Feature: Mindfulness activities

    As a young person recently diagnosed with IBD, I want information and activities (that appeal to me) to help me manage, so that I suffer less

    As an IBD expert, I want to understand negative emotion. So that, I can direct my users to the right exercises

    As a person with IBD, I want to find information about mindfulness, so that I can understand my current feelings without judgement

    Detailed content is documented at https://docs.google.com/spreadsheets/d/1rQZqIkCw2YfRD4jz1i1_e-IFCGYrusG6/edit#gid=1338285110

    Rule: Displaying done screen

        Example:
            Given all activites for the day are marked as completed
            When the final activity is done
            Then the done screen would display

    Scenario Outline: Mindfullness activities based on mood

        Given the IBD sufferer has completed the gaily mood quiz
        When they have a physical recording of <physicalResult> and a mental recording of <mentalResult>
        Then one of the included suggestions would be <suggestion>
        
        Examples:
            | physicalResult | mentalResult | suggestion |
            | good | good | support network | 
            | good | good | positive real talk |
            | good | good | meeting new people |
            | good | good | manage your time |
            | good | good | get out of the house |
            | good | good | have some fun |
            | bad | ok | overcoming fear |
            | bad | ok | relocating thoughts |
            | bad | ok | coping statements |
            | bad | ok | facing fears |
            | bad | ok | safety behaviours |
            | bad | ok | let other's in |
            | ok | bad | pain free room |
            | ok | bad | a good night sleep |
            | ok | bad | realistic thinking |
            | ok | bad | let's just breathe |
            | ok | bad | have a good cry |
            | bad | bad | pain free sensations |
            | bad | bad | relocating thoughts |
            | bad | bad | temperature control |
            | bad | bad | entertain yourself |
            | ok | ok | object control |
            | ok | ok | time to boogie |
            | good | ok | get moving |
            | good | ok | reminisce |
            | good | bad | reduce stress |
            | good | bad | write it down |
            | good | bad | get out of the house |
            | bad | good | take a minute |
            | bad | good | support network |
            | anything | anything | be patient |
            | anything | anything | start small |
            | anything | anything | use your feelings |
            | anything | anything | problem solving |
            | anything | anything | take a step back |
