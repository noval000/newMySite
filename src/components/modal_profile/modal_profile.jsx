import React, {useState} from 'react';
import {Cursor} from "react-creative-cursor";
import {Button, Checkbox, Flex, Form, Input, message, Modal} from "antd";
import ModalChangePassword from "../modal_change password/modal_change_password";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const ModalProfile = (props) => {

    const [form] = Form.useForm();

    const handleOkAuth = () => {
        props.setIsModalProfileOpen(true);
    };

    const handleCancelAuth = () => {
        props.setIsModalProfileOpen(false);
    };

    const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false);





    const onFinish = async (values) => {

        try {
            await axios.post('http://localhost:5000/api/auth/update', values, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            message.success('Информация успешно обновлена!');
        } catch (error) {
            if (error.response && error.response.status === 400) {
                const errorMessage = error.response.data.errors.map(err => err.msg).join(', ');
                message.error(`Ошибка валидации: ${errorMessage}`);
            } else {
                message.error('Ошибка при обновлении информации.');
            }
            console.error('Ошибка:', error);
        }
        handleCancelAuth();
    };

    const handlePasswordChange = async (values) => {
        console.log('Password change values:', values);
        // Здесь можно отправить запрос на сервер для смены пароля
        message.success('Пароль успешно изменен!');
        setIsPasswordModalVisible(false);
    };


    return (
        <>
            <Modal
                open={props.isModalProfileOpen}
                onOk={handleOkAuth}
                data-cursor-exclusion
                title="Профиль"
                onCancel={handleCancelAuth}
                footer={null}
            >
                <Cursor
                    cursorSize={20}
                    animationDuration={.3}
                    cursorBackgrounColor={'#000'}
                    isGelly={true}
                    gellyAnimationAmount={10}
                />
                <Form
                    form={form}
                    name="user_info"
                    onFinish={onFinish}
                    initialValues={{
                        remember: true,
                    }}
                >
                    <Form.Item
                        name="phone"
                        label="Номер телефона"
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста, введите номер телефона!',
                            },
                        ]}
                    >
                        <Input placeholder={props.phoneUser}/>
                    </Form.Item>
                    <Form.Item
                        name="backupEmail"
                        label="Резервный email"
                        rules={[
                            {
                                whitespace: true,
                            },
                            {
                                validator: (_, value) =>
                                    !value || /\S+@\S+\.\S+/.test(value)
                                        ? Promise.resolve()
                                        : Promise.reject('Некорректный адрес электронной почты!'),
                            },
                        ]}
                    >
                        <Input placeholder={props.backupMail}/>
                    </Form.Item>
                    <Form.Item
                        name="nameOrganisation"
                        label="Название компании"
                    >
                        <Input placeholder={props.nameOrganisation}/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Сохранить
                        </Button>
                        <Button
                            type="link"
                            onClick={() => {
                                setIsPasswordModalVisible(true);
                                props.setIsModalProfileOpen(false);
                            }}
                        >
                            Сменить пароль
                        </Button>
                    </Form.Item>
                </Form>

            </Modal>
            <ModalChangePassword isPasswordModalVisible={isPasswordModalVisible} setIsPasswordModalVisible={setIsPasswordModalVisible}/>

        </>





    );
};

export default ModalProfile;