import React from 'react';
import Activity from '../../Activity'
import { TameYourGut } from '../../utils/Credits'

// don't change this string lightly - it's used to store activity favourites and history
const activityId = "HaveAGoodCry" 

export default function ThisActivity(props) {
  return (
    <Activity
      title="Have a good cry"
      listSubtitle=""

      duration=""

      image="Have-a-good-cry.png"

      {...props} {...{activityId}}
    >
      <p>
        Allow yourself the luxury of a good cry or a good rage from time to time. It is important.
      </p>


      <TameYourGut />
    </Activity>
  )
}
ThisActivity.activityId = activityId