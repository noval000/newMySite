import React from 'react';
import {Fade} from "react-awesome-reveal";

const DevelopmentCard = (props) => {
    return (
        <div className="block_uslugi_main">
            <Fade duration={2000}>
                <div className="card_uslugi">
                    <div className="icon_card">

                    </div>
                    <div className="text_card_services">
                        <div className="name_card">
                            Website development
                        </div>
                        <div className="desc_card">
                            We create modern and responsive websites: We use the latest technologies and standards to make your website look flawless on all devices - from smartphones to tablets and computers.
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default DevelopmentCard;