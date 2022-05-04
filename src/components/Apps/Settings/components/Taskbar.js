import React, { useContext } from 'react';

import '../styles/Settings.scss';
import '../styles/Taskbar.scss';
import TopPanel from './TopPanel';

import { StyleContext } from '../../../../context/StyleContext';

const Taskbar = (props) => {

    const { navPanelTransparency, setNavPanelTransparency } = useContext(StyleContext)

    const transparencyRangeHandler = (event) => {
        setNavPanelTransparency(event.target.value)
    }

    return (
        <div className='basicSettings'>
            <TopPanel name={props.name} icon={props.icon} />
            <div className="basicSettingsContent">
                <form className="transparency">
                    <label htmlFor='transparency'>transparency</label>
                    <input
                        type='range'
                        id='transparency'
                        min='1'
                        max='100'
                        value={navPanelTransparency}
                        onChange={transparencyRangeHandler}
                    ></input>
                </form>
            </div>
        </div>
    );
}

export default Taskbar;