import React, { useContext } from 'react';
import { DateContext } from '../../context/DateContext';

import '../../styles/ButtonToggleDate.css'


const ButtonToggleDate = () => {

    const { isDateVisible, setIsDateVisible } = useContext(DateContext);

    const Toggle = () => {
        setIsDateVisible(prevState => !prevState)
    }

    return (
        <>
            <button className='toggleDate' onClick={Toggle}>{isDateVisible? 'turn off date' : 'turn on date'}</button>
        </>
    );
}

export default ButtonToggleDate;