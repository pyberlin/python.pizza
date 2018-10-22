import * as React from 'react';

import Container, { Sizes } from '@/Components/Container';

export default class About extends React.Component {
    render() {
        return (
            <section id="about">
                <Container size={Sizes.small}>
                    <h1>About Us</h1>
                    <p>
                        berlin.python.pizza is a micro conference organized by the Python Berlin Community
                        le ultime tendenze di programmazione Python organizzando sessioni di talk con speakers
                        provenienti da tutta Italia, e di invogliare le persone a creare a loro volta community locali
                        ed eventi per accelerare lo sviluppo tecnologico nel sud Italia.
                    </p>
                </Container>
            </section>
        );
    }
}
