import React from 'react';
import {Fade} from "react-awesome-reveal";

const WebDesignCard = (props) => {
    return (
        <div className="block_uslugi_main">
            <Fade duration={2000}>
                <div className="card_uslugi">
                    <div className="icon_card">

                    </div>
                    <div className="text_card_services">
                        <div className="name_card">
                            Web design
                        </div>
                        <div className="desc_card">
                            We create a unique design that reflects your brand: We develop a design that emphasizes your individuality, attracts users’ attention and is memorable.
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default WebDesignCard;