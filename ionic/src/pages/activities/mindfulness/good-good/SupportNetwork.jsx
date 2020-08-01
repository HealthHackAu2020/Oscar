import React from 'react';
import Activity from '../../Activity'
import { TameYourGut } from '../../utils/Credits'

// don't change this string lightly - it's used to store activity favourites and history
const activityId = "SupportNetwork" 

export default function ThisActivity(props) {
  return (
    <Activity
      title="Support Network"
      listSubtitle=""

      duration=""

      image="Support-network.png"

      {...props} {...{activityId}}
    >
      <p>
        Build up a small but trustworthy network of <strong>support people</strong> you can rely on to keep you
        company when you need it and to help you to think and talk about things other than your pain.
      </p>



      <TameYourGut />
    </Activity>
  )
}
ThisActivity.activityId = activityId