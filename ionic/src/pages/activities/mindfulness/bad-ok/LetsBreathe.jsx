import React from 'react';
import Activity from '../../Activity'
import { TameYourGut } from '../../utils/Credits'

// don't change this string lightly - it's used to store activity favourites and history
const activityId = "LetsBreathe"

export default function ThisActivity(props) {
  return (
    <Activity
      title="Let's just breathe"
      listSubtitle=""

      duration=""

      image="Lets-just-breathe.png"

      {...props} {...{ activityId }}
    >
      <p>
        Calm breathing involves taking smooth, slow, and regular breaths. Sitting upright is
        usually better than lying down or slouching, because it can increase the capacity of your
        lungs to fill with air. It is best to 'take the weight' off your shoulders by supporting your
        arms on the side-arms of a chair, or on your lap.
      </p>

      <ol>
        <li>Take a slow breath in through the nose, breathing into your lower belly (for about 4 seconds)</li>
        <li>Hold your breath for 1 or 2 seconds</li>
        <li>Exhale slowly through the mouth (for about 4 seconds)</li>
        <li>Wait a few seconds before taking another breath</li>
      </ol>

      <p>
        About 6-8 breathing cycles per minute is often helpful to decrease anxiety, but find your
        own comfortable breathing rhythm. These cycles regulate the amount of oxygen you
        take in so that you do not experience the fainting, tingling, and giddy sensations that are
        sometimes associated with overbreathing.
      </p>


      <TameYourGut />
    </Activity>
  )
}
ThisActivity.activityId = activityId