import React from 'react';
import Activity from '../../Activity'
import { TameYourGut } from '../../utils/Credits'

// don't change this string lightly - it's used to store activity favourites and history
const activityId = "EntertainYourself"

export default function ThisActivity(props) {
  return (
    <Activity
      title="Entertain yourself"
      listSubtitle=""

      duration=""

      image="Entertain-yourself.png"

      {...props} {...{ activityId }}
    >
      <p>

        Watch a comedy show or movie, or borrow some funny books from your local library. <strong>LAUGHTER</strong> has been medically proven to be a good medicine. Directions for use: Use as often as you can!
      </p>


      <TameYourGut />
    </Activity>
  )
}
ThisActivity.activityId = activityId