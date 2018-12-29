import Speaker from '@/Types/Speaker';
import Sponsor from '@/Types/Sponsor';
import Schedule, { Types } from '@/Types/Schedule';

const KEYNOTES = 0;
const NAOMI_CEDER = 1;
const YENNY_CHEUNG = 2;
const ANA_PAULA_GOMES = 3;
const AVARE_STEWART = 4;
const ALEXANDER_CS_HENDORF = 5;
const PATRICK_ARMINIO = 6;
const JESSICA_GREENE = 7;
const MARKUS_HOLTERMANN = 8;
const CRISTIAN_MAUREIRA_FREDES = 9;
const ANASTASIIA_TYMOSHCHUK = 10;
const RICHARD_GOULD = 11;
const JEREMY_TULOUP = 12;
const MIKA_NAYLOR = 13;
const DANIELA_CRACIUN = 14;
const FINN_PAULS = 15;

export const SPEAKERS: Speaker[] = [
    {
        name: '',
        photo: require('../assets/speakers/naomi_ceder.jpg'),
        job: 'Speaker',
    },
    {
        name: 'Naomi Ceder, Chair of The PSF',
        photo: require('../assets/speakers/naomi_ceder.jpg'),
        job: 'Chair @ Python Software Foundation',
        social: 'https://twitter.com/naomiceder',
    },
    {
        name: 'Yenny Cheung, Software Engineer @Yelp',
        photo: require('../assets/speakers/yenny_cheung.jpg'),
        job: 'Software Enginer @Yelp',
        social: 'https://twitter.com/yennycheung',
    },
    {
        name: 'Ana Paula Gomes, Software Engineer @Thermondo',
        photo: require('../assets/speakers/anapaula.jpg'),
        job: 'Software Engineer @Thermondo',
        social: 'https://twitter.com/anapaulagomess',
    },
    {
        name: 'Avaré Stewart, Data Scientist',
        photo: require('../assets/speakers/avarestewart.jpg'),
        job: 'Data Scientist',
        social: 'https://twitter.com/AvareStewart',
    },
    {
        name: 'Alexander Hendorf, Senior Data Consultant',
        photo: require('../assets/speakers/alexhendorf.png'),
        job: 'Königsweg',
        social: 'https://twitter.com/hendorf',
    },
    {
        name: 'Patrick Arminio, Backend Engineer @OnVerveTech',
        photo: require('../assets/speakers/patrick_arminio.jpg'),
        job: 'Backend Engineer @OnVerveTech',
        social: 'https://twitter.com/patrick91',
    },
    {
        name: 'Jessica Greene, Junior Developer @Ecosia',
        photo: require('../assets/speakers/jessica_greene.jpg'),
        job: 'Junior Developer @Ecosia',
        social: 'https://twitter.com/sleepypioneer',
    },
    {
        name: 'Markus Holtermann, Engineer @crateio',
        photo: require('../assets/speakers/markus_holtermann.jpg'),
        job: 'Markus Holtermann, Engineer @crateiow',
        social: 'https://twitter.com/m_holtermann',
    },
    {
        name: 'Cristián Maureira-Fredes, Software Engineer @qtproject',
        photo: require('../assets/speakers/cristian_maureira.jpg'),
        job: 'Cristián Maureira-Fredes, Software Engineer @qtproject',
        social: 'https://twitter.com/cmaureir',
    },
    {
        name: 'Anastasiia Tymoshchuk, Lead software Developer @cyreninc',
        photo: require('../assets/speakers/anastasiia_t.jpg'),
        job: 'Anastasiia Tymoshchuk, Lead software Developer @cyreninc',
        social: 'https://twitter.com/anastasiatymo',
    },
    {
        name: 'Richard Gould, Senior Backend Engineer @daliaresearch',
        photo: require('../assets/speakers/richard_gould.jpg'),
        job: 'Richard Gould, Senior Backend Engineer @daliaresearch',
        social: 'https://twitter.com/u2622',
    },
    {
        name: 'Jeremy Tuloup, Software Engineer @wooga',
        photo: require('../assets/speakers/jeremy_tuloup.jpg'),
        job: 'Jeremy Tuloup, Software Engineer @wooga',
        social: 'https://twitter.com/jtpio',
    },
    {
        name: 'Mika Naylor, Developer @crateio',
        photo: require('../assets/speakers/mika_naylor.jpg'),
        job: 'Mika Naylor, Developer @crateio',
        social: 'https://twitter.com/autophagian',
    },
    {
        name: 'Daniela Crăciun, Software Engineer @deliveryhero',
        photo: require('../assets/speakers/daniela_craciun.jpg'),
        job: 'Daniela Crăciun, Software Engineer @deliveryhero',
        social: 'https://github.com/danielacraciun',
    },
    {
        name: 'Finn Pauls, Freelance Software Engineer',
        photo: require('../assets/speakers/finn_pauls.jpg'),
        job: 'Finn Pauls, Freelance Software Engineer',
        social: 'https://twitter.com/finnpauls',
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
        title: "Oh, I Found a Security Issue",
        type: Types.TALK,
        speaker: MARKUS_HOLTERMANN,
    },
    {
        order: 4,
        time: '10:12',
        title: "Python on bare metal - fast & efficient code with MicroPython",
        type: Types.TALK,
        speaker: JESSICA_GREENE,
    },
    {
        order: 5,
        time: '10:24',
        title: "Deep Learning for Fun (Part 2.75)",
        type: Types.TALK,
        speaker: ALEXANDER_CS_HENDORF,
    },
    {
        order: 6,
        time: '10:36',
        title: "Creating a Twitter client for Matt Murdock",
        type: Types.TALK,
        speaker: ANA_PAULA_GOMES,
    },
    {
        order: 7,
        time: '10:48',
        title: "Detecting Compositional Features in Piet Mondrians Paintings with OpenCV",
        type: Types.TALK,
        speaker: FINN_PAULS,
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
        title: "Bring your C++ project to Python land",
        type: Types.TALK,
        speaker: CRISTIAN_MAUREIRA_FREDES,
    },
    {
        order: 10,
        time: '11:42',
        title: "Ravioli 🆚 Pelmeni software architecture (microservices vs services)",
        type: Types.TALK,
        speaker: ANASTASIIA_TYMOSHCHUK,
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
        title: "Strawberry: a new GraphQL library for Python",
        type: Types.TALK,
        speaker: PATRICK_ARMINIO,
    },
    {
        order: 19,
        time: '15:12',
        title: "Building - Distributed - Data Science Team",
        type: Types.TALK,
        speaker: AVARE_STEWART,
    },
    {
        order: 20,
        time: '15:24',
        title: "Inspecting CPython Bytecode in JupyterLab",
        type: Types.TALK,
        speaker: JEREMY_TULOUP,
    },
    {
        order: 21,
        time: '15:36',
        title: "Beyond the pip",
        type: Types.TALK,
        speaker: DANIELA_CRACIUN,
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
        title: "Code Faster By Improving Your Memory",
        type: Types.TALK,
        speaker: RICHARD_GOULD,
    },
    {
        order: 25,
        time: '16:42',
        title: "Any Formatter You Like, As Long As Its Black",
        type: Types.TALK,
        speaker: MIKA_NAYLOR,
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
