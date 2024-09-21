import React from 'react';
import HoverVideoPlayer from "react-hover-video-player";
import video from "../../../../videos/web_development.mp4";
import './card.css'

const CardBottom = (props) => {
    const changeHoverLink = () => {
        props.setCursorUslugi('#292929')
    }
    const changeHoverLinkOut = () => {
        props.setCursorUslugi("#fff")
    }

    return (
        <div className='card_uslugi_section_three' >


            {props.cardsBottom.map(el => (
                <div className='one_usluga_section__three'>
                    <HoverVideoPlayer
                        onMouseEnter={changeHoverLink}
                        onMouseLeave={changeHoverLinkOut}
                        videoSrc={video}
                        pausedOverlay={

                            <div
                                className="border_for_usligi_bottom" style={{height:'500px',padding:'20px',backgroundColor:'#292929'}}>
                                <div className="name_card_uslugi_section_three">
                                    {el.name}
                                </div>
                                <div className="desc_card_uslugi_section_three">
                                    {el.description}
                                </div>
                            </div>





                        }
                    />

                </div>

            ))}
        </div>
    );
};

export default CardBottom;