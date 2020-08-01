import React from 'react';
import Activity from '../../Activity'
import { TameYourGut } from '../../utils/Credits'

// don't change this string lightly - it's used to store activity favourites and history
const activityId = "RelocatingThoughts" 

export default function ThisActivity(props) {
  return (
    <Activity
      title="Relocating thoughts"
      listSubtitle=""

      duration=""

      image="Relocating-thoughts.png"

      {...props} {...{activityId}}
    >
        <p>
          This technique is extremely similar to the one above however,
          rather than trying to spread the pain-free sensations around your body it requires you to
          shift your thinking from the pain site to try to “think” from a pain-free spot.
        </p>

        <p>
          This approach is really useful for people who struggle with long periods of pain and have difficulty managing
          fatigue. Just as you did with the example above, pick a spot of your body that doesn’t hurt –
          it might be your ear lobe, your elbow, your foot, your tongue etc. Once you find that part of
          your body, spend some time really focussing on what that body part feels like (blood pulsing,
          muscles, joints moving, texture, the feel of the air on the skin etc).
        </p>

        <p>
          Notice everything you
          can about that part of your body and then try to keep these sensations in mind as you carry
          on through the day.
        </p>

      <TameYourGut />
    </Activity>
  )
}
ThisActivity.activityId = activityId