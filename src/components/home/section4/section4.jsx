import React from 'react';
import {Fade} from "react-awesome-reveal";
import './section4.css'
import weblist from "./weblist";
import list_web_design from "./card_web_design/list_web_design";
import ListWebTechnology from "./card_web_technology/list_web_technology";
import CompListWebDesign from "./card_web_design/comp_list_web_design";

const Section4 = (props) => {




    return (
        <div id='about' className="block_thour_section pt100" data-cursor-exclusion>
            <div className="title_thour_section">
                <Fade delay={0} cascade damping={0.05}>
                    О нас
                </Fade>
            </div>
            <div className="container pt160">
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
                    <p style={{paddingTop:'70px'}}>
                        <Fade
                            cascade damping={0.02} delay={600}>
                            Инструменты которые мы используем
                        </Fade>
                    </p>
                </div>
                <div className="block_web_technology">
                    <Fade duration={1000}>
                        <ListWebTechnology  weblist={weblist}/>
                    </Fade>
                    <Fade duration={1000} delay={300}>
                        <CompListWebDesign  list_web_design={list_web_design}/>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Section4;