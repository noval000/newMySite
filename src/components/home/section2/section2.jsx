import React from 'react';
import './section2.css';
import {Bounce, Fade, Reveal} from "react-awesome-reveal";
import smile from '../../../images/icon/smile.svg'
import smile2 from '../../../images/icon/smile2.svg'
import smile3 from '../../../images/icon/smile3.svg'
import {keyframes} from "@emotion/css";
const Section2 = () => {




    const customAnimation = keyframes`
      0% {
        opacity: 0;
        background-image: url("${smile}");
        background-repeat: no-repeat;
        position: absolute;
        width: 50px;
        height: 50px;
        right: 40px;
        bottom: 0;
        background-size: contain;
        animation-duration: 700ms!important;
      }
    
      100% {
        opacity: 1;
        background-image: url("${smile2}");
        background-repeat: no-repeat;
        position: absolute;
        width: 130px;
        height: 130px;
        right: 40px;
        bottom: 0;
        background-size: contain;
        animation-duration: 700ms!important;
      }
    `;


    return (
            <div id="services" className="block_two_main" data-cursor-exclusion>
                <div className="title_block__two" >
                    <p className='left_margin_title__block_two'>
                        <Fade cascade damping={0.02}>
                            Web development studio!
                        </Fade>
                    </p>
                    <p>
                        <Fade
                            cascade damping={0.02} delay={600}>
                            Наша команда профессионалов готова воплотить в жизнь любые проекты.
                        </Fade>
                    </p>
                </div>
                <Reveal keyframes={customAnimation}>
                    <div className="icon_smile">

                    </div>
                </Reveal>
            </div>
    );
};

export default Section2;