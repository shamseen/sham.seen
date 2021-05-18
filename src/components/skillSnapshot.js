import {
    AntDesignOutlined,
    CodeOutlined
} from '@ant-design/icons';
import { Avatar, Image, Space, Tabs } from "antd";
const { TabPane } = Tabs;


export default function SkillSnapshot() {


    return (
        <Space direction="vertical" id="skillSnapshot">
            <Avatar
                icon={<AntDesignOutlined />}
                size={64}
                alt="avatar image"
            />
            <Tabs centered defaultActiveKey="1" type="card" size='small'>
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