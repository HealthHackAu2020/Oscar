import React from 'react';
import Activity from './Activity'

// don't change this string lightly - it's used to store activity favourites and history
const activityId = "LetsThink" 

export default function ThisActivity(props) {
  return (
    <Activity
      title="Let's think together"
      listSubtitle="Let's imagine we are deep in space"

      duration="60 — 90 minutes"

      listImage="spaceship.png"
      imageBig="spaceship-big.png"

      {...props} {...{activityId}}
    >
      <p>
        TODO
      </p>
    </Activity>
  )
}
ThisActivity.activityId = activityId