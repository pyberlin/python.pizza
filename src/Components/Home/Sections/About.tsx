import * as React from 'react';

import Container, { Sizes } from '@/Components/Container';

export default class About extends React.Component {
    render() {
        return (
            <section id="about">
                <Container size={Sizes.small}>
                    <h1>About Us</h1>

                    <p>
                        <b>Python Pizza</b> is a micro conference organized by the Python Berlin Community.
                        We bring the Python Community together for some amazing original Pizza™.
                    </p>

                    <p>
                        We believe in and encourage practical sessions, in which developers share their experience and lessons from real-world projects.
                        Each talk is 10 mins lenght talk.
                    </p>

                </Container>
            </section>
        );
    }
}
