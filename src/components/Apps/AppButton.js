import React, { useContext, useState } from 'react';

import '../../styles/ButtonSettings.scss'

import { HoverButtonsContext } from '../../context/HoverButtonsContext';
import { OpenAppContext } from '../../context/OpenAppContext';
import { MinimizedAppContext } from '../../context/MinimizedAppContext';
import { IconContext } from "react-icons";
import { FaCheck } from 'react-icons/fa'


const AppButton = (props) => {

    const { setHover } = useContext(HoverButtonsContext)
    const { minimizedApps } = useContext(MinimizedAppContext)
    const {
        setFilesBtnId,
        setMailBtnId,
        setSettingsBtnId,
        setGamesBtnId,
        openedAppOrder, setOpenedAppOrder,
    } = useContext(OpenAppContext);


    const [background, setBackground] = useState(props.background);


    const openAppHandler = (id) => {
        switch (id) {
            case 1:
                setFilesBtnId(id);
                break;
            case 2:
                setMailBtnId(id)
                break;
            case 3:
                setSettingsBtnId(id)
                break;
            case 4:
                setGamesBtnId(id)
                break;
            default:
                console.log('Ups');
        }

        setOpenedAppOrder(
            (prev) => {
                if (!prev.includes(id)) { return [...prev, id] }
                else { return [...prev] }
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

    const arrayIncludesApp = openedAppOrder.includes(props.id)
    const arrarIncludesMinimizedApps= minimizedApps.includes(props.id)


    console.log(minimizedApps);
    console.log(arrarIncludesMinimizedApps);

    return (
        <li>
            <button
                className='buttonSettings'
                style={{ background }}
                onMouseEnter={() => enterCurrentAppHandler(props.id)}
                onMouseLeave={() => leaveCurrentAppHandler(props.id)}
                onClick={() => openAppHandler(props.id)}
            >{props.icon}
                <IconContext.Provider value={{ size: 5, color: 'white' }}>
                    <div className={`buttonIsActive ${arrayIncludesApp && 'btnOn'} ${arrarIncludesMinimizedApps && 'btnMinimized'}`}>
                        { arrayIncludesApp && <FaCheck />}
                    </div>
                </IconContext.Provider>
            </button >

        </li >
    );
}

export default AppButton;