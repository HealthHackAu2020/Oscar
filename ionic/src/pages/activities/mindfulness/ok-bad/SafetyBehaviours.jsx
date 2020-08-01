import React from 'react';
import Activity from '../../Activity'
import { AnxietyCanada } from '../../utils/Credits'

// don't change this string lightly - it's used to store activity favourites and history
const activityId = "SafetyBehaviours" 

export default function ThisActivity(props) {
  return (
    <Activity
      title="Safety behaviours"
      listSubtitle=""

      duration=""

      image="Safety.png"

      {...props} {...{activityId}}
    >
      <p>
      Rather than completely avoiding social situations, some people engage in subtle
avoidance strategies or do things to feel safer or prevent their feared expectations from
coming true.
      </p>

<p>
For example, if you’re worried about saying something stupid, you might
try to say as little as possible. Examples of subtle avoidance strategies or common
safety behaviours include:
</p>

<ol>
<li>Removing oneself from the situation (e.g., sitting on the outside of the group, frequently going to the bathroom, finding a task to look busy)</li>
<li>Hiding visible signs of anxiety (e.g., wearing turtlenecks or lots of make-up to hide blushing)</li>
<li>Using alcohol or drugs (e.g., drinking while in social situations)</li>
<li>Distracting oneself (e.g., trying to think about other things, “zoning” out)</li>
<li>Avoiding sharing personal information (e.g., keeping the conversation on
superficial topics, asking the other person lots of questions so the focus is on
them, changing the subject)</li>
<li>Avoiding drawing attention to oneself (e.g., avoiding eye contact or smiling,
wearing sun glasses, speaking quietly, saying very little)</li>
<li>Overcompensating (e.g., over-preparing for presentations, rehearsing what you
are going to say ahead of time)</li>
</ol>



      <AnxietyCanada />
    </Activity>
  )
}
ThisActivity.activityId = activityId