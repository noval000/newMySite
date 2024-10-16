import React, {useState} from 'react';
import './home.css';
import Section1 from "./section1/section1";
import Section2 from "./section2/section2";
import Section3 from "./section3/section3";
import {Cursor} from "react-creative-cursor";
import video from "../../videos/web_development2.mp4";
import Section4 from "./section4/section4";
import Portfolio from "./porfolio/portfolio";

const Home = (props) => {

    const [changeCursorUslugi, setCursorUslugi] = useState("#fff") //  смена курсора при наведении на услуги

    return (
        <>
            <Cursor
                cursorSize={changeCursorUslugi}
                animationDuration={.3}
                cursorBackgrounColor={'#fff'}
                isGelly={true}
                gellyAnimationAmount={10}
            />

                <div style={{height: 'calc(100vh - 75px)',
                    position: 'relative',
                    overflow: 'hidden',
                    zIndex: 1}} className="home h100_section_one" data-cursor-exclusion>
                    <video style={{maxWidth:'100%',width:'100%',position:'absolute',left:'0px'}} controls autoPlay loop muted>
                        <source src={video} type="video/mp4" >
                        </source>
                    </video>
                    <div className="container content">
                        <Section1 />
                    </div>
                </div>
                <div className="home h_section_two">
                    <Section2 />
                </div>
                <div className="home">
                    <Section3 setCursorUslugi={setCursorUslugi}/>
                </div>
                <div className="home">
                    <Section4 setCursorUslugi={setCursorUslugi}/>
                </div>
                <div className="home">
                    <Portfolio setCursorUslugi={setCursorUslugi}/>
                </div>



        </>

    );
};

export default Home;