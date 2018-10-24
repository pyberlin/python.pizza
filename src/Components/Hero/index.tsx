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
                        <a href="https://www.google.com/maps/place/Berlino/@52.5069296,13.1438655,10z/data=!3m1!4b1!4m5!3m4!1s0x47a84e373f035901:0x42120465b5e3b70!8m2!3d52.5200066!4d13.404954" target="_blank" rel="noopener noreferrer">
                            Berlin @ TBA
                        </a>
                    </h2>
                    <h2>23 February 2019</h2>
                </div>

                <Wave />
            </div>
        );
    }
}
