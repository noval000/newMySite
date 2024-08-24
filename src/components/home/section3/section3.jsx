import React from 'react';
import './section3.css';
import {Fade} from "react-awesome-reveal";

const Section3 = (props) => {
    return (
        <div className="block_three_section pt100">
            <div className="title_three_section">
                <Fade delay={0} cascade damping={0.05}>
                    О нас
                </Fade>
            </div>
            <div className="block_about">
                
            </div>
        </div>
    );
};

export default Section3;