import React, {useEffect, useState} from 'react';
import './header.css';
import { HashLink   } from 'react-router-hash-link';
import {Fade, Slide} from "react-awesome-reveal";
import {Link, useNavigate} from "react-router-dom";
import logo from '../../images/icon/logo.svg'
import arrow from '../../images/icon/arrow.svg'
import {Cursor} from "react-creative-cursor";
import ModalSend from "../modal_send/modal_send";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {Button, Checkbox, Form, Input, Flex, Menu} from 'antd';
import ModalAuth from "../modal_auth/modal_auth";
import WelcomeModal from '../welcomeModal/welcomeModal';
import axios from "axios";
import ModalProfile from "../modal_profile/modal_profile";



const Header = (props) => {

    const [menu, setMenu] = useState(false); // при наведении на ник показываем меню

    const [linkMenu1, setLinkMenu1] = useState(false); //  hover для профиля
    const [linkMenu2, setLinkMenu2] = useState(false); //  hover для адмн панели
    const [linkMenu3, setLinkMenu3] = useState(false); //  hover для выхода

    const [welcomeVisible, setWelcomeVisible] = useState(false);  //   показ приветственного блока
    const [username, setUsername] = useState('');   //  записываем имя
    const [backupMail, setBackupMail] = useState('') //  почта
    const [phoneUser, setPhone] = useState('') // телефон
    const [nameOrganisation, setNameOrganisation] = useState('') // название организации
    const [isAdmin, setIsAdmin] = useState(0);  // проверяем админ это или нет


    const hoverLinkMenu1Enter = (e) => {
        setLinkMenu1(true)
    }
    const hoverLinkMenu1Leave = () => {
        setLinkMenu1(false)
    }

    const hoverLinkMenu2Enter = (e) => {
        setLinkMenu2(true)
    }
    const hoverLinkMenu2Leave = () => {
        setLinkMenu2(false)
    }

    const hoverLinkMenu3Enter = (e) => {
        setLinkMenu3(true)
    }
    const hoverLinkMenu3Leave = () => {
        setLinkMenu3(false)
    }


    const [isModalOpenAuth, setIsModalOpenAuth] = useState(false);

    const [checkLogin, setCheckLogin] = useState(false)  //  проверка выполнен вход или нет

    const showModalAuth = () => {
        setIsModalOpenAuth(true);
    };


    const [isModalProfileOpen, setIsModalProfileOpen] = useState(false); //  для модалки профиля

    const showModalProfile = () => {
        setIsModalProfileOpen(true);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };



    const [headerFixed, setHeaderFixed] = useState(false);
    const [styleMainLink, setStyleMainLink] = useState(false);  //   для смены стиля ссылки main в шапке при прокрутке
    const [styleServicesLink, setStyleServicesLink] = useState(false);  //   для смены стиля ссылки services в шапке при прокрутке
    const [styleAboutLink, setStyleAboutLink] = useState(false);  //   для смены стиля ссылки о нас в шапке при прокрутке




        window.addEventListener('scroll' , e => {
            const scrollPosition = window.scrollY;
            const services = document.querySelector('#services');
            const about = document.querySelector('#about');
            const yPositionServices = services.offsetTop;
            const yPositionAbout = about.offsetTop;
            if (scrollPosition > 77) {
                setHeaderFixed(true);
            } else {
                setHeaderFixed(false);
            }
            if (scrollPosition > yPositionServices - 70) {
                setStyleServicesLink(true);
                setStyleMainLink(false);  //  убираем активный класс у main сли долистали до services
                setStyleAboutLink(false);
                if (scrollPosition > yPositionAbout - 70) {
                    setStyleServicesLink(false);
                    setStyleMainLink(false);  //  убираем активный класс у main сли долистали до services
                    setStyleAboutLink(true);
                }
            }
            else {
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

    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                console.log('Токен отсутствует, пропуск запроса на получение данных пользователя');
                return;
            }

            try {
                const response = await axios.get('http://localhost:5000/api/auth/me', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                });
                setIsAdmin(response.data.isAdmin);
                setUsername(response.data.username);
                setBackupMail(response.data.backupEmail);
                setPhone(response.data.phone);
                setNameOrganisation(response.data.nameOrganisation);
                setMenu(false);
                console.log(response.data)
            } catch (error) {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    console.warn('Неправильный или истекший токен. Очистка `localStorage`.');
                    localStorage.removeItem('token');
                }
                console.error('Ошибка получения данных пользователя', error);
            }
        };

        if (checkLogin) {
            fetchUserData();
        }
    }, [checkLogin, username, phoneUser, nameOrganisation]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setCheckLogin(true);
        }
    }, []);


    const handleLogout = () => {
        // Удаление токена из локального хранилища
        localStorage.removeItem('token');
        // Перенаправление на страницу входа
        navigate('/login');
        setCheckLogin(false)
    };   //   выход из аккаунта



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
                                            <li className={styleAboutLink ? 'active_link item_menu' : 'item_menu'}>
                                                <HashLink
                                                    onMouseEnter={changeHoverLink}
                                                    onMouseLeave={changeHoverLinkOut}
                                                    smooth to="#about">О нас
                                                </HashLink>
                                            </li>
                                            <li className="item_menu">
                                                <HashLink
                                                    onMouseEnter={changeHoverLink}
                                                    onMouseLeave={changeHoverLinkOut}
                                                    smooth to="#steps">Этапы работы
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
                                                    onClick={showModal}
                                                    onMouseEnter={changeHoverLink}
                                                    onMouseLeave={changeHoverLinkOut}
                                                    to={'/'}>
                                                    Let`s Talk
                                                    <span style={{marginLeft:'8px'}}>
                                                        <img src={arrow} alt={arrow}/>
                                                    </span>
                                                </Link>
                                            </li>
                                            <li className="item_menu">
                                                {
                                                    !checkLogin &&
                                                    <Link
                                                        onClick={showModalAuth}
                                                        to={'/auth'}>
                                                    <span>
                                                        <UserOutlined />
                                                    </span>
                                                    </Link>
                                                }
                                                {
                                                    checkLogin &&
                                                    <div>
                                                        <div
                                                            onMouseEnter={() => {
                                                                setMenu(true)
                                                            }}
                                                            style={{color:'#fff'}}>
                                                            {username}
                                                        </div>
                                                        <Menu
                                                            onMouseLeave={() => {
                                                                setMenu(false)
                                                            }}
                                                            style={{    position: 'absolute',
                                                                right: 0,
                                                                zIndex: 9,
                                                                marginTop: '20px',
                                                                background: '#fff',
                                                                borderRadius:'10px',
                                                                display: `${menu === true ? 'block' : 'none'}`,
                                                                cursor:'none'
                                                                }}
                                                        >
                                                            {isAdmin && (
                                                                <Menu.Item
                                                                    onMouseEnter={hoverLinkMenu2Enter}
                                                                    key="admin" style={{background:'#292929', color:'#fff', cursor:'none'}}>
                                                                    <Link
                                                                        to={'/admin/update-user'}>Административная панель</Link>
                                                                </Menu.Item>
                                                            )}
                                                            <Menu.Item key="profile"  style={{cursor:'none', display:'flex',justifyContent:'center', background:'#292929', color:'#fff'}}>
                                                                <Link

                                                                    to={'/profile'}>
                                                                    Профиль
                                                                </Link>
                                                            </Menu.Item>
                                                            <Menu.Item
                                                                style={{background:'#292929', color:'#fff', cursor:'none'}}
                                                                key="logout"
                                                                onClick={handleLogout}>
                                                                Выйти
                                                            </Menu.Item>

                                                        </Menu>
                                                    </div>
                                                }
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
                                smooth to="#about">О нас
                            </HashLink>
                        </li>
                        <li className="item_menu">
                            <HashLink
                                onMouseEnter={changeHoverLink}
                                onMouseLeave={changeHoverLinkOut}
                                smooth to="#steps">Этапы работы
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
                                onClick={showModal}
                                onMouseEnter={changeHoverLink}
                                onMouseLeave={changeHoverLinkOut}
                                to={'/'}>
                                Let`s Talk
                                <span style={{marginLeft:'8px'}}>
                                    <img src={arrow} alt={arrow}/>
                                </span>
                            </Link>
                        </li>
                        <li className="item_menu">
                            {
                                !checkLogin &&
                                <Link
                                    onClick={showModalAuth}
                                    to={'/auth'}>
                                <span>
                                    <UserOutlined />
                                </span>
                                </Link>
                            }
                            {
                                checkLogin &&
                                <div>
                                    <div
                                        onMouseEnter={() => {
                                            setMenu(true)
                                        }}
                                        style={{color:'#fff'}}>
                                        {username}
                                    </div>
                                    <Menu
                                        onMouseLeave={() => {
                                            setMenu(false)
                                        }}
                                        style={{    position: 'absolute',
                                            right: 0,
                                            zIndex: 9,
                                            marginTop: '20px',
                                            background: '#fff',
                                            borderRadius:'10px',
                                            display: `${menu === true ? 'block' : 'none'}`
                                        }}
                                        
                                    >
                                        {isAdmin && (
                                            <Menu.Item
                                                onMouseEnter={hoverLinkMenu2Enter}
                                                onMouseLeave={hoverLinkMenu2Leave}
                                                key="admin" style=
                                                    {{cursor:'none',
                                                        background:`${linkMenu2 === true ? 'transparent' : '#292929'}`,
                                                        color:`${linkMenu2 === true ? '#292929' : '#fff'}`
                                            }}
                                            >
                                                <Link
                                                    to={'/admin/update-user'}>Административная панель</Link>
                                            </Menu.Item>
                                        )}
                                        <Menu.Item
                                            onMouseEnter={hoverLinkMenu1Enter}
                                            onMouseLeave={hoverLinkMenu1Leave}
                                            key="profile" style={{cursor:'none', display:'flex',justifyContent:'center',
                                            background:`${linkMenu1 === true ? 'transparent' : '#292929'}`,
                                            color:`${linkMenu1 === true ? '#292929' : '#fff'}`
                                        }}>
                                            <Link
                                                onClick={() => {
                                                    setIsModalProfileOpen(true);
                                                }}
                                                to={'/profile'}>Профиль</Link>
                                        </Menu.Item>
                                        <Menu.Item
                                            onMouseEnter={hoverLinkMenu3Enter}
                                            onMouseLeave={hoverLinkMenu3Leave}
                                            style={{
                                                background:`${linkMenu3 === true ? 'transparent' : '#292929'}`,
                                                color:`${linkMenu3 === true ? '#292929' : '#fff'}`
                                                ,cursor:'none'
                                            }}
                                            key="logout"
                                            onClick={handleLogout}>
                                                Выйти
                                        </Menu.Item>

                                    </Menu>
                                </div>
                            }
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
            <ModalProfile
                isModalProfileOpen={isModalProfileOpen}
                setIsModalProfileOpen={setIsModalProfileOpen}
                backupMail={backupMail}
                phoneUser={phoneUser}
                username={username}
                nameOrganisation={nameOrganisation}
            />
            <ModalSend isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            <ModalAuth setUsername={setUsername}
                       setWelcomeVisible={setWelcomeVisible}
                       isModalOpenAuth={isModalOpenAuth}
                       setIsModalOpenAuth={setIsModalOpenAuth}
                       setCheckLogin={setCheckLogin}/>
            <WelcomeModal visible={welcomeVisible} onClose={() => setWelcomeVisible(false)} username={username} />
        </header>
    );
};

export default Header;