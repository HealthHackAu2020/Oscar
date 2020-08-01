import React from 'react';
import Activity from '../../Activity'
import { AnxietyCanada } from '../../utils/Credits'

// don't change this string lightly - it's used to store activity favourites and history
const activityId = "UseYourFeelings"

export default function ThisActivity(props) {
  return (
    <Activity
      title="Use your feelings"
      listSubtitle=""
      duration=""

      image="Use-feelings.png"

      {...props} {...{ activityId }}
    >
      <p>
        We often make the mistake of thinking our negative emotions
        are the problem. This is false! For example, you might think, “the problem is that I
        am always stressed at work” But actually, it is more accurate to say that there is a
        problem at work (such as difficulties with coworkers or a huge workload), which is
        making you feel stressed.
      </p>
      <p>
        Use your negative emotions to guide you: when you
        are feeling anxious, stressed, frustrated, or annoyed in a particular situation, try to
        find the problem that is making you feel that way.
      </p>


      <AnxietyCanada />
    </Activity>
  )
}
ThisActivity.activityId = activityId