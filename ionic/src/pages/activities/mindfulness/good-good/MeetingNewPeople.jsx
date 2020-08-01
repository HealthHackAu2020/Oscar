import React from 'react';
import Activity from '../../Activity'
import { TameYourGut } from '../../utils/Credits'

// don't change this string lightly - it's used to store activity favourites and history
const activityId = "MeetingNewPeople"

export default function ThisActivity(props) {
  return (
    <Activity
      title="Meeting new people"
      listSubtitle=""

      duration=""

      image="Meet-new-people.png"

      {...props} {...{ activityId }}
    >
      <p>
        Once you have gained some confidence facing social situations, it may be time to start
        thinking about expanding your social network. People with social anxiety disorder often
        have a hard time developing new relationships. Having opportunities to meet other
        people and develop friendships is very important. Social situations that provide
        opportunities for repeated contact are the best ways to develop friendships. 
      </p>
      <p>
        Try and
        brainstorm ways to get involved with other people. Here are some ideas of where you
        can meet people:
      </p>

      <ul>
        <li>
          Work or school (talk to co-workers, go for lunch together, share coffee breaks)
        </li>
        <li>
          Play a sport/exercise (join a gym or running group, play soccer or tennis)
        </li>
        <li>
          Join a club/organization (travel club, hiking group, singles group, etc.)
        </li>
        <li>
          Take a class (painting, pottery, language course (e.g., Spanish, French) etc.)
        </li>
        <li>
          Volunteer (community centres, hospitals, charitable organizations)
        </li>
        <li>
          Take group lessons (swimming, dance)
        </li>
        <li>
          Go to sports facilities (skate park, ski hill)
        </li>
        <li>
          Dating services / online dating
        </li>
      </ul>


      <TameYourGut />
    </Activity>
  )
}
ThisActivity.activityId = activityId