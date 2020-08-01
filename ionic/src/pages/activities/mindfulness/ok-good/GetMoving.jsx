import React from 'react';
import Activity from '../../Activity'
import { TameYourGut } from '../../utils/Credits'

// don't change this string lightly - it's used to store activity favourites and history
const activityId = "GetMoving" 

export default function ThisActivity(props) {
  return (
    <Activity
      title="Get moving"
      listSubtitle=""

      duration=""

      image="Get-moving.png"

      {...props} {...{activityId}}
    >
      <p>
        Exercise really does help to release natural painkillers and natural mood lifters.
Regular exercise can have a positive impact on both your emotional and physical health.
In fact, exercise is one of the most powerful tools for managing stress and anxiety. 
      </p>


      <TameYourGut />
    </Activity>
  )
}
ThisActivity.activityId = activityId