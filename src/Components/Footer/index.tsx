import * as React from 'react';

import './index.css';

import Wave from '@/Components/Wave';
import Container, { Sizes } from '@/Components/Container';

const SOCIALS = [
    {
        name: 'twitter',
        icon: require('Assets/socials/twitter.png'),
        link: 'https://twitter.com/pythonpizzaconf/',
    },
    {
        name: 'github',
        icon: require('Assets/socials/youtube.png'),
        link: 'https://github.com/pyberlin/python.pizza',
    },
];

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <Wave />
                <Container size={Sizes.large}>
                    <div className="footer--socials">
                        {SOCIALS.map(social => (
                            <a
                                key={social.name}
                                id={social.name}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={social.icon} />
                            </a>
                        ))}
                    </div>
                </Container>
            </div>
        );
    }
}
