import React, {useState} from 'react';
import './header.css';
import { HashLink   } from 'react-router-hash-link';
import {Fade, Slide} from "react-awesome-reveal";
const Header = () => {


    const [headerFixed, setHeaderFixed] = useState(false);
    const [styleMainLink, setStyleMainLink] = useState(false);  //   для смены стиля ссылки main в шапке при прокрутке
    const [styleServicesLink, setStyleServicesLink] = useState(false);  //   для смены стиля ссылки services в шапке при прокрутке




        window.addEventListener('scroll' , e => {
            const scrollPosition = window.scrollY;
            const services = document.querySelector('#services');
            const yPositionServices = services.offsetTop;
            if (scrollPosition > 77) {
                setHeaderFixed(true);
            } else {
                setHeaderFixed(false);
            }
            if (scrollPosition > yPositionServices - 70) {
                setStyleServicesLink(true);
                setStyleMainLink(false);  //  убираем активный класс у main сли долистали до services
            } else {
                setStyleMainLink(true);  //   добавляем активный класс у main сли долистали до services
                setStyleServicesLink(false);
            }
        })





    return (
        <header className="header" data-cursor-exclusion>
            {
                headerFixed &&
                <>
                    <div className='header_fixed'>
                        <Slide direction={'down'} duration={500}>
                                <div className="container">
                                    <nav className="menu_header">
                                        <ul className="list_menu_header">

                                            <li className={styleMainLink ? 'active_link item_menu' : 'item_menu'}>
                                                <HashLink id="main" smooth to="#top">Main</HashLink>
                                            </li>
                                            <li className={styleServicesLink ? 'active_link item_menu' : 'item_menu'}>
                                                <HashLink smooth to="#services">Services</HashLink>
                                            </li>
                                            <li className="item_menu">
                                                <HashLink smooth to="#portfolio">Our works</HashLink>
                                            </li>
                                            <li className="item_menu">
                                                <HashLink smooth to="#contacts">Contacts</HashLink>
                                            </li>

                                            {/*<li className="item_menu">*/}
                                            {/*    <Link to="/">Main</Link>*/}
                                            {/*</li>*/}
                                            {/*<li className="item_menu">*/}
                                            {/*    <Link to="/uslugi">Services</Link>*/}
                                            {/*</li>*/}
                                            {/*<li className="item_menu">*/}
                                            {/*    <Link to="/portfolio">Our works</Link>*/}
                                            {/*</li>*/}
                                            {/*<li className="item_menu">*/}
                                            {/*    <Link to="/contacts">Contacts</Link>*/}
                                            {/*</li>*/}

                                            <button className='btn_order'>Order</button>
                                        </ul>
                                    </nav>
                                </div>
                        </Slide>
                    </div>
                </>
            }
            <div className="container">
                <nav className="menu_header">
                    <ul className="list_menu_header">

                        <li className={styleMainLink ? 'active_link item_menu' : 'item_menu'}>
                            <HashLink smooth to="#main">Main</HashLink>
                        </li>
                        <li className={styleServicesLink ? 'active_link item_menu' : 'item_menu'}>
                            <HashLink smooth to="#services">Services</HashLink>;
                        </li>
                        <li className="item_menu">
                            <HashLink  smooth to="#portfolio">Our works</HashLink>
                        </li>
                        <li className="item_menu">
                            <HashLink  smooth to="#contacts">Contacts</HashLink>
                        </li>

                        {/*<li className="item_menu">*/}
                        {/*    <Link to="/">Main</Link>*/}
                        {/*</li>*/}
                        {/*<li className="item_menu">*/}
                        {/*    <Link to="/uslugi">Services</Link>*/}
                        {/*</li>*/}
                        {/*<li className="item_menu">*/}
                        {/*    <Link to="/portfolio">Our works</Link>*/}
                        {/*</li>*/}
                        {/*<li className="item_menu">*/}
                        {/*    <Link to="/contacts">Contacts</Link>*/}
                        {/*</li>*/}


                        <button className='btn_order'>Default Button</button>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;