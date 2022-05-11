import React, { useContext } from 'react';

import { MdOutlineDarkMode } from 'react-icons/md';
import { MdOutlineLightMode } from 'react-icons/md';
import { CirclePicker } from 'react-color'
import { StyleContext } from '../../../../context/StyleContext';

import '../styles/Settings.scss';
import '../styles/Colors.scss';
import TopPanel from './TopPanel';

const Colors = (props) => {

    const { primaryColor, setPrimaryColor, lightmode, setLightmode } = useContext(StyleContext);

    const modeHandler = () => {
        setLightmode(prev => !prev)
    }

    const changeColorHandler = (color) => {
        setPrimaryColor(color.hex)
    }

    const colors = [
        "#e91e63", "#9c27b0", "#3f51b5", "#03a9f4",
        "#009688", "#4caf50", "#8bc34a", "#cddc39",
        "#ffeb3b", "#ffc107", "#ff9800", '#1d1f22'
    ]

    return (
        <div className='basicSettings'>
            <TopPanel name={props.name} icon={props.icon} />
            <div className="basicSettingsContent">
                <div className="mode">
                    <h2>mode</h2>
                    <div className="switchAndIcon">
                        <div className="switch-div" onChange={modeHandler}>
                            <label className="switch">
                                <input type='checkbox' defaultChecked={lightmode} className="checkbox"></input>
                                <div className="switch-btn"></div>
                            </label>
                        </div>
                        {lightmode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
                    </div>
                </div>
                <div className='colorsPanel'>
                    <h2>primary <br /> color</h2>
                    <CirclePicker width='180px' colors={colors} color={primaryColor} onChange={changeColorHandler} />
                </div>
            </div>

        </div>
    );
}

export default Colors;