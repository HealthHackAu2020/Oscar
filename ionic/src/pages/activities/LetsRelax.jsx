import React from 'react';
import Activity from './Activity'

// don't change this string lightly - it's used to store activity favourites and history
const activityId = "LetsRelax" 

export default function ThisActivity(props) {
  return (
    <Activity
      title="Let's relax"
      listSubtitle="Time to watch something you've been waiting to see"

      duration="60 — 90 minutes"

      listImage="fries.png"
      imageBig="fries-big.png"

      {...props} {...{activityId}}
    >
      <p>
        TODO
      </p>
    </Activity>
  )
}
ThisActivity.activityId = activityId