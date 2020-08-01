import React from 'react';
import Activity from '../../Activity'
import { AnxietyCanada } from '../../utils/Credits'

// don't change this string lightly - it's used to store activity favourites and history
const activityId = "ManageYourTime" 

export default function ThisActivity(props) {
  return (
    <Activity
      title="Manage your time"
      listSubtitle=""

      duration=""

      // Note: changed from TODO.png to fix broken link
      image="Temperature-control.png"

      {...props} {...{activityId}}
    >
      <p>
        Learning to manage your time more effectively can reduce stress. Use a day planner to
schedule your activities. This will help you see if you’re taking on too much, and help
you make time for the things you need to do. Remember to make sure to schedule
some time for relaxation and fun activities each day.
      </p>

      <AnxietyCanada />
    </Activity>
  )
}
ThisActivity.activityId = activityId