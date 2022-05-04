import React, { useContext } from 'react';
import { DateContext } from '../../context/DateContext';

import '../../components/Apps/Settings/styles/Settings.scss'


const ButtonToggleDate = () => {

    const { isDateVisible, setIsDateVisible } = useContext(DateContext);

    const Toggle = () => {
        setIsDateVisible(prevState => !prevState)
    }

    return (
        <>
            {/* <button className='toggleDate' onClick={Toggle}>{isDateVisible? 'turn off date' : 'turn on date'}</button> */}
            <div className='mode basicSettingsContent'>
                    <h2> {isDateVisible ? 'Hide date' : 'Show date'}</h2>
                    <div className="switchAndIcon">
                        <div className="switch-div" onChange={Toggle}>
                            <label className="switch">
                                <input type='checkbox' defaultChecked={isDateVisible} className="checkbox"></input>
                                <div className="switch-btn"></div>
                            </label>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default ButtonToggleDate;