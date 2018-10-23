import * as React from 'react';

import './Coc.css';

import Container, { Sizes } from '@/Components/Container';

export default () => (
    <section id="coc" className="coc">
        <Container size={Sizes.medium}>
            <h1>Code of conduct</h1>

            <br />

            <h2>Expected Behavior</h2>
            <p>
                <ul>
                    <li>
                        Participate in an authentic and active way. In doing so, you contribute to the health and longevity of this community.
                    </li>
                    <li>
                        Exercise consideration and respect in your speech and actions.
                    </li>
                    <li>
                        Attempt collaboration before conflict.
                    </li>
                    <li>
                        Refrain from demeaning, discriminatory, or harassing behavior and speech.
                    </li>
                    <li>
                        Be mindful of your surroundings and of your fellow participants. Alert community leaders if you notice a dangerous situation, someone in distress, or violations of this Code of Conduct, even if they seem inconsequential.
                    </li>
                </ul>
            </p>

            <br />

            <h2>Unacceptable Behavior</h2>
            <p>
                Unacceptable behaviors include: intimidating, harassing, abusive, discriminatory, derogatory or demeaning speech or actions by any participant in our community online, at all related events and in one-on-one communications carried out in the context of community business. Community event venues may be shared with members of the public; please be respectful to all patrons of these locations.
            </p>
            <p>
                Harassment includes: harmful or prejudicial verbal or written comments related to gender, sexual orientation, race, religion, disability; inappropriate use of nudity and/or sexual images (including presentation slides); inappropriate depictions of violence (including presentation slides); deliberate intimidation, stalking or following; harassing photography or recording; sustained disruption of talks or other events; inappropriate physical contact, and unwelcome sexual attention.
            </p>

            <br />

            <h2>Consequences of Unacceptable Behavior</h2>
            <p>
                Unacceptable behavior from any community member, including sponsors and those with decision-making authority, will not be tolerated.
            </p>

            <p>
                Anyone asked to stop unacceptable behavior is expected to comply immediately.
            </p>

            <p>
                If a community member engages in unacceptable behavior, the community organizers may take any action they deem appropriate, up to and including a temporary ban or permanent expulsion from the community without warning (and without refund in the case of a paid event).
            </p>

            <br />

            <h2>If You Witness or Are Subject to Unacceptable Behavior</h2>
            <p>
                If you are subject to or witness unacceptable behavior, or have any other concerns, please notify a community organizer as soon as possible. You can find a list of organizers to contact for each of the supporters of this code of conduct at the bottom of this page.
            </p>

            <p>
                Additionally, community organizers are available to help community members engage with local law enforcement or to otherwise help those experiencing unacceptable behavior feel safe. In the context of in-person events, organizers will also provide escorts as desired by the person experiencing distress.
            </p>

            <br />

            <h2>Addressing Grievances</h2>
            <p>
                If you feel you have been falsely or unfairly accused of violating this Code of Conduct, you should notify one of the event organizers with a concise description of your grievance.
            </p>

            <p>
                Your grievance will be handled in accordance with our existing governing policies.
            </p>

            <br />

            <h2>Scope</h2>
            <p>
                We expect all community participants (contributors, paid or otherwise; sponsors; and other guests) to abide by this Code of Conduct in all community venues—online and in-person—as well as in all one-on-one communications pertaining to community business.
            </p>

            <ul>
                <li>
                    Marco Acierno{' '}
                    <a rel="noopener noreferrer" target="_blank" href="mailto:marco@python.pizza">
                        marco@python.pizza
                    </a>
                </li>
            </ul>

            <p>
                Inspired by the{' '}
                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://berlincodeofconduct.org/"
                >
                    Berlin Code of Conduct
                </a>.
            </p>
        </Container>
    </section >
);
