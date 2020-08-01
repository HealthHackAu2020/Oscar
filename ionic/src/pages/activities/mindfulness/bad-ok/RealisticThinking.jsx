import React from 'react';
import Activity from '../../Activity'
import { AnxietyCanada } from '../../utils/Credits'

// don't change this string lightly - it's used to store activity favourites and history
const activityId = "RealisticThinking"

export default function ThisActivity(props) {
  return (
    <Activity
      title="Realistic thinking"
      listSubtitle=""

      duration=""

      image="Realistic-thinking.png"

      {...props} {...{ activityId }}
    >


      <h3>
        1. Pay attention to your self talk
      </h3>

      <p>
        Thoughts are the things that we say to ourselves without speaking out loud (self-talk).
        We can have many thoughts every hour of the day. We all have our own way of thinking
        about things, and how we think has a big effect on how we feel. When we think that
        something bad will happen – such as being bitten by a dog – we feel anxious. Often, we are unaware of our thoughts, but because they have such a big impact on how we feel, it is important to start paying attention to what we are saying to ourselves.
      </p>

      <h3>
        2.  Identify thoughts that lead to feelings of anxiety
</h3>

      <p>
        It can take some time and practice to identify the specific thoughts that make you anxious,
        so here are some helpful tips:
      </p>
      <p>
        Pay attention to your shifts in anxiety, no matter how small. When you notice yourself
        getting more anxious, that is the time to ask yourself:

        <ul>
          <li>“What am I thinking right now?”</li>
          <li>“What is making me feel anxious?”</li>
          <li>“What am I worried will happen?”</li>
          <li>“What bad thing do I expect to happen?”</li>
        </ul>
      </p>

      <h3>
        3.  Challenge your “anxious” thinking
</h3>

      <p>
        Thinking about something does not mean that the thought is true or that it will happen.
        For example, thinking that a dog will bite you does not mean that it will. Often, our
        thoughts are just guesses and not actual facts. Therefore, it is helpful to challenge your
        anxious thoughts, because they can make you feel like something bad will definitely
        happen, even when it is highly unlikely.
      </p>


      <AnxietyCanada />
    </Activity>
  )
}
ThisActivity.activityId = activityId