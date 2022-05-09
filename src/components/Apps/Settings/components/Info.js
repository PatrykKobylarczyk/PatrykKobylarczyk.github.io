import React, { useContext } from 'react';

import '../styles/Settings.scss';
import '../styles/Info.scss'
import TopPanel from './TopPanel';
import { StyleContext } from '../../../../context/StyleContext'

const Info = (props) => {

    const { isRounded } = useContext(StyleContext);

    return (
        <div className={`basicSettings 
        // ${isRounded ? 'rounded' : null}
        `}>
            <TopPanel name={props.name} icon={props.icon} />
            <div className="info">
                <h3>Hello<span>.</span></h3>
                <p>My name is Patryk Kobylarczyk. I am a conductor by education. My adventure with the FrontEnd started in mid-2021. Since then, I have devoted every free moment to study and <strong><span>I love it.</span></strong></p>
                <h4>Let me introduce <span>boss</span></h4>
                <p>boss is my first project ind React. It is a concept that simulates an operating system. There you can view available files and folders, check the e-mail or play games. Thanks to the settings, you can customize the application to your needs.
                    <br />Discover the possibilities of the <strong>boss <span>:)</span></strong></p>
            </div>
        </div>
    );
}

export default Info;