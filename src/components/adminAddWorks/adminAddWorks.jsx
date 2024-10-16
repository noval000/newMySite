import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';

const AdminAddWorks = () => {
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        setLoading(true);
        try {
            const response = await axios.put(`http://localhost:5000/api/auth/update/${values.userId}`, {
                projectName: values.projectName,
                stages: {
                    stage1: values.stage1.split(','),
                    stage2: values.stage2.split(','),
                    stage3: values.stage3.split(','),
                },
            });
            message.success('Данные пользователя успешно обновлены!');
        } catch (error) {
            message.error('Ошибка обновления данных пользователя.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Form
            name="updateUser"
            onFinish={onFinish}
            style={{ maxWidth: 600, margin: '0 auto' }}
        >
            <Form.Item
                name="userId"
                label="ID пользователя"
                rules={[{ required: true, message: 'Пожалуйста, введите ID пользователя!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="projectName"
                label="Название проекта"
                rules={[{ required: true, message: 'Пожалуйста, введите название проекта!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="stage1"
                label="Этап 1 (через запятую)"
                rules={[{ required: true, message: 'Пожалуйста, введите этап 1!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="stage2"
                label="Этап 2 (через запятую)"
                rules={[{ required: true, message: 'Пожалуйста, введите этап 2!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="stage3"
                label="Этап 3 (через запятую)"
                rules={[{ required: true, message: 'Пожалуйста, введите этап 3!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>
                    Обновить данные пользователя
                </Button>
            </Form.Item>
        </Form>
    );
};

export default AdminAddWorks;
