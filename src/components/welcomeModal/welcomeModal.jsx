import React from 'react';
import { Modal } from 'antd';

const WelcomeModal = ({ visible, onClose, username }) => {
    return (
        <Modal
            visible={visible}
            footer={null}
            onCancel={onClose}
            centered
            style={{ backdropFilter: 'blur(5px)', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
            <div style={{ textAlign: 'center' }}>
                <h1>Добро пожаловать, {username}!</h1>
            </div>
        </Modal>
    );
};

export default WelcomeModal;