import {
    AntDesignOutlined,
    CodeOutlined
} from '@ant-design/icons';
import { Avatar, Image, Space, Tabs } from "antd";
const { TabPane } = Tabs;


export default function SkillSnapshot() {


    return (
        <Space direction="vertical" id="skillSnapshot" className="gray-bg">
            <Avatar
                icon={<AntDesignOutlined />}
                size={84}
                alt="avatar image"
            />
            <Tabs defaultActiveKey="1" type="card" size='large'>
                <TabPane tab={<CodeOutlined />} key="1" >
                    Coding stats
                </TabPane>
                <TabPane tab="🧬" key="2" >
                    Bio stats
                </TabPane>
            </Tabs>
        </Space>
    )
}