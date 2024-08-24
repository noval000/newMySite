import React from 'react';
import './home.css';
import Section1 from "./section1/section1";
import Section2 from "./section2/section2";
import Section3 from "./section3/section3";
import {Cursor} from "react-creative-cursor";
import video from "../../videos/web_development.mp4";

const Home = () => {



    return (
        <>
                <div className="home h100_section_one" data-cursor-exclusion>

                    {/*<div className="name_section">*/}
                    {/*    <span className="border_name_section">*/}
                    {/*        Главная*/}
                    {/*    </span>*/}
                    {/*</div>*/}


                    <div className="video-background">
                        <video className='videoTag' autoPlay loop>
                            <source src={video} type='video/mp4' />
                        </video>
                        <div id="block1">
                            <video width="320" height="240" controls>
                                <source src={video} type="video/mp4"></source>
                            </video>
                        </div>

                        <div id="block2">

                        </div>

                        <div id="block3">

                        </div>
                    </div>
                </div>
                <div className="container content">
                    <Section1 />
                </div>
                <div className="home h_section_two">
                    <div className="name_section">
                        <span className="border_name_section">
                             Услуги
                        </span>
                    </div>
                    <div className="container">
                        <Section2 />
                    </div>
                </div>
                <div className="home">
                    <div className="name_section">
                        <span className="border_name_section">
                             О нас
                        </span>
                    </div>
                    <div className="container">
                        <Section3 />
                    </div>



                </div>



        </>

    );
};

export default Home;