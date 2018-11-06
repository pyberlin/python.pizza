import Speaker from '@/Types/Speaker';
import Sponsor from '@/Types/Sponsor';
import Schedule, { Types } from '@/Types/Schedule';

const DOMENICO_TESTA = 0;
const FIORELLA_DE_LUCA = 1;
const ANDREA_STAGI = 2;
const SALVATORE_BUSIELLO = 3;
const VINCENZO_SANTOPIETRO = 4;
const IACOPO_SPALLETTI = 5;
const VALERIO_MAGGIO = 6;
const ELENA_NIEDDU = 7;

export const SPEAKERS: Speaker[] = [
    {
        name: 'Domenico Testa',
        photo: require('../assets/speakers/domenico-testa.jpg'),
        job: 'Bit4id',
    },
    {
        name: 'Fiorella De Luca',
        photo: require('../assets/speakers/fiorella-de-luca.jpg'),
        job: 'Women Techmakers',
        social: 'https://twitter.com/fiorella_deluca',
    },
    {
        name: 'Andrea Stagi',
        photo: require('../assets/speakers/andrea-stagi.jpg'),
        job: 'Lotrek',
        social: 'https://twitter.com/4stagi',
    },
    {
        name: 'Salvatore Busiello',
        photo: require('../assets/speakers/salvatore-busiello.jpg'),
        job: 'Lotrek',
        social: 'https://twitter.com/owanesh',
    },
    {
        name: 'Vincenzo Santopietro',
        photo: require('../assets/speakers/vincenzo-santopietro.jpg'),
        job: 'Intel Student Ambassador',
        social: 'https://twitter.com/vinx_key',
    },
    {
        name: 'Iacopo Spalletti',
        photo: require('../assets/speakers/iacopo-spalletti.png'),
        job: 'Nephila',
        social: 'https://twitter.com/yakkys',
    },
    {
        name: 'Valerio Maggio',
        photo: require('../assets/speakers/valerio-maggio.jpg'),
        job: 'Fondazione Bruno Kessler',
        social: 'https://twitter.com/leriomaggio',
    },
    {
        name: 'Elena Nieddu',
        photo: require('../assets/speakers/elena-nieddu.jpg'),
        job: 'PhD student in Computer Science',
        social: 'https://www.linkedin.com/in/elena-nieddu-b06896154/',
    },
];

export const SPONSORS: Sponsor[][] = [
    [
        {
            id: 'wooga',
            name: 'Wooga',
            photo: require('Assets/sponsors/wooga_logo.png'),
            link: 'https://www.wooga.com/',
        },
    ],
    [

    ],
    [

    ],
];

export const SCHEDULE: Schedule[] = [
    {
        order: 0,
        time: '09:00',
        title: 'Registration',
        type: Types.OTHER,
    },
    {
        order: 1,
        time: '09:30',
        title: 'Opening',
        type: Types.OTHER,
    },
    {
        order: 2,
        time: '09:45',
        title: "Free slot",
        type: Types.OTHER,
    },
    {
        order: 3,
        time: '10:00',
        title: "Free slot",
        type: Types.OTHER,
    },
    {
        order: 4,
        time: '10:20',
        title: 'Break',
        type: Types.BREAK,
    },
    {
        order: 5,
        time: '11:20',
        title: "Free slot",
        type: Types.OTHER,
    },
    {
        order: 6,
        time: '11:35',
        title: "Free slot",
        type: Types.OTHER,
    },
    {
        order: 7,
        time: '14:00',
        title: 'Pizza!',
        type: Types.LUNCH,
    },
    {
        order: 8,
        time: '15:00',
        title: "Free slot",
        type: Types.OTHER,
    },
    {
        order: 9,
        time: '15:45',
        title: "Free slot",
        type: Types.OTHER,
        speaker: VALERIO_MAGGIO,
    },
    {
        order: 10,
        time: '16:30',
        title: 'Break',
        type: Types.BREAK,
    },
    {
        order: 11,
        time: '16:45',
        title: "Free slot",
        type: Types.OTHER,
        speaker: SALVATORE_BUSIELLO,
    },
    {
        order: 12,
        time: '17:30',
        title: "Free slot",
        type: Types.OTHER,
        speaker: ANDREA_STAGI,
    },
    {
        order: 13,
        time: '18:15',
        title: 'Closing',
        type: Types.OTHER,
    },
    {
        order: 14,
        time: '18:30',
        title: 'Happy hour & Networking',
        type: Types.OTHER,
    },
];
