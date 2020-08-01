import React from 'react';
import Activity from '../../Activity'
import { AnxietyCanada } from '../../utils/Credits'

// don't change this string lightly - it's used to store activity favourites and history
const activityId = "WriteItDown"

export default function ThisActivity(props) {
  return (
    <Activity
      title="Write it down"
      listSubtitle=""

      duration=""

      image="Write-it-down.png"

      {...props} {...{ activityId }}
    >
      <p>
        When a problem causes you anxiety or stress, it is best to use a pen and paper and to work it out in written form.
      </p>
      <p>
        You are more likely to deal with a problem if it is written down in front of you.
      </p>


      <AnxietyCanada />
    </Activity>
  )
}
ThisActivity.activityId = activityId