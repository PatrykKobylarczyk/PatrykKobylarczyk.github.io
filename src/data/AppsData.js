import { GrSettingsOption } from 'react-icons/gr'
import { RiGamepadLine } from 'react-icons/ri'
import { FcOpenedFolder } from 'react-icons/fc'
import { BiMailSend } from 'react-icons/bi'


export const AppsData =[

    {
        "id": 1,
        "name": "Files",
        "icon": <FcOpenedFolder/>,
        "iconColor": '',
        "background": "linear-gradient(15deg, #388a55, #379e69, #27c593, #00dbac)",
        "backgroundHover": "linear-gradient(15deg, #4ebf76, #48cf89, #2feeb1, #00ffc8)"
    },
    {
        "id": 2,
        "name": "Mail",
        "icon": <BiMailSend/>,
        "iconColor": 'white',
        "background": "linear-gradient(15deg, #1e265c, #1e3067, #174a84, #006fa8, #0099cc, #12c1e8, #3cdef9, #4aeaff)",
        "backgroundHover": "linear-gradient(15deg, #4252c9, #2e5fd2, #007ce4, #00a1f0, #15c4f4, #75e3f7, #a6f7fb, #b8fffe)"
    },
    {
        "id": 3,
        "name": "Settings",
        "icon": <GrSettingsOption/>,
        "iconColor": '',
        "background": "linear-gradient(15deg, #828282, #868686, #909090, #9d9d9d, #acacac, #bababa, #c5c5c5, #c9c9c9)",
        "backgroundHover": "linear-gradient(15deg, #a6a6a6, #aaaaaa, #b3b3b3, #bfbfbf, #cecece, #dbdbdb, #e4e4e4, #e8e8e8)"
    },
    {
        "id": 4,
        "name": "Games",
        "icon": <RiGamepadLine/>,
        "iconColor": 'white',
        "background": "linear-gradient(15deg, #1a17cf, #9e00ab, #e6005e, #ed003b)",
        "backgroundHover": "linear-gradient(15deg, #201cff, #bc00cb, #ff0068, #ff0040)"
    }

]

