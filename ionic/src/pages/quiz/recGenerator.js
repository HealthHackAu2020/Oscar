import {
  other,
  goodBad,
  goodGood,
  okBad,
  okOk,
  okGood,
  badBad,
  badOk,
  badGood,
} from "../activities/AllActivities";

// mood: object, completedActivities: array of activityIds
function generateRec(mood, completedActivities) {
  let resultArr;
  const { physicalMood, mentalMood } = mood;
  if (mentalMood === "good" && physicalMood === "good") {
    resultArr = filterCompleted(goodGood, completedActivities)
  }
  // if (mentalMood === "good" && physicalMood === "ok") {
  //   resultArr = filterCompleted(goodOk, completedActivities)
  // }
  if (mentalMood === "good" && physicalMood === "bad") {
    resultArr = filterCompleted(goodBad, completedActivities)
  }
  if (mentalMood === "ok" && physicalMood === "good") {
    resultArr = filterCompleted(okGood, completedActivities)
  }
  if (mentalMood === "ok" && physicalMood === "ok") {
    resultArr = filterCompleted(okOk, completedActivities)
  }
  if (mentalMood === "ok" && physicalMood === "bad") {
    resultArr = filterCompleted(okBad, completedActivities)
  }
  if (mentalMood === "bad" && physicalMood === "good") {
    resultArr = filterCompleted(badGood, completedActivities)
  }
  if (mentalMood === "bad" && physicalMood === "ok") {
    resultArr = filterCompleted(badOk, completedActivities)
  }
  if (mentalMood === "bad" && physicalMood === "bad") {
    resultArr = filterCompleted(badBad, completedActivities)
  }

  if(!resultArr || resultArr.length === 0){
    resultArr = filterCompleted(other, completedActivities)
  }

  return resultArr[0]
}

//should add filter with date
function filterCompleted(list, completedActivities){
  return list.filter(activity => !completedActivities.includes(activity.activityId))
}

export default generateRec;
