import React, { useState, useContext } from 'react';

import '../../../../styles/PanelButtons.scss';

import { OpenAppContext } from '../../../../context/OpenAppContext';
import CloseBtnIcon from './CloseBtnIcon';

const CloseBtn = (props) => {
    const { setOpenedAppOrder } = useContext(OpenAppContext)

    const [isCloseHover, setIsCloseHover] = useState(false)

    const CloseButtonHoverHandlerEnter = () => {
        setIsCloseHover(true)
    }
    
    const CloseButtonHoverHandlerLeave = () => {
        setIsCloseHover(false)
    }

    const CloseAppHandler = (id) => {

        setOpenedAppOrder((prev) => {
            const openedapps = prev.filter(app => app !== id)
            return openedapps
        })
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