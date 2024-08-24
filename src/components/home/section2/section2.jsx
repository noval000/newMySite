import React from 'react';
import './section2.css';
import {Fade} from "react-awesome-reveal";
import web_design from '../../../images/about/web_design2.svg';
import web_dev from '../../../images/about/web_dev.svg';
import WebDesignCard from "./block_uslugi/web_design_card";
import DevelopmentCard from "./block_uslugi/development_card";
import Tilt from "react-parallax-tilt";
const Section2 = () => {


    const backround_web_design = {
        backgroundImage: `url(${web_dev})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }
    const backround_web_dev = {
        backgroundImage: `url(${web_dev})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }




    return (
            <div id="services" className="block_two_main pt100" data-cursor-exclusion>
                <div className="title_two_section mb100">
                    <Fade delay={0} cascade damping={0.05}>
                        Мы оказываем такие услуги, как:
                    </Fade>
                </div>
                <div className="twelth_block_uslugs">
                    <Tilt style={{backgroundColor:'#060A30', borderRadius:'10px', border:'1px solid #D2D2D2'}}
                        glareEnable={true} tiltMaxAngleX={10}
                          tiltMaxAngleY={10} perspective={1000}
                          glareColor={"#D2D2D2"}>
                        <WebDesignCard backround_web_design={backround_web_design}/>
                    </Tilt>
                    <Tilt style={{backgroundColor:'#060A30', borderRadius:'10px', border:'1px solid #D2D2D2'}}
                          glareEnable={true} tiltMaxAngleX={10}
                          tiltMaxAngleY={10} perspective={1000}
                          glareColor={"#D2D2D2"}>
                        <DevelopmentCard backround_web_dev={backround_web_dev}/>
                    </Tilt>
                    <Tilt style={{backgroundColor:'#060A30', borderRadius:'10px', border:'1px solid #D2D2D2'}}
                          glareEnable={true} tiltMaxAngleX={10}
                          tiltMaxAngleY={10} perspective={1000}
                          glareColor={"#D2D2D2"}>
                        <DevelopmentCard backround_web_dev={backround_web_dev}/>
                    </Tilt>
                </div>
            </div>
    );
};

export default Section2;