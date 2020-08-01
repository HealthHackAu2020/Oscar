import React from 'react';
import Activity from '../../Activity'
import { TameYourGut } from '../../utils/Credits'

// don't change this string lightly - it's used to store activity favourites and history
const activityId = "HaveFun" 

export default function ThisActivity(props) {
  return (
    <Activity
      title="Have some fun"
      listSubtitle=""

      duration=""

      image="Something-fun.png"

      {...props} {...{activityId}}
    >
      <p>
        Book regular times with yourself to do something FUN.
        Don’t assume that you will get around to it when you are feeling better.
        Make sure that you do fun things even when you would sometimes prefer to rest.
        Good feelings feed on themselves, just as bad feelings do.
      </p>

      <TameYourGut />
    </Activity>
  )
}
ThisActivity.activityId = activityId