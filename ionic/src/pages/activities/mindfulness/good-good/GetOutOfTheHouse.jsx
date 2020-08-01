import React from 'react';
import Activity from '../../Activity'
import { TameYourGut } from '../../utils/Credits'

// don't change this string lightly - it's used to store activity favourites and history
const activityId = "GetOutOfTheHouse" 

export default function ThisActivity(props) {
  return (
    <Activity
      title="Get out of the house"
      listSubtitle=""

      duration=""

      image="Get-out-of-the-house.png"

      {...props} {...{activityId}}
    >
      <p>
        Go for a drive or a walk to a beach, lookout, or park, even when your pain or
        the weather is bad. Releasing pent-up emotions. If need be, practise your skill
        at going there in your imagination.
      </p>
      <p>
        Not many people can resist nature’s temptation to feel better and,
        if nothing else, you will be doing something constructive to distract yourself.
      </p>


      <TameYourGut />
    </Activity>
  )
}
ThisActivity.activityId = activityId