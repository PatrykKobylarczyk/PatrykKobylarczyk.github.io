import React from 'react';

import '../styles/Settings.scss';
import TopPanel from './TopPanel';

const Info = (props) => {
    return ( 
        <div className='basicSettings'>
            <TopPanel name={props.name} icon={props.icon}/>
        </div>
     );
}
 
export default Info;