import React, { useContext, useRef } from 'react';

import '../../../styles/BasicAppWindow.scss'
import { FullScreenContext } from '../../../context/FullScreenContext';
import { StyleContext } from '../../../context/StyleContext';
import TabsPanel from '../BasicAppWindow/TabsPanel';
import Draggable from 'react-draggable'
import WeatherApp from '../WeatherApp/components/WeatherApp'


const Weather = (props) => {

    const { fullScreenWindows } = useContext(FullScreenContext)
    const nodeRef = useRef(null);
    const { primaryColor, isRounded } = useContext(StyleContext)

    const borderPrimaryColor = { border: `1px solid ${primaryColor}`}
    return (
        <Draggable handle='.tabsPanel' nodeRef={nodeRef}>
            <div 
            className={`basicAppWindow ${fullScreenWindows.includes(props.id) ? 'fullScreen' : null} ${isRounded ? 'rounded' : null}`} 
            ref={nodeRef}
            style={primaryColor ? borderPrimaryColor : null}
            >
                <TabsPanel id={props.id} />
                {/* <WeatherApp/> */}\
                <h1>Weather</h1>
            </div>
        </Draggable>
    );
}

export default Weather
;