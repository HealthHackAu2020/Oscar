import React from 'react';
import Activity from '../../Activity'
import { AnxietyCanada } from '../../utils/Credits'

// don't change this string lightly - it's used to store activity favourites and history
const activityId = "BePatient" 

export default function ThisActivity(props) {
  return (
    <Activity
      title="Be patient"
      listSubtitle=""

      duration=""

      image="Be-patient.png"

      {...props} {...{activityId}}
    >
      <p>
        These strategies can take time to have a positive effect. Hang in
there and stick with it! 
      </p>


      <AnxietyCanada />
    </Activity>
  )
}
ThisActivity.activityId = activityId