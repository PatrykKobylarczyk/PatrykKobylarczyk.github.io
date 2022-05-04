import React from 'react';

import '../styles/Settings.scss';
import { HiOutlineColorSwatch } from 'react-icons/hi';
import { CgMoveTask } from 'react-icons/cg';
import { CgShapeTriangle } from 'react-icons/cg';
import { WiTime2 } from 'react-icons/wi';
import { BsInfoCircle } from 'react-icons/bs';
import { IconContext } from 'react-icons';

import Colors from './Colors';
import Taskbar from './Taskbar';
import Shapes from './Shapes';
import Time from './Time';
import Info from './Info';

const settingsData = [
    {
        name: "Mode & Colors",
        id: 's1',
        component: Colors,
        icon: <HiOutlineColorSwatch />
    },
    {
        name: "Taskbar",
        id: 's2',
        component: Taskbar,
        icon: <CgMoveTask />
    },
    {
        name: "Shapes",
        id: 's3',
        component: Shapes,
        icon: <CgShapeTriangle />
    },
    {
        name: "Time",
        id: 's4',
        component: Time,
        icon: <WiTime2 />
    },
    {
        name: "Info",
        id: 's5',
        component: Info,
        icon: <BsInfoCircle />
    },
]

const settingsList = settingsData.map(item => <li key={item.id} ><item.component name={item.name} icon={item.icon}/></li>)

const Settings = () => {
    return (
        <IconContext.Provider value={{ size: 20, color: 'white' }}>
            <ul className='SettingsList'>
                {settingsList}
            </ul>
        </IconContext.Provider>
    );
}

export default Settings;