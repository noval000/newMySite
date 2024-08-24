import React from 'react';
import {Fade, Slide} from "react-awesome-reveal";
import nout from "../../../images/home/nout.svg";
import cube from "../../../images/home/cube.svg";
import coffe from "../../../images/home/coffee.svg";
import 'react-creative-cursor/dist/styles.css';
import './section1.css';
import video  from '../../../videos/web_development.mp4';




const Section1 = () => {

    const color_change = document.querySelectorAll('.css-1c2fuzs');
    color_change.forEach(el => {


    })


    return (
        <>

            <div id="main" className="block_hello_main" data-cursor-exclusion style={{position:'absolute'}}>
                <div className="hello_text mb100">
                    <Fade delay={0} cascade damping={0.05}>
                        IT Prodigy
                    </Fade>
                    <Fade delay={300} cascade damping={0.05}>
                        Web development studio!
                    </Fade>
                </div>
                <Slide duration={1000} delay={200}>
                    <div className="description_text">
                        Наша команда профессионалов готова воплотить в жизнь любые проекты.
                    </div>
                </Slide>
            </div>
            <div className="block_parallax">
                <Fade duration={3000}>
                    <div className="image_nout">
                        <img src={nout} alt=""/>
                    </div>
                </Fade>
                <Fade delay={500} duration={3000}>
                    <div className="image_cube">
                        <img src={cube} alt=""/>
                    </div>
                </Fade>
                <Fade delay={1000} duration={3000}>
                    <div className="image_coffee">
                        <img src={coffe} alt=""/>
                    </div>
                </Fade>
            </div>
        </>

    );
};

export default Section1;