import React from 'react';
import Activity from './Activity'

// don't change this string lightly - it's used to store activity favourites and history
const activityId = "LetsBrainstorm" 

export default function ThisActivity(props) {
  return (
    <Activity
      title="Let's have a brainstorm"
      listSubtitle="What are some goals for this year?"

      duration="10 — 30 minutes"

      listImage="cloud.png"
      imageBig="cloud-big.png"

      {...props} {...{activityId}}
    >
      <p>
        TODO
      </p>
    </Activity>
  )
}
ThisActivity.activityId = activityId