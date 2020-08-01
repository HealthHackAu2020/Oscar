import React from 'react';
import Activity from '../../Activity'
import { TameYourGut } from '../../utils/Credits'

// don't change this string lightly - it's used to store activity favourites and history
const activityId = "TakeAStepBack" 

export default function ThisActivity(props) {
  return (
    <Activity
      title="Take a step back"
      listSubtitle=""

      duration=""

      // Note: changed from TODO.png to fix broken link
      image="Relocating-thoughts.png"

      {...props} {...{activityId}}
    >
      <p>
        Do NOT try to resolve domestic conflicts when you are feeling your worst.
        If you do, you may make both the conflict and the pain worse.
        Wait until you feel a bit better and then think about what you want to do.
      </p>


      <TameYourGut />
    </Activity>
  )
}
ThisActivity.activityId = activityId