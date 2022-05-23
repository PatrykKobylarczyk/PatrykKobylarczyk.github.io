import React from 'react';

import { FiSettings } from 'react-icons/fi'
import { RiGamepadLine } from 'react-icons/ri'
import { AiOutlineFolderOpen } from 'react-icons/ai'
import { BiMailSend } from 'react-icons/bi'
import { MdOutlineDraw } from 'react-icons/md'
import { TiWeatherPartlySunny } from 'react-icons/ti'


export const AppsData = [

    {
        id: 1,
        name: "Files",
        icon: <AiOutlineFolderOpen />
    },
    {
        id: 2,
        name: "Mail",
        icon: <BiMailSend />
    },
    {
        id: 3,
        name: "Settings",
        icon: <FiSettings />
    },
    {
        id: 4,
        name: "Games",
        icon: <RiGamepadLine />
    },
    {
        id: 5,
        name: "PixelArt",
        icon: <MdOutlineDraw />
    },
    {
        id: 6,
        name: "WeatherApp",
        icon: <TiWeatherPartlySunny />
    }

]

