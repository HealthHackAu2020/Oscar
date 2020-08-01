import React from 'react';
import Activity from '../../Activity'
import { TameYourGut } from '../../utils/Credits'

// don't change this string lightly - it's used to store activity favourites and history
const activityId = "PainFreeRoom" 

export default function ThisActivity(props) {
  return (
    <Activity
      title="Pain free room"
      listSubtitle=""

      duration=""

      image="Pain-free-room.png"

      {...props} {...{activityId}}
    >
      <p>
        Close your eyes. Imagine in your mind a secret room. See yourself
moving towards the door in your mind, reaching out and opening the door to the secret
room. Know that inside the door is a room where pain cannot enter. It is a place where you
feel warm, comfortable, refreshed, supple and content. In this room you are pain free.
Allow your imagination to furnish the room in luxury. Imagine the shape, colour, texture and
smell of everything in the room. Picture yourself relaxing peacefully in the room as you soak
up the wonderful sensations of comfort, good health and peace. Allow the real world to
fade into the background and bring your secret room to the front of your mind. Stay there
for as long as you feel comfortable maintaining the image, then slowly allow yourself to
leave the room, close the door behind you and return to the real world.
      </p>


      <TameYourGut />
    </Activity>
  )
}
ThisActivity.activityId = activityId