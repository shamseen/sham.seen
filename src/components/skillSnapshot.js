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
                size={84}
                src="https://media-exp1.licdn.com/dms/image/C5603AQHXHDYV0Gf0GA/profile-displayphoto-shrink_800_800/0/1517282074745?e=1626912000&v=beta&t=Wcxkq5fCKJwfhkfranPupyea_zdGf1OU7qaxYkg8s9A"
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