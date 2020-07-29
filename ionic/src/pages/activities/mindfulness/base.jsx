import React from 'react';
import Activity from '../Activity'
import { TameYourGut } from '../utils/Credits'

// don't change this string lightly - it's used to store activity favourites and history
const activityId = "" 

export default function ThisActivity(props) {
  return (
    <Activity
      title=""
      listSubtitle=""

      duration=""

      listImage="park.png"
      imageBig="park-big.png"

      {...props} {...{activityId}}
    >
      <p>
      </p>



      <TameYourGut />
    </Activity>
  )
}
ThisActivity.activityId = activityId