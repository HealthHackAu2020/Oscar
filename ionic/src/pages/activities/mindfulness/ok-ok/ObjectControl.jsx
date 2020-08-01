import React from 'react';
import Activity from '../../Activity'
import { TameYourGut } from '../../utils/Credits'

// don't change this string lightly - it's used to store activity favourites and history
const activityId = "ObjectControl" 

export default function ThisActivity(props) {
  return (
    <Activity
      title="ObjectControl"
      listSubtitle=""

      duration=""

      image="object-control.png"

      {...props} {...{activityId}}
    >
      <p>
 This time, pick a small area of your body where you are feeling a
moderate amount of pain. What does the pain feel like? Can you imagine that pain being
caused by a particular substance or an external object such as a vice or a knife? Picture the
object there in the site of the pain. Focussing your concentration and attention on the
painful site, imagine that you have control over the vice and begin slowly unwinding the
handle. Feel the pressure easing little by little as you unwind the vice and eventually take it
away. Likewise with the knife, imagine the knife is made of ice and as it gradually melts 
away the pain decreases or you might like to imagine the knife changing from a sharp
butcher’s knife to gradually become a blunt butter knife.
      </p>


      <TameYourGut />
    </Activity>
  )
}
ThisActivity.activityId = activityId