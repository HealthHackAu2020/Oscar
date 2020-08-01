import React from 'react';
import Activity from '../../Activity'
import { AnxietyCanada } from '../../utils/Credits'

// don't change this string lightly - it's used to store activity favourites and history
const activityId = "PositiveTalk" 

export default function ThisActivity(props) {
  return (
    <Activity
      title="Positive real talk"
      listSubtitle=""

      duration=""

      image="Positive-real-talk.png"

      {...props} {...{activityId}}
    >
      <p>
        Regularly practise being “kind” to yourself (say
positive things about yourself), rather than being overly self-critical. For
example, instead of saying, “I will fail”, say something like, “I can do it”. Or, “I
am not weak for having anxiety. Everyone experiences anxiety”, “I’m not a
loser if someone doesn’t like me. No one is liked by everyone!”, or “I’m strong
for challenging myself to face the things that scare me”. 
      </p>


      <AnxietyCanada />
    </Activity>
  )
}
ThisActivity.activityId = activityId