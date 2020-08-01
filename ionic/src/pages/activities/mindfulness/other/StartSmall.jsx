import React from 'react';
import Activity from '../../Activity'
import { AnxietyCanada } from '../../utils/Credits'

// don't change this string lightly - it's used to store activity favourites and history
const activityId = "StartSmall" 

export default function ThisActivity(props) {
  return (
    <Activity
      title="Start small"
      listSubtitle=""

      duration=""

      image="Start-small.png"

      {...props} {...{activityId}}
    >
      <p>
        Making small changes can have a large impact on your
        life. Don’t try to do everything all at once. Instead, pick one or two
        things and try them consistently. 
      </p>


      <AnxietyCanada />
    </Activity>
  )
}
ThisActivity.activityId = activityId