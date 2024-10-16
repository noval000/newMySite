import React from 'react';

const CompListWebDesign = (props) => {
    console.log(props.list_web_design)
    return (
        <div className='list_web'>
            <div className="name_list_web">
                <p>ИНСТРУМЕНТЫ ВЕБ-ДИЗАЙНА</p>
            </div>
            {props.list_web_design.map(el => (
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

export default CompListWebDesign;