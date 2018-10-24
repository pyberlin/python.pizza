import * as React from 'react';

import Container, { Sizes } from '@/Components/Container';

export default class About extends React.Component {
    render() {
        return (
            <section id="about">
                <Container size={Sizes.small}>
                    <h1>About Python Pizza</h1>

                    <p>
                        <b>Python Pizza</b> is a micro conference organized by the Python Berlin Community.

                        <br />
                        We bring the Python Community together for some amazing original Pizza™.

                        <br />
                        We believe in and encourage practical sessions, in which developers share their experience and lessons from real-world projects.

                        <br />
                        Each talk is 10 mins lenght talk.
                    </p>

                </Container>
            </section>
        );
    }
}
