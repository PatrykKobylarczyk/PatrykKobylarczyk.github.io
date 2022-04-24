import React, { useContext, useState } from 'react';

import '../../styles/ButtonSettings.scss'

import { HoverButtonsContext } from '../../context/HoverButtonsContext';
import { OpenAppContext } from '../../context/OpenAppContext';
import { MinimizedAppContext } from '../../context/MinimizedAppContext';
import { IconContext } from "react-icons";
import { FaCheck } from 'react-icons/fa'
import { FaRegWindowMinimize } from 'react-icons/fa'


const AppButton = (props) => {

    const { setHover } = useContext(HoverButtonsContext)
    const { minimizedApps, setMinimizedApps } = useContext(MinimizedAppContext)
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
            case 5:
                setGamesBtnId(id)
                break;
            default:
                console.log('Ups');
        }

        setOpenedAppOrder(
            (prev) => {
                if (!prev.includes(id)) { return [...prev, id] }
                else if (prev.includes(id)) { return prev.filter(app => app !== id) }
                else { return [...prev] }
            })

        setMinimizedApps((prev) => {
            const removeMinimizedApp = prev.filter(app => app !== id)
            return removeMinimizedApp
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
    const arrayIncludesMinimizedApps = minimizedApps.includes(props.id)



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
                    <div className={`buttonIsActive ${arrayIncludesApp && 'btnOn'} ${arrayIncludesMinimizedApps ? 'btnMinimized' : 'dupa'} `}>
                        {arrayIncludesApp ? <FaCheck /> : arrayIncludesMinimizedApps ? <FaRegWindowMinimize /> : null}
                    </div>
                </IconContext.Provider>
            </button >

        </li >
    );
}

export default AppButton;