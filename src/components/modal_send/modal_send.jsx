import React from 'react';
import {Modal} from "antd";
import { Button, Form, Input, Space } from 'antd';
import {Cursor} from "react-creative-cursor";
const ModalSend = (props) => {




    const SubmitButton = ({ form, children }) => {
        const [submittable, setSubmittable] = React.useState(false);

        // Watch all values
        const values = Form.useWatch([], form);
        React.useEffect(() => {
            form
                .validateFields({
                    validateOnly: true,
                })
                .then(() => setSubmittable(true))
                .catch(() => setSubmittable(false));
        }, [form, values]);
        return (
            <Button type="primary" htmlType="submit" disabled={!submittable}>
                {children}
            </Button>
        );
    };


    const handleOk = () => {
        props.setIsModalOpen(false);
    };

    const handleCancel = () => {
        props.setIsModalOpen(false);
    };
    const [form] = Form.useForm();
    return (
        <Modal data-cursor-exclusion title="Basic Modal" open={props.isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Cursor
                cursorSize={20}
                animationDuration={.3}
                cursorBackgrounColor={'#000'}
                isGelly={true}
                gellyAnimationAmount={10}
            />
            <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
                <Form.Item
                    name="name"
                    label="Ваше имя"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name='message' label="Введите ваше сообщение">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item>
                    <Space>
                        <SubmitButton form={form}>Отправить</SubmitButton>
                        <Button htmlType="reset">Очистить</Button>
                    </Space>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default ModalSend;