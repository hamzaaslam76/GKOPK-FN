import React from "react";
import { Form, Input, InputNumber, Button } from "antd";
import "./contactUs.css";
import axios from "axios";
import config from "../../config";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const ContactUs = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    axios
      .post(`${config.url}user/create`, values)
      .then((res) => {
        form.resetFields();
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(values);
  };
  return (
    <>
      <div className="contact">
        <Form {...layout} name="nest-messages" onFinish={onFinish} form={form}>
          <Form.Item
            name={"firstName"}
            label="First Name"
            rules={[
              {
                message: "Please enter the first name",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"lastName"}
            label="Last Name"
            rules={[
              {
                message: "Please enter the last name",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"email"}
            label="Email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please enter the correct email",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name={"phone"} label="Phone Number">
            <Input />
          </Form.Item>

          <Form.Item name={"message"} label="Message">
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
export default ContactUs;
