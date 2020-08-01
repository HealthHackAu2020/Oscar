import React from 'react';
import Activity from '../../Activity'
import { TameYourGut } from '../../utils/Credits'

// don't change this string lightly - it's used to store activity favourites and history
const activityId = "ReduceStress"

export default function ThisActivity(props) {
  return (
    <Activity
      title="ReduceStress"
      listSubtitle=""

      duration=""

      image="Reduce-stress.png"

      {...props} {...{ activityId }}
    >
      <p>
        Sometimes life’s demands become too much. Stress can have a negative impact on
        your health. Look for ways to reduce stress. Deal with problems, lean on supports, and
        take time for self-care. For instance, plan some time for yourself each day to read a
        book, go for a walk, watch a favorite TV program, or relax! You can also reduce stress
        by giving yourself a little extra time to get to places so that you’re not rushing. Try giving
        yourself an extra 5 minutes – it can make a big difference!

      </p>


      <TameYourGut />
    </Activity>
  )
}
ThisActivity.activityId = activityId