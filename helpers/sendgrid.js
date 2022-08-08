const onComplete = (fields) => {
    const message = {
        to: 'wigayam256@forfity.com',
        from: fields.email,
        subject: fields.subject,
        html: `
  <p><strong>Name:</strong> ${fields.name}</p>
  <p>${fields.message}</p>`,
    };

    sgMail
        .send(message)
        .then(() => {
            form.resetFields();
            console.log('Email Sent!');
            notification.open({
                message: 'Message successfu!',
                description: 'We have successfully received your email.',
            });
        })
        .catch((error) => {
            console.error('Error: ', error);
        });
};

return (
    <Row gutter={24} style={{ padding: '30px' }}>
        <Col xl={12}>
            <Form layout='vertical' form={form} onFinish={onComplete}>
                <Form.Item
                    name='name'
                    label='Name'
                    rules={[
                        {
                            required: true,
                        },
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    name='email'
                    label='Email'
                    rules={[
                        {
                            required: true,
                        },
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    name='subject'
                    label='Subject'
                    rules={[
                        {
                            required: true,
                        },
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    name='message'
                    label='Message'
                    rules={[
                        {
                            required: true,
                        },
                    ]}>
                    <TextArea />
                </Form.Item>
                <Form.Item>
                    <Space>
                        <Button type='primary' htmlType='submit'>
                            Submit
                        </Button>
                        <Button
                            type='secondary'
                            htmlType='submit'
                            onClick={(e) => form.resetFields()}>
                            Clear
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </Col>
    </Row>
);