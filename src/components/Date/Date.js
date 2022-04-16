import React, { useState, useEffect, useContext } from 'react';

import '../../styles/Date.scss'
import { DateContext } from '../../context/DateContext';
import moment from 'moment';

const Clock = () => {
    const { isDateVisible } = useContext(DateContext);

    const [currentTime, setTime] = useState();
    const [currentDate, setCurrentDate] = useState();


    const formatTime = value => {
        if (value < 10) {
            return '0'
        } else {
            return ''
        }
    }

    const tick = () => {
        const date = new Date();
        const hours = date.getHours()
        const minutes = date.getMinutes()
        const curDate = moment(date).format('ddd, Do MMM YYYY')
        setTime(`${formatTime(hours)}${hours}:${formatTime(minutes)}${minutes}`);
        setCurrentDate(curDate)
    }

    useEffect(() => {
        const timerID = setInterval(
            tick(), 1000)
        return () =>
            clearInterval(timerID)
    });

    return (
        <div className='currentDate'>
            <div className={isDateVisible ? 'currentDate-clock' : 'currentDate-clock__dateHide'}>{currentTime}</div>
            {isDateVisible && <p className='currentDate-date'>{currentDate}</p>}
        </div>
    );
}

export default Clock;