import React, {useState} from 'react';
import './header.css';
import { HashLink   } from 'react-router-hash-link';
import {Fade, Slide} from "react-awesome-reveal";
import {Link} from "react-router-dom";
import logo from '../../images/icon/logo.svg'
import arrow from '../../images/icon/arrow.svg'
import {Cursor} from "react-creative-cursor";
const Header = (props) => {


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


    const [changeCursorLink, setCursor] = useState(20)

    const changeHoverLink = () => {
        setCursor(80)
    }
    const changeHoverLinkOut = () => {
        setCursor(20)
    }




    return (
        <header className="header" data-cursor-exclusion>
            <Cursor
                cursorSize={changeCursorLink}
                animationDuration={.3}
                cursorBackgrounColor={'#fff'}
                isGelly={true}
                gellyAnimationAmount={10}
            />
            {
                headerFixed &&
                <>
                    <div className='header_fixed'>
                        <Slide direction={'down'} duration={500}>
                                <div className="container">
                                    <nav className="menu_header">
                                        <Link to={'/'}
                                              onMouseEnter={changeHoverLink}
                                              onMouseLeave={changeHoverLinkOut}
                                        >

                                            <span style={{marginRight:'12px'}}>
                                                <img src={logo} alt={logo}/>
                                            </span>
                                            IT Prodigy
                                        </Link>

                                        <ul className="list_menu_header">

                                            <li className={styleMainLink ? 'active_link item_menu' : 'item_menu'}>
                                                <HashLink
                                                    onMouseEnter={changeHoverLink}
                                                    onMouseLeave={changeHoverLinkOut}
                                                    id="main" smooth to="#top">Главная
                                                </HashLink>
                                            </li>
                                            <li className={styleServicesLink ? 'active_link item_menu' : 'item_menu'}>
                                                <HashLink
                                                    onMouseEnter={changeHoverLink}
                                                    onMouseLeave={changeHoverLinkOut}
                                                    smooth to="#services">Услуги
                                                </HashLink>
                                            </li>
                                            <li className="item_menu">
                                                <HashLink
                                                    onMouseEnter={changeHoverLink}
                                                    onMouseLeave={changeHoverLinkOut}
                                                    smooth to="#portfolio">О нас
                                                </HashLink>
                                            </li>
                                            <li className="item_menu">
                                                <HashLink
                                                    onMouseEnter={changeHoverLink}
                                                    onMouseLeave={changeHoverLinkOut}
                                                    smooth to="#contacts">Портфолио
                                                </HashLink>
                                            </li>
                                            <li className="item_menu">
                                                <HashLink
                                                    onMouseEnter={changeHoverLink}
                                                    onMouseLeave={changeHoverLinkOut}
                                                    smooth to="#contacts">Контакты
                                                </HashLink>
                                            </li>
                                            <li className="item_menu">
                                                <Link
                                                    onMouseEnter={changeHoverLink}
                                                    onMouseLeave={changeHoverLinkOut}
                                                    to={'/'}>
                                                    Let`s Talk
                                                    <span style={{marginLeft:'8px'}}>
                                                        <img src={arrow} alt={arrow}/>
                                                    </span>
                                                </Link>
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
                                        </ul>
                                    </nav>
                                </div>
                        </Slide>
                    </div>
                </>
            }
            <div className="container">
                <nav className="menu_header">
                    <Link
                        onMouseEnter={changeHoverLink}
                        onMouseLeave={changeHoverLinkOut}
                        to={'/'}>
                            <span style={{marginRight:'12px'}}>
                                <img src={logo} alt={logo}/>
                            </span>
                        IT Prodigy
                    </Link>
                    <ul className="list_menu_header">
                        <li className={styleMainLink ? 'active_link item_menu' : 'item_menu'}>
                            <HashLink
                                onMouseEnter={changeHoverLink}
                                onMouseLeave={changeHoverLinkOut}
                                smooth to="#main">Главная
                            </HashLink>
                        </li>
                        <li className={styleServicesLink ? 'active_link item_menu' : 'item_menu'}>
                            <HashLink
                                onMouseEnter={changeHoverLink}
                                onMouseLeave={changeHoverLinkOut}
                                smooth to="#services">Услуги
                            </HashLink>
                        </li>
                        <li className="item_menu">
                            <HashLink
                                onMouseEnter={changeHoverLink}
                                onMouseLeave={changeHoverLinkOut}
                                smooth to="#portfolio">О нас
                            </HashLink>
                        </li>
                        <li className="item_menu">
                            <HashLink
                                onMouseEnter={changeHoverLink}
                                onMouseLeave={changeHoverLinkOut}
                                smooth to="#contacts">Портфолио
                            </HashLink>
                        </li>
                        <li className="item_menu">
                            <HashLink
                                onMouseEnter={changeHoverLink}
                                onMouseLeave={changeHoverLinkOut}
                                smooth to="#contacts">Контакты
                            </HashLink>
                        </li>
                        <li className="item_menu">
                            <Link
                                onMouseEnter={changeHoverLink}
                                onMouseLeave={changeHoverLinkOut}
                                to={'/'}>
                                Let`s Talk
                                <span style={{marginLeft:'8px'}}>
                                    <img src={arrow} alt={arrow}/>
                                </span>
                            </Link>
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



                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;