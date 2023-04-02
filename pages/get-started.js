import { Typography, Input, Button, Form } from 'antd';
import styles from '../styles/Home.module.css';
const { Title } = Typography;
import { SearchOutlined } from '@ant-design/icons';

const handleSubmit = async (value) => {
    const { query } = value;
    const newVar = query.split(' ').join('-');

    window.location.href = `/${newVar}`;
}


const GetStarted = () => {
    return (
        <div className={styles.container}>
            <Form
                name="basic"
                style={{ display: 'flex', flexDirection: 'column', width: 300 }}
                initialValues={{ remember: true }}
                onFinish={handleSubmit}
            >
                <Title level={1}> I&apos;m looking for </Title>
                <section>
                    <Form.Item rules={[{ required: true, message: 'Please input your query!' }]} name="query">
                        <Input size="large" placeholder="eg: Musician portfolio website" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{ marginTop:5 }} shape="circle" icon={<SearchOutlined />}/>
                    </Form.Item>
                </section>
            </Form>
        </div>
    )
}

export default GetStarted;
