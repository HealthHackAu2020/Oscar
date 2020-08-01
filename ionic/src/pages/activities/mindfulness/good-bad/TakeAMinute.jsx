import React from 'react';
import Activity from '../../Activity'
import { AnxietyCanada } from '../../utils/Credits'

// don't change this string lightly - it's used to store activity favourites and history
const activityId = "TakeAMinute" 

export default function ThisActivity(props) {
  return (
    <Activity
      title="Take a minute"
      listSubtitle=""

      duration=""

      // Note: changed from TODO.png to fix broken link
      image="Lets-just-breathe.png"

      {...props} {...{activityId}}
    >
      <p>
        Try calm breathing for at least five minutes twice a day
      </p>


      <AnxietyCanada />
    </Activity>
  )
}
ThisActivity.activityId = activityId