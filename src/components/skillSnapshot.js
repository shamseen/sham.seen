import {
    CodeOutlined
} from '@ant-design/icons';
import { Avatar, Progress, Space, Tabs, Typography } from "antd";
const { TabPane } = Tabs;
const { Title } = Typography;
import "../styles/main.scss";


export default function SkillSnapshot() {


    return (
        <Space direction="vertical" id="skillSnapshot" className="gray-bg">
            <Avatar
                size={100}
                src="./moi.jpg"
                alt="avatar image"
            />
            <Title level={3}>Shamseen Rahman</Title>
            <Tabs defaultActiveKey="1" type="card" size='large'>
                <TabPane tab={<CodeOutlined />} key="1">
                    [Sample coding stats]
                    <Progress percent={30} />
                    <Progress percent={50} status="active" />
                    <Progress percent={70} status="exception" />
                    <Progress percent={100} />
                    <Progress percent={50} showInfo={false} />
                </TabPane>
                <TabPane tab="🧬" key="2" >
                    Biomed stats
                </TabPane>
            </Tabs>
        </Space>
    )
}