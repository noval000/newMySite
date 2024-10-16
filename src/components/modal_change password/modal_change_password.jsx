import React from 'react';
import {Form, message, Modal, Input, Button} from "antd";

const ModalChangePassword = (props) => {

    const handlePasswordChange = async (values) => {
        console.log('Password change values:', values);


        props.setIsPasswordModalVisible(false);
    };

    return (
        <Modal
            visible={props.isPasswordModalVisible}
            title="Смена пароля"
            onCancel={() => props.setIsPasswordModalVisible(false)}
            footer={null}
        >
            <Form
                name="password_change"
                onFinish={handlePasswordChange}
            >
                <Form.Item
                    name="oldPassword"
                    label="Старый пароль"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите старый пароль!',
                        },
                    ]}
                >
                    <Input.Password />

                </Form.Item>
                <Form.Item
                    name="newPassword"
                    label="Новый пароль"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите новый пароль!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Сменить пароль
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default ModalChangePassword;