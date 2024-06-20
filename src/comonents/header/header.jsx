import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header>
            <div className="header">
                <div className="wrapper">
                    <div className="block_header">
                        <div className="logo_header">be</div>
                        <ul className="header_link">
                            <li className="header_link_item">
                                Портфолио
                            </li>
                            <li className="header_link_item">
                                Услуги
                            </li>
                            <li className="header_link_item">
                                Блог
                            </li>
                            <li className="header_link_item">
                                Компания
                            </li>
                            <li className="header_link_item">
                                Контакты
                            </li>
                            <button className="add_client">
                                Стать клиентом
                            </button>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;