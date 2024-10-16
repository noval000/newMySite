import React, {useState} from 'react';
import {message, Modal} from "antd";
import {Cursor} from "react-creative-cursor";
import {LockOutlined, MailOutlined, UserOutlined} from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex, Space } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import './modalauth.css'
import axios from "axios";
import WelcomeModal from "../welcomeModal/welcomeModal";
const ModalAuth = (props) => {

    const [formChange, setFormChange] = useState(true)

    const handleOkAuth = () => {
        props.setIsModalOpenAuth(false);
    };

    const handleCancelAuth = () => {
        props.setIsModalOpenAuth(false);
    };


        const [form] = Form.useForm();
        const navigate = useNavigate();
        const [loading, setLoading] = useState(false);



        const onFinish = async (values) => {
            setLoading(true);
            try {
                // Отправка данных на сервер (используйте свой URL)
                const response = await axios.post('http://localhost:5000/api/auth/register', values);
                message.success('Регистрация успешна!');
                navigate('/login');
                localStorage.setItem('token', response.data.token); // Сохранение JWT токена
                props.setUsername(values.username);
                props.setWelcomeVisible(true);
                props.setCheckLogin(true);
                setTimeout(() => {
                    props.setWelcomeVisible(false);
                }, 3000)
            } catch (error) {
                message.error('Ошибка регистрации. Попробуйте еще раз.');
            } finally {
                setLoading(false);
                props.setIsModalOpenAuth(false)
            }
        }; // регистрация




    const onFinishAuth = async (values) => {
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', values);
            message.success('Вход успешен!');
            localStorage.setItem('token', response.data.token); // Сохранение JWT токена

            props.setUsername(values.username);
            props.setWelcomeVisible(true);
            props.setCheckLogin(true);
            console.log(response.data.username)
            setTimeout(() => {
                props.setWelcomeVisible(false);
                navigate('/dashboard'); // Перенаправление на защищенную страницу
            }, 3000)
        } catch (error) {
            message.error('Ошибка входа. Проверьте логин и пароль.');
        } finally {
            setLoading(false);
            props.setIsModalOpenAuth(false)
        }
    }; //  вход







    return (
        <Modal data-cursor-exclusion title={`${formChange === true ? 'Вход' : 'Регистрация'}`} open={props.isModalOpenAuth} onOk={handleOkAuth} onCancel={handleCancelAuth}>
            <Cursor
                cursorSize={20}
                animationDuration={.3}
                cursorBackgrounColor={'#000'}
                isGelly={true}
                gellyAnimationAmount={10}
            />
            {
                formChange &&
                <Form

                    onFinish={onFinishAuth}
                    form={form}
                    name="login"
                    initialValues={{
                        remember: true,
                    }}
                    style={{
                        maxWidth: 360,
                    }}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Введите логин!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Введите пароль!',
                            },
                        ]}
                    >
                        <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
                    </Form.Item>
                    <Form.Item>
                        <Flex justify="space-between" align="center">
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Запомнить меня</Checkbox>
                            </Form.Item>
                            <Link to={'/reset'}>Восстановить пароль</Link>
                        </Flex>
                    </Form.Item>

                    <Form.Item>
                        <Button
                            loading={loading}
                            style={{marginBottom:'20px'}}
                            block type="primary" htmlType="submit">
                            Войти
                        </Button>
                        <Link
                            style={{marginTop:'15px'}}
                        onClick={() => {
                            if (formChange === true) {
                                setFormChange(false)
                            }
                        }}
                        to={'/register'}>
                        Зарегистрироваться!
                    </Link>
                    </Form.Item>
                </Form>
            }
            {
                !formChange &&
                <Form
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    scrollToFirstError
                    initialValues={{
                        remember: true,
                    }}
                    style={{
                        maxWidth: 360,
                    }}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Введите логин!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Введите e-mail!',
                            },
                        ]}
                    >
                        <Input prefix={<MailOutlined />} placeholder="Email" />
                    </Form.Item>
                    <Form.Item

                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Введите пароль!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Подтверждение пароля"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста, подтвердите пароль!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Пароли не совпадают!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            style={{marginBottom:'20px'}}
                            block type="primary" htmlType="submit">
                            Регистрация
                        </Button>
                        <Link
                            onClick={() => {
                                setFormChange(true)
                            }}
                            to={'/login'}
                        >
                            Вернуться ко входу!
                        </Link>
                    </Form.Item>
                </Form>
            }

        </Modal>

    );
};

export default ModalAuth;