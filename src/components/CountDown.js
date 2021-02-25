import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./styles.css";
import moment from 'moment'
import { useDispatch, useSelector } from "react-redux"

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 92,
  strokeWidth: 5
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

export default function App() {
  const { wedding } = useSelector(state => state.wedding)
  const weddingDay = moment.utc(wedding.date).unix() // BELUM KEHANDLEE UNTUK WAKTUNYAAA......
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = weddingDay; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  return (
    <div className="App ">
      <div className="m-1">
        <CountdownCircleTimer
          {...timerProps}
          colors={[["#374151"]]}
          duration={daysDuration}
          initialRemainingTime={remainingTime}
        >
          {({ elapsedTime }) =>
            renderTime("days", getTimeDays(daysDuration - elapsedTime))
          }
        </CountdownCircleTimer>
      </div>
      <div className="m-1">
        <CountdownCircleTimer
          {...timerProps}
          colors={[["#4B5563"]]}
          duration={daySeconds}
          initialRemainingTime={remainingTime % daySeconds}
          onComplete={(totalElapsedTime) => [
            remainingTime - totalElapsedTime > hourSeconds
          ]}
        >
          {({ elapsedTime }) =>
            renderTime("hours", getTimeHours(daySeconds - elapsedTime))
          }
        </CountdownCircleTimer>
      </div>
      <div className="m-1">
        <CountdownCircleTimer
          {...timerProps}
          colors={[["#6B7280"]]}
          duration={hourSeconds}
          initialRemainingTime={remainingTime % hourSeconds}
          onComplete={(totalElapsedTime) => [
            remainingTime - totalElapsedTime > minuteSeconds
          ]}
        >
          {({ elapsedTime }) =>
            renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))
          }
        </CountdownCircleTimer>
      </div>

      <div className="m-1">
        <CountdownCircleTimer
          {...timerProps}
          colors={[["#9CA3AF"]]}
          duration={minuteSeconds}
          initialRemainingTime={remainingTime % minuteSeconds}
          onComplete={(totalElapsedTime) => [
            remainingTime - totalElapsedTime > 0
          ]}
        >
          {({ elapsedTime }) =>
            renderTime("seconds", getTimeSeconds(elapsedTime))
          }
        </CountdownCircleTimer>
        </div>
    </div>
  );
}
