import React from 'react';
import Activity from '../../Activity'
import { TameYourGut } from '../../utils/Credits'

// don't change this string lightly - it's used to store activity favourites and history
const activityId = "ProblemSolving"

export default function ThisActivity(props) {
  return (
    <Activity
      title="Problem solving"
      listSubtitle=""

      duration=""

      image="Problem-solving.png"

      {...props} {...{ activityId }}
    >
      <p>
        There is always a benefit to solving problems.
        Remember that if you solve a problem, even a difficult one, it is one less
        thing to worry about, and one less problem on your problem list!
      </p>


      <TameYourGut />
    </Activity>
  )
}
ThisActivity.activityId = activityId