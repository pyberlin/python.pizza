import Speaker from '@/Types/Speaker';
import Sponsor from '@/Types/Sponsor';
import Schedule, { Types } from '@/Types/Schedule';

const KEYNOTES = 0;
const NAOMI_CEDER = 1;
const YENNY_CHEUNG = 2;
const ANA_PAULA_GOMES = 3;
const AVARE_STEWART = 4;
const IACOPO_SPALLETTI = 5;
const VALERIO_MAGGIO = 6;
const ELENA_NIEDDU = 7;

export const SPEAKERS: Speaker[] = [
    {
        name: '',
        photo: require('../assets/speakers/keynotes.png'),
        job: 'Speaker',
    },
    {
        name: 'Naomi Ceder, Chair of The PSF',
        photo: require('../assets/speakers/naomi_ceder.jpg'),
        job: 'Chair @ Python Software Foundation',
        social: 'https://twitter.com/naomiceder',
    },
    {
        name: 'Yenny Cheung, Software Engineer @ Yelp',
        photo: require('../assets/speakers/yenny_cheung.jpg'),
        job: 'Software Enginer @Yelp',
        social: 'https://twitter.com/yennycheung',
    },
    {
        name: 'Ana Paula Gomes',
        photo: require('../assets/speakers/anapaula.jpg'),
        job: 'Software Engineer @ Thermondo',
        social: 'https://twitter.com/anapaulagomess',
    },
    {
        name: 'Avaré Stewart',
        photo: require('../assets/speakers/avarestewart.jpg'),
        job: 'Data Scientist',
        social: 'https://twitter.com/AvareStewart',
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
        {
            id: 'psf',
            name: 'Python Software Foundation',
            photo: require('Assets/sponsors/psf-logo-narrow-256x84-alpha.png'),
            link: 'https://www.python.org/psf/',
        },
        {
            id: 'eps',
            name: 'EuroPython Society',
            photo: require('Assets/sponsors/eps.png'),
            link: 'https://www.europython-society.org/',
        },
        {
            id: 'manning',
            name: 'Manning',
            photo: require('Assets/sponsors/Manninglogo_outline.png'),
            link: 'https://www.manning.com/',
        },
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
        time: '09:15',
        title: 'Opening',
        type: Types.OTHER,
    },
    {
        order: 2,
        time: '09:30',
        title: "Keynote: TBA",
        type: Types.TALK,
        speaker: NAOMI_CEDER,
    },
    {
        order: 3,
        time: '10:00',
        title: "Creating a Twitter client for Matt Murdock",
        type: Types.TALK,
        speaker: ANA_PAULA_GOMES,
    },
    {
        order: 4,
        time: '10:12',
        title: "Free slot",
        type: Types.OTHER,
    },
    {
        order: 5,
        time: '10:24',
        title: "Free slot",
        type: Types.OTHER,
    },
    {
        order: 6,
        time: '10:36',
        title: "Free slot",
        type: Types.OTHER,
    },
    {
        order: 7,
        time: '10:48',
        title: "Free slot",
        type: Types.OTHER,
    },

    {
        order: 8,
        time: '11:00',
        title: 'Break',
        type: Types.BREAK,
    },

    {
        order: 9,
        time: '11:30',
        title: "Free slot",
        type: Types.OTHER,
    },
    {
        order: 10,
        time: '11:42',
        title: "Free slot",
        type: Types.OTHER,
    },
    {
        order: 11,
        time: '11:54',
        title: "Free slot",
        type: Types.OTHER,
    },
    {
        order: 12,
        time: '12:06',
        title: "Free slot",
        type: Types.OTHER,
    },
    {
        order: 13,
        time: '12:18',
        title: "Free slot",
        type: Types.OTHER,
    },

    {
        order: 14,
        time: '12:30',
        title: "Free slot",
        type: Types.OTHER,
    },
    {
        order: 15,
        time: '12:42',
        title: "Free slot",
        type: Types.OTHER,
    },
    {
        order: 16,
        time: '13:00',
        title: '🍕 Oh gosh pizza 🍕',
        type: Types.LUNCH,
    },
    {
        order: 17,
        time: '14:30',
        title: "Keynote TBA",
        type: Types.TALK,
        speaker: YENNY_CHEUNG,
    },

    {
        order: 18,
        time: '15:00',
        title: "Building - Distributed - Data Science Team",
        type: Types.TALK,
        speaker: AVARE_STEWART,
    },
    {
        order: 19,
        time: '15:12',
        title: "Free slot",
        type: Types.OTHER,
    },
    {
        order: 20,
        time: '15:24',
        title: "Free slot",
        type: Types.OTHER,
    },
    {
        order: 21,
        time: '15:36',
        title: "Free slot",
        type: Types.OTHER,
    },
    {
        order: 22,
        time: '15:48',
        title: "Free slot",
        type: Types.OTHER,
    },

    {
        order: 23,
        time: '16:00',
        title: 'Break',
        type: Types.BREAK,
    },

    {
        order: 24,
        time: '16:30',
        title: "Free slot",
        type: Types.OTHER,
    },
    {
        order: 25,
        time: '16:42',
        title: "Free slot",
        type: Types.OTHER,
    },
    {
        order: 26,
        time: '16:54',
        title: "Free slot",
        type: Types.OTHER,
    },
    {
        order: 27,
        time: '17:06',
        title: "Free slot",
        type: Types.OTHER,
    },
    {
        order: 28,
        time: '17:18',
        title: "Free slot",
        type: Types.OTHER,
    },

    {
        order: 29,
        time: '17:30',
        title: "Free slot",
        type: Types.OTHER,
    },
    {
        order: 30,
        time: '17:42',
        title: "Free slot",
        type: Types.OTHER,
    },
    {
        order: 31,
        time: '18:15',
        title: 'Closing',
        type: Types.OTHER,
    },
    {
        order: 32,
        time: '18:30',
        title: 'Happy hour & Networking',
        type: Types.OTHER,
    },
];
