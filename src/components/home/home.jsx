import React, {useState} from 'react';
import './home.css';
import Section1 from "./section1/section1";
import Section2 from "./section2/section2";
import Section3 from "./section3/section3";
import {Cursor} from "react-creative-cursor";
import video from "../../videos/web_development.mp4";

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

                <div className="home h100_section_one" data-cursor-exclusion>

                    {/*<div className="name_section">*/}
                    {/*    <span className="border_name_section">*/}
                    {/*        Главная*/}
                    {/*    </span>*/}
                    {/*</div>*/}


                    <video style={{maxWidth:'100%'}} controls autoPlay loop muted>
                        <source src={video} type="video/mp4" >
                        </source>
                    </video>

                    <div className="container content">
                        <Section1 />
                    </div>
                </div>

                <div className="home h_section_two">
                    {/*<div className="name_section">*/}
                    {/*    */}
                    {/*    <span className="border_name_section">*/}
                    {/*         Услуги*/}
                    {/*    </span>*/}
                    {/*    */}
                    {/*</div>*/}
                        <Section2 />
                </div>
                <div className="home">
                    {/*<div className="name_section">*/}
                    {/*</div>*/}
                        <Section3 setCursorUslugi={setCursorUslugi}/>



                </div>



        </>

    );
};

export default Home;