import TimeToTakeAWalk from "./TimeToTakeAWalk"
import LetsRelax from "./LetsRelax"
import LetsThink from "./LetsThink"
import LetsBrainstorm from "./LetsBrainstorm"

import OvercomingFear from "./mindfulness/ok-bad/OvercomingFear"
import RelocatingThoughts from "./mindfulness/ok-bad/RelocatingThoughts"
import CopingStatements from "./mindfulness/ok-bad/CopingStatements"
import FacingFears from "./mindfulness/ok-bad/FacingFears"
import SafetyBehaviours from "./mindfulness/ok-bad/SafetyBehaviours"
import LetOthersIn from "./mindfulness/ok-bad/LetOthersIn"

import BePatient from "./mindfulness/other/BePatient"
import StartSmall from "./mindfulness/other/StartSmall"
import UseYourFeelings from "./mindfulness/other/UseYourFeelings"
import ProblemSolving from "./mindfulness/other/ProblemSolving"
import TakeAStepBack from "./mindfulness/other/TakeAStepBack"

import TakeAMinute from "./mindfulness/good-bad/TakeAMinute"

import ReduceStress from "./mindfulness/bad-good/ReduceStress"
import WriteItDown from "./mindfulness/bad-good/WriteItDown"

import GetMoving from "./mindfulness/ok-good/GetMoving"
import Reminisce from "./mindfulness/ok-good/Reminisce"

import ObjectControl from "./mindfulness/ok-ok/ObjectControl"
import TimeToBoogie from "./mindfulness/ok-ok/TimeToBoogie"

import PainFreeSensations from "./mindfulness/bad-bad/PainFreeSensations"
import TemperatureControl from "./mindfulness/bad-bad/TemperatureControl"
import EntertainYourself from "./mindfulness/bad-bad/EntertainYourself"

import PainFreeRoom from "./mindfulness/bad-ok/PainFreeRoom"
import GoodNightsSleep from "./mindfulness/bad-ok/GoodNightsSleep"
import RealisticThinking from "./mindfulness/bad-ok/RealisticThinking"
import LetsBreathe from "./mindfulness/bad-ok/LetsBreathe"
import HaveAGoodCry from "./mindfulness/bad-ok/HaveAGoodCry"

import SupportNetwork from "./mindfulness/good-good/SupportNetwork"
import PositiveTalk from "./mindfulness/good-good/PositiveTalk"
import MeetingNewPeople from "./mindfulness/good-good/MeetingNewPeople"
import ManageYourTime from "./mindfulness/good-good/ManageYourTime"
import GetOutOfTheHouse from "./mindfulness/good-good/GetOutOfTheHouse"
import HaveFun from "./mindfulness/good-good/HaveFun"

const AllActivities = [
    BePatient,
    StartSmall,
    UseYourFeelings,
    ProblemSolving,
    TakeAStepBack,

    TakeAMinute,

    ReduceStress,
    WriteItDown,

    GetMoving,
    Reminisce,

    ObjectControl,
    TimeToBoogie,

    PainFreeSensations,
    TemperatureControl,
    EntertainYourself,

    PainFreeRoom,
    GoodNightsSleep,
    RealisticThinking,
    LetsBreathe,
    HaveAGoodCry,

    SupportNetwork,
    PositiveTalk,
    MeetingNewPeople,
    ManageYourTime,
    GetOutOfTheHouse,
    HaveFun,

    OvercomingFear,
    RelocatingThoughts,
    CopingStatements,
    FacingFears,
    SafetyBehaviours,
    LetOthersIn,

    TimeToTakeAWalk,
    LetsRelax,
    LetsThink,
    LetsBrainstorm,

]
export const other = [
    BePatient,
    StartSmall,
    UseYourFeelings,
    ProblemSolving,
    TakeAStepBack,
    TimeToTakeAWalk,
    LetsRelax,
    LetsThink,
    LetsBrainstorm,
]

export const goodBad =[
    TakeAMinute,
]
export const goodGood=[
    SupportNetwork,
    PositiveTalk,
    MeetingNewPeople,
    ManageYourTime,
    GetOutOfTheHouse,
    HaveFun,
]
export const okBad=[
    OvercomingFear,
    RelocatingThoughts,
    CopingStatements,
    FacingFears,
    SafetyBehaviours,
    LetOthersIn,
]
export const okOk=[
    ObjectControl,
    TimeToBoogie,
]
export const okGood=[
    GetMoving,
    Reminisce,
]

export const badBad=[
    PainFreeSensations,
    TemperatureControl,
    EntertainYourself,
]
export const badOk=[
    PainFreeRoom,
    GoodNightsSleep,
    RealisticThinking,
    LetsBreathe,
    HaveAGoodCry,
]
export const badGood =[
    ReduceStress,
    WriteItDown,
]



export default AllActivities