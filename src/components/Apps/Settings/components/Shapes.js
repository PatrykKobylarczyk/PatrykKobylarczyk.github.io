import React, { useContext } from 'react';

import '../styles/Settings.scss';
import '../styles/Shapes.scss';

import TopPanel from './TopPanel';
import { StyleContext } from '../../../../context/StyleContext';

const Shapes = (props) => {

    const { isRounded, setIsRounded, primaryColor } = useContext(StyleContext)

    const squareShapeHandler = () => {
        setIsRounded(false)
    }

    const roundedShapeHandler = () => {
        setIsRounded(true)
    }

    return (
        <div className='basicSettings'>
            <TopPanel name={props.name} icon={props.icon} />
            <div className="shapesContent">
                <button className="shapes shapesRounded" onClick={roundedShapeHandler} style={isRounded ? {border : `1px solid ${primaryColor}` } : null}>
                    <h2>rounded</h2>
                </button>
                <button className="shapes shapesSquare" onClick={squareShapeHandler} style={!isRounded ? {border : `1px solid ${primaryColor}` } : null}>
                    <h2>square</h2>
                </button>
            </div>
        </div>
    );
}

export default Shapes;