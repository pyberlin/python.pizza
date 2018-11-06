import * as React from 'react';

import Wave from '@/Components/Wave';

import './index.css';

export default class Hero extends React.Component {
    render() {
        return (
            <div className="hero">
                <div className="hero--info">
                    <h1>Python Pizza</h1>
                    <h2>
                        <a href="https://www.google.com/maps/place/Wooga/@52.5287069,13.4139955,17z/data=!3m1!4b1!4m5!3m4!1s0x47a84e05ac31e3a9:0x69f3e8333126bae7!8m2!3d52.5287037!4d13.4161895" target="_blank" rel="noopener noreferrer">
                            Berlin @ Wooga
                        </a>
                    </h2>
                    <h2>23 February 2019</h2>
                </div>

                <Wave />
            </div>
        );
    }
}
