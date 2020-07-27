import React from 'react';
import Activity from './Activity'

// don't change this string lightly - it's used to store activity favourites and history
const id = "TimeToTakeAWalk" 

export default function TimeToTakeAWalk() {
  return (
    <Activity
      title="Let's take a walk"
      duration="5 — 20 minutes"
      imageBig="park-big.png"
    >
      <p>
        Time to be conscious of the environment every time
        you get a chance to go for a walk. It doesn't have to
        be long, it could simply be 5 mins.
      </p>
      <p>
        Inside or outside the house, look around your surroundings
        for 3 new things that you have never noticed before.
        Appreciate the environment you are in to seek internal
        calmness.
      </p>
    </Activity>
  )
}
TimeToTakeAWalk.id = id