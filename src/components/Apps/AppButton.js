import React, { useContext, useState } from 'react';

import './ButtonSettings.css'

import { HoverButtonsContext } from '../../context/HoverButtonsContext';
import { OpenAppContext } from '../../context/OpenAppContext';


const AppButton = (props) => {

    const { setHover } = useContext(HoverButtonsContext)
    const { setIsFilesOpened, setIsSettingsOpened, setIsMailOpened, setIsGamesOpened } = useContext(OpenAppContext)
    const [background, setBackground] = useState(props.background)

    const openAppHandler = (id) => {
        switch (id) {
            case 1:
                setIsFilesOpened(prevState => !prevState);
                break;
            case 2:
                setIsMailOpened(prevState => !prevState);
                break;
            case 3:
                setIsSettingsOpened(prevState => !prevState);
                break;
            case 4:
                setIsGamesOpened(prevState => !prevState);
                break;
            default:
                console.log('Ups');
        }
    }
    
    const enterCurrentAppHandler = (id) => {
        setHover(true)
        setBackground(props.backgroundHover)
    }
    const leaveCurrentAppHandler = () => {
        setHover(false)
        setBackground(props.background)
    }

    return (
        <li>
            <button
                className='buttonSettings'
                style={{ background }}
                onMouseEnter={() => enterCurrentAppHandler(props.id)}
                onMouseLeave={() => leaveCurrentAppHandler(props.id)}
                onClick={() => openAppHandler(props.id)}
            >{props.icon}</button>
        </li >
    );
}

export default AppButton;