import {
    AntDesignOutlined,
    CodeOutlined
} from '@ant-design/icons';
import { Avatar, Image, Space, Tabs } from "antd";
const { TabPane } = Tabs;
import "../styles/main.scss";


export default function SkillSnapshot() {


    return (
        <Space direction="vertical" id="skillSnapshot" className="gray-bg">
            <Avatar
                // icon={<AntDesignOutlined />}
                size={84}
                src="https://media-exp1.licdn.com/dms/image/C5603AQHXHDYV0Gf0GA/profile-displayphoto-shrink_800_800/0/1517282074745?e=1626912000&v=beta&t=Wcxkq5fCKJwfhkfranPupyea_zdGf1OU7qaxYkg8s9A"
                alt="avatar image"
            />
            <Tabs defaultActiveKey="1" type="card" size='large'>
                <TabPane tab={<CodeOutlined />} key="1">
                    <img src="./stats.png" alt="coding stats" />
                </TabPane>
                <TabPane tab="🧬" key="2" >
                    Biomed stats
                </TabPane>
            </Tabs>
        </Space>
    )
}