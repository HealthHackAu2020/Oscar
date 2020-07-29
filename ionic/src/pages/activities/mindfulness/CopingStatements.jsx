import React from 'react';
import Activity from '../Activity'
import { AnxietyCanada } from '../utils/Credits'

// don't change this string lightly - it's used to store activity favourites and history
const activityId = "CopingStatements" 

export default function ThisActivity(props) {
  return (
    <Activity
      title="Coping Statements"
      listSubtitle=""

      duration=""

      listImage="park.png"
      imageBig="park-big.png"

      {...props} {...{activityId}}
    >
      <p>
        Try coming up with statements that remind you how you
        can cope with a situation. For example, “If I get anxious, I will try some calm
        breathing”, “I just need to do my best”, “People cannot tell when I am feeling
        anxious”, “This has happened before and I know how to handle it”, or “My
        anxiety won’t last forever”
      </p>

      <AnxietyCanada />

    </Activity>
  )
}
ThisActivity.activityId = activityId