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
        name: 'Chiara Mezzavilla',
        photo: 'https://pbs.twimg.com/profile_images/843489367066918913/Eax3Rtgy_400x400.jpg',
        job: 'Software Developer @ Zalando',
        social: 'https://twitter.com/ChiaraM_87',
    },
];

export const SPONSORS: Sponsor[][] = [
    [
        {
            id: 'PySV',
            name: 'Python Software Verband',
            photo: require('Assets/sponsors/PySVlogo.png'),
            link: 'https://python-verband.org',
        },
        {
            id: 'wooga',
            name: 'wooga',
            photo: require('Assets/sponsors/wooga_pride_logo.png'),
            link: 'https://www.wooga.com/',
        },
        {
            id: 'infarm',
            name: 'imfarm',
            photo: require('Assets/sponsors/infarm.png'),
            link: 'https://www.infarm.com/',
        },
    ],
    /* [
         {
             id: 'pythonitalia',
             name: 'TBA',
             photo: 'https://via.placeholder.com/150',
             link: 'https://pycon.it/',
         },
         {
             id: 'psf',
             name: 'TBA',
             photo: 'https://via.placeholder.com/150',
             link: 'https://www.012factory.it/',
         },
         {
             id: 'f012actory',
             name: 'TBA',
             photo: 'https://via.placeholder.com/150',
             link: 'https://www.012factory.it/',
         },
     ],*/
];

export const SCHEDULE: Schedule[] = [
    /* {
         order: 0,
         time: '10:00',
         title: 'Welcome',
         type: Types.OTHER,
     },
     {
         order: 1,
         time: '10:30',
         title: 'Intro',
         type: Types.OTHER,
     },
     {
         order: 2,
         time: '10:45',
         title: 'TBA',
         type: Types.TALK,
         speaker: ELENA_NIEDDU,
     },
     {
         order: 3,
         time: '11:30',
         title: 'TBA',
         type: Types.TALK,
         speaker: DOMENICO_TESTA,
     },
     {
         order: 4,
         time: '12:15',
         title: 'Break',
         type: Types.BREAK,
     },
     {
         order: 5,
         time: '12:30',
         title: 'TBA',
         type: Types.TALK,
         speaker: IACOPO_SPALLETTI,
     },
     {
         order: 6,
         time: '13:15',
         title: 'TBA',
         type: Types.TALK,
         speaker: VINCENZO_SANTOPIETRO,
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
         title: 'TBA',
         type: Types.TALK,
         speaker: FIORELLA_DE_LUCA,
     },
     {
         order: 9,
         time: '15:45',
         title: 'TBA',
         type: Types.TALK,
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
         title: 'TBA',
         type: Types.TALK,
         speaker: SALVATORE_BUSIELLO,
     },
     {
         order: 12,
         time: '17:30',
         title: 'TBA',
         type: Types.TALK,
         speaker: ANDREA_STAGI,
     },
     {
         order: 13,
         time: '18:15',
         title: 'Outro',
         type: Types.OTHER,
     },*/
];
