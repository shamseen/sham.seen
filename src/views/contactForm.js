import { Form, Input, message, Modal, Select } from 'antd';
import { useState } from 'react';
import "../styles/contactForm.scss";
const { Item } = Form;
const { Option } = Select;

/* --- Followed antd tutorials --- */
// https://ant.design/components/form/#components-form-demo-form-in-modal
// https://ant.design/components/modal/#components-modal-demo-async

export default function ContactForm({ showModal, setModal }) {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm(); // antd docs say to use this i guess

  const handleSend = (e) => {


    form.validateFields()

      .then((values) => {
        setConfirmLoading(true); // shows a loading icon on send

        // Mimicking async
        setTimeout(() => {
          setModal(false);
          setConfirmLoading(false);

          // Mimicking submit
          message.success('Info sent! You should get a confirmation email soon :)')
          form.resetFields();
          console.log(values);
          // TO DO: async push contact info to..?
        }, 2000);
      })

      .catch((info) => {
        message.error("Something went wrong, try again :(")
        console.log('Validate Failed:', info);
      });
  }


  return (
    <Modal
      title="Cool, I'll follow up with you!"
      visible={showModal}
      confirmLoading={confirmLoading}
      okText="Send"
      onCancel={() => setModal(false)}
      onOk={handleSend}
    >

      <Form form={form} requiredMark={false} layout="vertical">

        {/* -- Contact info -- */}
        <Item name="name" rules={[{ required: true, message: 'Enter your name' }]}>
          <Input placeholder="Name" />
        </Item>

        <Item name="email" rules={[{ required: true, message: 'Add your email!' }]}>
          <Input addonBefore="@" placeholder="Email" />
        </Item>

        {/* -- Details -- */}
        <Item label="Subject" name="subject" rules={[{ required: true, message: 'Select a subject' }]}>
          <Select placeholder="What's up?" allowClear>
            <Option value="freelance">Contract Work</Option>
            <Option value="network">Networking</Option>
            <Option value="project">Use a Project</Option>
            <Option value="job">Open Position</Option>
            <Option value="other">--Something Else--</Option>
          </Select>
        </Item>

        <Item label="Message" name="message"
          rules={[{ required: true, message: 'A brief description, please' }]}>
          <Input.TextArea placeholder="A small blurb on what we're talking about" />
        </Item>

        {/* -- Optional: Reach metrics --  */}
        <Item label="How did you hear about me?" name="reach">
          <Select placeholder="(Optional)" allowClear>
            <Option value="referral">Client / Colleague</Option>
            <Option value="github">GitHub</Option>
            <Option value="network">Networking event</Option>
            <Option value="project">Project / Demo</Option>
            <Option value="social">Social</Option>
            <Option value="funny">We've known each other for years!</Option>
            <Option value="other">--Elsewhere--</Option>
          </Select>
        </Item>
      </Form>
    </Modal>
  )
}