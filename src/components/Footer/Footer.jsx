import React, {useState} from 'react';
import './Footer.css';
import {keyframes} from "@emotion/css";
import smile from "../../images/icon/smile.svg";
import smile2 from "../../images/icon/smile2.svg";
import {Reveal} from "react-awesome-reveal";
import {Cursor} from "react-creative-cursor";

const Footer = (props) => {



    return (
        <>
            <footer data-cursor-exclusion>
                <div className="container">
                    <div className="btn_order_footer">
                        <button>
                            Let`s talk
                        </button>
                    </div>

                </div>
            </footer>

        </>

    );
};

export default Footer;