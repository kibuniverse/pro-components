import * as React from 'react';
import { message } from 'antd';
import ProForm, { ProFormText } from '@ant-design/pro-form';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const passwordRule = { pattern: /^(\w){6,20}$/, message: '密码格式为6-20个字母、数字、下划线组合' };

export default () => {
  return (
    <ProForm
      twiceConfirm
      twiceConfirmText="确认修改吗?"
      onFinish={async (v) => {
        console.info(v);
        /** 模拟网络请求操作 */
        await waitTime(1500);
        message.success('修改成功');
      }}
    >
      <ProFormText.Password
        width="md"
        name="password"
        label="旧密码"
        rules={[{ required: true, message: '请输入旧密码' }, passwordRule]}
      />
      <ProFormText.Password
        width="md"
        name="newPassword"
        label="新密码"
        rules={[{ required: true, message: '请输入新密码' }, passwordRule]}
      />
    </ProForm>
  );
};
