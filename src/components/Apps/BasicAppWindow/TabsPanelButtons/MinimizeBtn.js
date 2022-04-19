import React, { useContext, useState } from 'react';

import '../../../../styles/PanelButtons.scss';
import MinimizeBtnIcon from './MinimizeBtnIcon'

import { MinimizedAppContext } from '../../../../context/MinimizedAppContext';
import { OpenAppContext } from '../../../../context/OpenAppContext';

const MinimizeBtn = (props) => {

    const { minimizedApps, setMinimizedApps } = useContext(MinimizedAppContext)
    const { setOpenedAppOrder } = useContext(OpenAppContext)
    const [isMinimizeHover, setIsMinimizeHover] = useState(false)

    // tried prev => !prev but in this case it doesn't works because it is one btn for all apps
    // btn from another window could change value for current window, and icon stays display
    const MinimizeHandlerEnter = () => {
        setIsMinimizeHover(true)
    }
    const MinimizeHandlerLeave = () => {
        setIsMinimizeHover(false)
    }

    const MinimizeAppHandler = (id) => {
        if (!minimizedApps.includes(id)) {
            setMinimizedApps(prev => [...prev, id]);
        } else {
            setMinimizedApps(
                minimizedApps.filter(app => app !== id)
            );
        };
        setIsMinimizeHover(false);

        //remove app from opened app order context
        setOpenedAppOrder((prev) => {
            return prev.filter(app => app !== id)
        });
    };

    return (
        <div className='panelButtons'>
            <button className='minimizeBtn'
                onMouseEnter={MinimizeHandlerEnter}
                onMouseLeave={MinimizeHandlerLeave}
                onClick={() => MinimizeAppHandler(props.id)}
            >
                {isMinimizeHover && <MinimizeBtnIcon />}
            </button>
        </div>
    );
}

export default MinimizeBtn;