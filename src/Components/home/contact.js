import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

function AppContact() {
  return (
    <div id="contact" className="block contactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h1> CONTACT US</h1>
          <p>
            {" "}
            a large or small list is desired, set the size property to either
            large or small respectively. Omit the size property for a list with
            the defaul
          </p>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="fullname"
            rules={[
              { required: true, message: "Please input your full name!" },
            ]}
          >
            <Input placeholder="Full Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input type="email" placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="phone"
            rules={[
              { required: true, message: "Please input your Phone Number!" },
            ]}
          >
            <Input type="number" placeholder="Mobile Number" />
          </Form.Item>
          <Form.Item name="subject">
            <Input placeholder="Subject" />
          </Form.Item>
          <Form.Item
            name="message"
            rules={[{ required: true, message: "Please input your Message" }]}
          >
            <TextArea rows={4} cols={82} placeholder="Message"></TextArea>
          </Form.Item>
          <Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              noStyle
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject("should accept agreement"),
                },
              ]}
            >
              <Checkbox>I Agree With Terms & Conditions</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              submit
            </Button>
          </Form.Item>
        </Form>
        <div className=""></div>
      </div>
    </div>
  );
}
export default AppContact;
