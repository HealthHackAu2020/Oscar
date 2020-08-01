import React from 'react';
import Activity from '../../Activity'
import { TameYourGut } from '../../utils/Credits'

// don't change this string lightly - it's used to store activity favourites and history
const activityId = "Reminisce" 

export default function ThisActivity(props) {
  return (
    <Activity
      title="Reminisce"
      listSubtitle=""

      duration=""

      image="Reminisce.png" 
      // TODO?

      {...props} {...{activityId}}
    >
      <p>
        Get lost in a <strong>HAPPY MEMORY</strong>.
        Allow yourself to recall a really happy memory and to get lost in every aspect of it.
        Try to remember as many details as possible.
      </p>


      <TameYourGut />
    </Activity>
  )
}
ThisActivity.activityId = activityId