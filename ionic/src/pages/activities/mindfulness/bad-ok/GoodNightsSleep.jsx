import React from 'react';
import Activity from '../../Activity'
import { TameYourGut } from '../../utils/Credits'

// don't change this string lightly - it's used to store activity favourites and history
const activityId = "GoodNightsSleep"

export default function ThisActivity(props) {
  return (
    <Activity
      title="A good night's sleep"
      listSubtitle=""

      duration=""

      image="Get-a-goodnight-sleep.png"

      {...props} {...{ activityId }}
    >
      <p>
        You are more likely to have trouble getting to slepp if you lie in bed worrying about not
        sleeping. What is the worst thing that could happen if you don't go to sleep tonight?
        You will not die from lack of sleep. You will not go crazy from not sleeping tonight.
        You will be a bit tired tomorrow, however, just like you might have been in the past
        when you stayed up late for a party of had to care for a sick child throughout the night.
        You will make it htrough the day even though you are feeling tired. Worrying about it won't change it. Try telling yourself that "It's ok if I don't sleep, I'll just lie here and have a peaceful rest. Resting is good for me too."
      </p>

      <p>
          Remember that it is normal to wake a few times during the night. Don't stress yourself out by lying in bed worrying about how often you wake up or how hard is will be to go back to sleep.
      </p>

        <p>
          Try using breathing exercises or relaxtion to help you avoid worrying in bed. If you are having trouble getting back to sleep and can feel yourself starting to worry, relaxtion exercises can help block these worrying thoughts and can also help to calm your body and mind.
        </p>


        <p>
          Some people like to remember something pleasant they have seen or done, or ot imagine a situation that they would like to experience. Some people find it helpful to do breathing exercises while imagining a pleasant scene - this helps both the body and mind to relax.
      </p>

        <p>
          Try listen to your favourite relaxation music (i.e., waves breaking on the shore or rainforest sounds). Some people find it helpful to listen to while falling asleep.
        </p>

        <p>
          When we lie in bed desperately trying to go to sleep, we usually find it more difficult to relax and drop off to sleep. Trying too hard can make it more difficult. Try letting go of your conscious mind and just relaxing. "Today's finished, it's time to switch off, let go."
        </p>


        <TameYourGut />
    </Activity>
  )
}
ThisActivity.activityId = activityId