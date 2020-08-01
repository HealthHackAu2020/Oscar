import React from 'react';
import Activity from '../../Activity'
import { TameYourGut } from '../../utils/Credits'

// don't change this string lightly - it's used to store activity favourites and history
const activityId = "TimeToBoogie" 

export default function ThisActivity(props) {
  return (
    <Activity
      title="Time to boogie"
      listSubtitle=""

      duration=""

      image="Have-a-boogie.png"

      {...props} {...{activityId}}
    >
      <p>
        Immerse yourself in <strong>MUSIC</strong>.  Don’t play sad music if you are sad. Get out something dramatic, uplifting or just plain fun.
      </p>


      <TameYourGut />
    </Activity>
  )
}
ThisActivity.activityId = activityId