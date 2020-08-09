import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
    isPlaying: true,
    size: 120,
    strokeWidth: 6
};

const renderTime = (dimension, time) => {
    return (
        <div className="time-wrapper">
            <div className="time">{time}</div>
            <div>{dimension}</div>
        </div>
    );
};

const renderSeconds = ({ remainingTime }) => {
    return (
        <div className="time-wrapper">
            <div className="time">{remainingTime}</div>
            <div>seconds</div>
        </div>
    )
};

const renderMinutes = ({ remainingTime }) => {
    return (
        <div className="time-wrapper">
            <div className="time">{((remainingTime % hourSeconds) / minuteSeconds) | 0}</div>
            <div>minutes</div>
        </div>
    )
};

const renderHours = ({ remainingTime }) => {
    return (
        <div className="time-wrapper">
            <div className="time">{((remainingTime % daySeconds) / hourSeconds) | 0}</div>
            <div>hours</div>
        </div>
    )
};

const renderDays = ({ remainingTime }) => {
    return (
        <div className="time-wrapper">
            <div className="time">{(remainingTime / daySeconds) | 0}</div>
            <div>days</div>
        </div>
    )
};

export default function App() {
    const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
    const endTime = stratTime + 243248; // use UNIX timestamp in seconds

    const remainingTime = endTime - stratTime;
    const days = Math.ceil(remainingTime / daySeconds);
    const daysDuration = days * daySeconds;

    return (
        <div className="App">
            <CountdownCircleTimer
                {...timerProps}
                colors={[["#7E2E84"]]}
                duration={daysDuration}
                initialRemainingTime={remainingTime}
            >
                {renderDays}
            </CountdownCircleTimer>
            <CountdownCircleTimer
                {...timerProps}
                colors={[["#D14081"]]}
                duration={daySeconds}
                initialRemainingTime={remainingTime % daySeconds}
                onComplete={totalElapsedTime => [
                    remainingTime - totalElapsedTime > hourSeconds
                ]}
            >
                {renderHours}
            </CountdownCircleTimer>
            <CountdownCircleTimer
                {...timerProps}
                colors={[["#EF798A"]]}
                duration={hourSeconds}
                initialRemainingTime={remainingTime % hourSeconds}
                onComplete={totalElapsedTime => [
                    remainingTime - totalElapsedTime > minuteSeconds
                ]}
            >
                {renderMinutes}
            </CountdownCircleTimer>
            <CountdownCircleTimer
                {...timerProps}
                colors={[["#218380"]]}
                duration={minuteSeconds}
                initialRemainingTime={remainingTime % minuteSeconds}
                onComplete={totalElapsedTime => [remainingTime - totalElapsedTime > 0]}
            >
                {renderSeconds}
            </CountdownCircleTimer>
        </div>
    );
}
