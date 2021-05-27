import React, { useState } from 'react';
import { Modal} from 'antd';
import {SettingOutlined} from "@ant-design/icons";

const Modale = (props) => {
    return (
        <>
            <SettingOutlined onClick={showModal}/>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    );
};
export default Modale;