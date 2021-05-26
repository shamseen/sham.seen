import WebDevSkills from "./skillSnapshots/webDev";
import BiomedSkills from "./skillSnapshots/biomed";
import { CodeOutlined } from '@ant-design/icons';
import { Avatar, Space, Tabs, Typography } from "antd";
const { TabPane } = Tabs;
const { Title } = Typography;
import "../styles/sidebar.scss";


export default function Sidebar() {

    const skillTabs = [
        {
            tab: <CodeOutlined />,
            title: 'Experience',
            content: <WebDevSkills />
        },
        {
            tab: '🧬',
            title: 'Experience',
            content: <BiomedSkills />
        }
    ]

    return (
        <Space direction="vertical" id="sidebar" className="gray-bg">
            <Avatar
                size={100}
                src="./moi.jpg"
                alt="avatar image"
            />
            <Title level={3}>Shamseen Rahman</Title>
            <div className="contact">

            </div>
            <Tabs defaultActiveKey="0" type="card" size='large' className="skillSnapshot">
                {
                    skillTabs.map((tab, i) => {
                        return (
                            <TabPane tab={tab.tab} key={i}>
                                <Title level={5}>{tab.title}</Title>
                                {tab.content}
                            </TabPane>
                        );
                    })
                }
            </Tabs>
        </Space>
    )
}