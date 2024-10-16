import React from 'react';
import './list_web.css';

const ListWebTechnology = (props) => {
    console.log(props.weblist)
    return (
        <div className='list_web'>
            <div className="name_list_web">
                <p>WEB, MOBILE ТЕХНОЛОГИИ</p>
            </div>
            {props.weblist.map(el => (
                <div key={el.id} className="block_one_list__technology">
                    <img src={el.image} alt={el.image}/>
                    <div className="desc_image">
                        {el.name}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListWebTechnology;