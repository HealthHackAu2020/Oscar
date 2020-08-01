import React from 'react';
import Activity from '../../Activity'
import { TameYourGut } from '../../utils/Credits'

// don't change this string lightly - it's used to store activity favourites and history
const activityId = "OvercomingFear"

export default function ThisActivity(props) {
  return (
    <Activity
      title="Overcoming fear"
      listSubtitle=""

      duration="10 — 30 minutes"

      listImage="activities/small/Facing-fears.png"
      imageBig="activities/large/Facing-fears.png"

      {...props} {...{ activityId }}
    >
      <p>
        Start with a relatively easy or mild instance of facing a situation you have been
        avoiding because of the fear or unpleasant feelings associated with it.</p>

        {/* <p>Rate the strength of your fear for each situation using your Subjective Units of Distress (SUDS)
        score from 0 – 100%.</p> */}

        <h3>How to Practice Imagery Desensitization</h3>

        <ol>
            <li>
              Relax for 5 to 10 minutes or until you feel deeply relaxed, calm and comfortable.
            </li>
            <li>
            Visualize yourself in a peaceful scene, a place that where you feel safe. This
            is a relaxing picture in your mind. It can be a scene outdoors (such as the
            beach) or indoors (curling up by the fireplace, in your bed) or can be
            completely from your imagination.
            </li>
            <li>
            Pick the first item on your anxiety hierarchy (the one that causes you the
            least anxiety) and imagine you are in that situation. Try to make the scene
            come alive in your imagination. Imagine what you can hear, feel, see and
            smell if you were in this situation. Do not picture yourself as being anxious.
            Imagine yourself acting calm and confident, dealing with the situation in
            away you would most like to. If you feel little or no anxiety proceed to the
            next item up on your hierarchy.
          </li>
          <li>If you experience mild or moderate anxiety, spend 30 seconds to 1 in that
          scene, allowing yourself to relax to it. Practice your breathing exercises to
          help breathe away any anxious sensations and use coping self talk such as “I
          am calm and at ease”, “I can cope with this”. Picture yourself handling the
          situation in a calm and confident manner.
          </li>
          <li>
          After your minute of exposure, retreat to peaceful scene and get fully
          relaxed. Always relax deeply between scenes. If you have difficulty relaxing,
          use progressive muscle relaxation.
          </li>
          <li>
            Continue progressing up your hierarchy step by step in imagination.
            Generally it will take to a minimum of 2 – 5 exposures to a scene to reduce
            your anxiety. Remember, it is important to feel fully comfortable with each
            step before proceeding onto a more advanced step on your hierarchy.
          </li>
        </ol>

        <TameYourGut />
    </Activity>
  )
}
ThisActivity.activityId = activityId