import React from 'react';
import Activity from '../../Activity'
import { TameYourGut } from '../../utils/Credits'

// don't change this string lightly - it's used to store activity favourites and history
const activityId = "TemperatureControl"

export default function ThisActivity(props) {
  return (
    <Activity
      title="Temperature control"
      listSubtitle=""

      duration=""

      image="Temperature-control.png"

      {...props} {...{ activityId }}
    >
      <p>
        If your pain includes an element of heat, sweating, shaking or
        cold, try to imagine yourself in a place opposite to the pain sensation. For example, if the
        pain causes heat or sweating, picture yourself standing somewhere in the shade of a big tree
        with a cool breeze on your skin. If the pain makes you feel cold, imagine yourself lazing on
        the warm sands of a calm tropical island.
      </p>


      <TameYourGut />
    </Activity>
  )
}
ThisActivity.activityId = activityId