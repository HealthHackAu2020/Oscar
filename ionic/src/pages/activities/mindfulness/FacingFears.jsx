import React from 'react';
import Activity from '../Activity'
import { AnxietyCanada } from '../utils/Credits'

// don't change this string lightly - it's used to store activity favourites and history
const activityId = "FacingFears" 

export default function ThisActivity(props) {
  return (
    <Activity
      title="Facing Fears"
      listSubtitle=""

      duration=""

      listImage="park.png"
      imageBig="park-big.png"

      {...props} {...{activityId}}
    >
      <p>
        It’s normal to want to avoid situations that cause you anxiety. Avoiding
feared social situations is a very effective strategy because it reduces anxiety in the
short-term. However, avoiding social situations increases your fear in the long-term
because it prevents you from learning that your feared expectations are either unlikely to
actually happen or aren’t as bad as you think. Therefore, an important step in managing
your social anxiety is to face the situations that you have been avoiding because of
social fears. Repeatedly facing those situations reduces distress in the long-term and
helps build up confidence.
</p>
<p>
First, make a list of the social situations that you fear (e.g., saying “hi” to a co-worker,
asking a stranger for directions, making a phone call, etc.). Refer back to the list you
made when you spent some time observing your social anxiety and identifying the
situations that cause you anxiety (see Tool #1). Common types of feared social
situations include public speaking, informal socializing, being assertive, dealing with
conflict, being the center of attention, eating and drinking in front of others, speaking to 
authority figures, and interacting with unfamiliar people. Once you have a list, try and
arrange them from the least scary to the scariest.
</p>
<p>
Starting with the least scary situation,
repeat that activity or enter that social situation (for example, saying “hi” to a co-worker
every morning) until you start to feel less anxious doing it. Once you can enter that
situation without experiencing much anxiety (on numerous occasions), move on to the
next situation on the list

      </p>

      <AnxietyCanada />

    </Activity>
  )
}
ThisActivity.activityId = activityId