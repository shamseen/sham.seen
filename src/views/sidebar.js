import WebDevSkills from "./skillSnapshots/webDev";
import BiomedSkills from "./skillSnapshots/biomed";
import { CodeOutlined, GithubFilled, LinkedinFilled } from '@ant-design/icons';
import { Avatar, Badge, Button, Space, Tabs, Typography } from "antd";
const { TabPane } = Tabs;
const { Link, Title } = Typography;
import "../styles/sidebar.scss";


export default function Sidebar() {
    /* --- Content --- */
    const contactLinks = [
        {
            name: 'github',
            url: 'https://github.com/shamseen',
            icon: <GithubFilled />
        },
        {
            name: 'linkedin',
            url: 'https://www.linkedin.com/in/shamseenr/',
            icon: <LinkedinFilled />
        }
        // TODO: contact me btn
    ]

    const skillTabs = [
        {
            name: <CodeOutlined />,
            title: 'Experience',
            content: <WebDevSkills />
        },
        {
            name: '🧬',
            title: 'Experience',
            content: <BiomedSkills />
        }
    ]

    return (
        <Space direction="vertical" id="sidebar" className="gray-bg">

            {/* Contact Info */}
            <Badge count={"CSM®"} title="Certified ScrumMaster®" offset={[-5, 90]}>
                <Avatar
                    size={100}
                    src="./moi.jpg"
                    alt="avatar image"
                />
            </Badge>
            <div id="contact">
                <Title level={3} style={{ flexBasis: '100%' }}>Shamseen Rahman</Title>

                <Button.Group>
                    {contactLinks.map(link => {
                        return <Button size="large" type="link"
                            href={link.url} target="_blank"
                            key={link.name}
                            icon={link.icon} />;
                    })}
                </Button.Group>
            </div>

            {/* Skill snapshot */}
            <Tabs defaultActiveKey="0" type="card" size='large' className="skillSnapshot">
                {skillTabs.map((tab, i) => {
                    return (
                        <TabPane tab={tab.name} key={i}>
                            <Title level={5}>{tab.title}</Title>
                            {tab.content}
                        </TabPane>
                    );
                })}
            </Tabs>
        </Space >
    )
}