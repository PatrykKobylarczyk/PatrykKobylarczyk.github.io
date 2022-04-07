import React, { useState, useContext } from 'react';

import './PanelButtons.css';

import { OpenAppContext } from '../../../../context/OpenAppContext';
import CloseBtnIcon from './CloseBtnIcon';

const CloseBtn = (props) => {
    const {
        setIsFilesOpened, filesBtnId,
        setIsMailOpened, mailBtnId,
        setIsSettingsOpened, settingsBtnId,
        setIsGamesOpened, gamesBtnId
    } = useContext(OpenAppContext)

    const [isCloseHover, setIsCloseHover] = useState(false)

    const CloseButtonHoverHandlerEnter = () => {
        setIsCloseHover(true)
    }
    const CloseButtonHoverHandlerLeave = () => {
        setIsCloseHover(false)
    }

    const CloseAppHandler = (id) => {
        switch (id) {
            case filesBtnId:
                setIsFilesOpened(prevState => !prevState);
                break;
            case mailBtnId:
                setIsMailOpened(prevState => !prevState);
                break;
            case settingsBtnId:
                setIsSettingsOpened(prevState => !prevState);
                break;
            case gamesBtnId:
                setIsGamesOpened(prevState => !prevState);
                break;
            default:
                console.log('Ups');
        }
    }

    return (
        <div className='panelButtons'>
            <button className='closeBtn'
                onMouseEnter={CloseButtonHoverHandlerEnter}
                onMouseLeave={CloseButtonHoverHandlerLeave}
                onClick={() => CloseAppHandler(props.id)}>
                {isCloseHover && <CloseBtnIcon />}
            </button>
        </div>
    );
}

export default CloseBtn;