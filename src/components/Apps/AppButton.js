import React, { useContext, useState } from 'react';

import '../../styles/ButtonSettings.scss'

import { HoverButtonsContext } from '../../context/HoverButtonsContext';
import { OpenAppContext } from '../../context/OpenAppContext';


const AppButton = (props) => {

    const { setHover } = useContext(HoverButtonsContext)
    const {
        setIsFilesOpened, setFilesBtnId,
        setIsMailOpened, setMailBtnId,
        setIsSettingsOpened, setSettingsBtnId,
        setIsGamesOpened, setGamesBtnId,
        setOpenedAppOrder
    } = useContext(OpenAppContext);

    const [background, setBackground] = useState(props.background);

    const openAppHandler = (id) => {
        switch (id) {
            case 1:
                setIsFilesOpened(prevState => !prevState);
                setFilesBtnId(id);
                break;
            case 2:
                setIsMailOpened(prevState => !prevState);
                setMailBtnId(id)
                break;
            case 3:
                setIsSettingsOpened(prevState => !prevState);
                setSettingsBtnId(id)
                break;
            case 4:
                setIsGamesOpened(prevState => !prevState);
                setGamesBtnId(id)
                break;
            default:
                console.log('Ups');
        }

        setOpenedAppOrder(
            (prev) => {
                if (!prev.includes(id)) 
                { return [...prev, id] }
                else {return [...prev]}
            })
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