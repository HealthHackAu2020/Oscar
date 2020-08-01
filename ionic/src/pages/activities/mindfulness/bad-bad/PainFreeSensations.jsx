import React from 'react';
import Activity from '../../Activity'
import { TameYourGut } from '../../utils/Credits'

// don't change this string lightly - it's used to store activity favourites and history
const activityId = "PainFreeSensations"

export default function ThisActivity(props) {
  return (
    <Activity
      title="Pain free sensations"
      listSubtitle=""
      duration=""

      image="Pain-free-sensations.png"

      {...props} {...{ activityId }}
    >
      <p>
        Pay attention to your body and notice any part of it
        that is not currently painful. Concentrate on that part of your body that is pain free. Notice
        what is happening to that part of your body; its temperature, movements, appearance,
        joints, nerves, skin, blood pulsing and so on. When you feel familiar with these non-painful
        sensations, imagine them spreading, slowly but surely out and away from where they
        started. Imagine the warmth, the smoothing of tense muscles, the regular pulse of the
        blood moving through your veins as it moves through your body, easing away the pain.
      </p>

      <p>
        This one takes some practice! Start small, see if you can spread the pain-free area by a few
        centimetres at first and slowly build up, as you become more comfortable with the
        technique.
      </p>



      <TameYourGut />
    </Activity>
  )
}
ThisActivity.activityId = activityId