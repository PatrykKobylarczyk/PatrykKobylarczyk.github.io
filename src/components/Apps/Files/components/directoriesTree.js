import React from 'react';

import Portfolio from './views/Portfolio'
import Skills from './views/Skills'
import Education from './views/Education'
import Experience from './views/Experience'

export const directoriesTree = [

    {
        path: 'main',
        name: 'main',
        type: 'main',
        extension: 'not applicable',
        children: [
            {
                path: 'main/portfolio',
                name: 'portfolio',
                type: 'directory',
                extension: 'not applicable',
                children: [
                    {
                        path: 'main/portfolio/weather-app.lnk',
                        name: 'weather-app',
                        type: 'file',
                        extension: '.lnk',
                        icon: 'weatherApp',
                        component: <Portfolio />,
                        data: {
                            about: `Simple React Weather-app I made to learn about API. It uses openWeatherMap API to get data about current weather and 7 day forecast in cities around the world`,
                            github:
                                'https://github.com/PatrykKobylarczyk/weather-app',
                            live:
                                'https://patrykkobylarczyk.github.io/weather-app/',
                        },
                    },
                    {
                        path: 'main/portfolio/pixel-art.lnk',
                        name: 'pixel-art',
                        type: 'file',
                        extension: '.lnk',
                        icon: 'pixel-art',
                        component: <Portfolio />,
                        data: {
                            about: `Simple React Weather-app I made to learn about API. It uses openWeatherMap API to get data about current weather and 5day forecast in cities around the world`,
                            github:
                                'https://github.com/Hisashin7331/weather-app',
                            live:
                                'https://hisashin7331-weather-app.herokuapp.com/',
                        },
                    }
                ],
            },
            {
                path: 'main/skills',
                name: 'skills',
                type: 'directory',
                extension: 'not applicable',
                children: [
                    {
                        path: 'main/skills/html.txt',
                        name: 'HTML',
                        type: 'file',
                        extension: '.txt',
                        icon: 'html',
                        component: <Skills />,
                        data: {
                            level: 4,
                            additional: ['HTML5'],
                        },
                    },
                    {
                        path: 'main/skills/css.txt',
                        name: 'CSS',
                        type: 'file',
                        extension: '.txt',
                        icon: 'css',
                        component: <Skills />,
                        data: {
                            level: 4,
                            additional: ['SASS/SCSS', 'RWD'],
                        },
                    },
                    {
                        path: 'main/skills/javascript.txt',
                        name: 'JavaScript',
                        type: 'file',
                        extension: '.txt',
                        icon: 'javascript',
                        component: <Skills />,
                        data: {
                            level: 4,
                            additional: [
                                'ES6',
                                'async/await',
                                'Promises',
                                'array methods',
                            ],
                        },
                    },
                    {
                        path: 'main/skills/react.txt',
                        name: 'React',
                        type: 'file',
                        extension: '.txt',
                        icon: 'react',
                        component: <Skills />,
                        data: {
                            level: 3,
                            additional: [
                                'styled components',
                                'router',
                                'redux',
                                'prop types',
                            ],
                        },
                    },
                ],
            },
            {
                path: 'main/education',
                name: 'education',
                type: 'directory',
                extension: 'not applicable',
                children: [
                    {
                        path: 'main/education/amuz.png',
                        name: 'Akademia Muzyczna',
                        type: 'file',
                        extension: '.png',
                        icon: 'amuz',
                        component: <Education />,
                        data: {
                            yearsFrom: 2016,
                            yearsTo: 2020,
                            field: 'IT Specialist',
                        },
                    },
                ],
            },
            {
                path: 'main/experience',
                name: 'experience',
                type: 'directory',
                extension: 'not applicable',
                children: [
                    {
                        path: 'main/experience/waterhouse.pdf',
                        name: 'WaterHouse',
                        type: 'file',
                        extension: '.pdf',
                        icon: 'waterhouse',
                        component: <Experience />,
                        data: {
                            year: 2019,
                            field: 'Real Estate Agent',
                        },
                    },
                    {
                        path: 'main/experience/zirkelstudio.pdf',
                        name: 'zirkelstudio',
                        type: 'file',
                        extension: '.pdf',
                        icon: 'zirkelstudio',
                        component: <Experience />,
                        data: {
                            year: 2018,
                            field: 'Real Estate Photography',
                        },
                    },
                ],
            },
        ],
    }
]