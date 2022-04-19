import React, { useState, useContext } from 'react';

import '../../../../styles/PanelButtons.scss';

import { OpenAppContext } from '../../../../context/OpenAppContext';
import { FullScreenContext } from '../../../../context/FullScreenContext';
import { MinimizedAppContext } from '../../../../context/MinimizedAppContext';
import CloseBtnIcon from './CloseBtnIcon';

const CloseBtn = (props) => {

    const { setOpenedAppOrder } = useContext(OpenAppContext);
    const { fullScreenWindows, setFullScreenWindows } = useContext(FullScreenContext);
    const { setMinimizedApps } = useContext(MinimizedAppContext);
    const [isCloseHover, setIsCloseHover] = useState(false);


    const CloseButtonHoverHandlerEnter = () => {
        setIsCloseHover(true)
    };

    const CloseButtonHoverHandlerLeave = () => {
        setIsCloseHover(false)
    };

    const CloseAppHandler = (id) => {
        setOpenedAppOrder((prev) => {
            setFullScreenWindows(fullScreenWindows.filter(app => app !== id))
            return prev.filter(app => app !== id)
        });
        setMinimizedApps((prev) => {
            return prev.filter(app => app !== id)
        });
    };

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