import React from 'react';
import Activity from '../../Activity'
import { TameYourGut } from '../../utils/Credits'

// don't change this string lightly - it's used to store activity favourites and history
const activityId = "LetOthersIn" 

export default function ThisActivity(props) {
  return (
    <Activity
      title="Let Others In"
      listSubtitle=""

      duration=""

      // Note: changed from TODO.png to fix broken link
      image="Meet-new-people.png"

      {...props} {...{activityId}}
    >
      <p>
        Develop an <string>understanding</string>with the people around you so that they know and respect your occasional need for space and time alone.
      </p>

      <TameYourGut />
    </Activity>
  )
}
ThisActivity.activityId = activityId