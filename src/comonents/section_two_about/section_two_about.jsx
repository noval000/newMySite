import React from 'react';
import './section_two_about.css';



const SectionTwoAbout = () => {
    return (
        <div className="section_two_about">
            <div className="wrapper_about">
                <div className="title_section_about">
                    Мы — веб-продакшен полного цикла для производственных и торговых компаний.
                    Наши услуги включают аналитику, проектирование интерфейсов, разработку дизайна, программирование,
                    интеграции, поддержку и развитие цифровых продуктов.
                </div>
                <div className="advantages_about">
                    <div className="card">
                        <div className="card_header">22 года</div>
                        <div className="card-body">Продуктивной работы</div>
                    </div>
                    <div className="card">
                        <div className="card_header">22 года</div>
                        <div className="card-body">Продуктивный работы</div>
                    </div>
                    <div className="card">
                        <div className="card_header">22 года</div>
                        <div className="card-body">Продуктивный работы</div>
                    </div>
                    <div className="card">
                        <div className="card_header">22 года</div>
                        <div className="card-body">Продуктивный работы</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionTwoAbout;