import WebDevSkills from "../skillSnapshots/webDev";
import BiomedSkills from "../skillSnapshots/biomed";
import { Avatar, Badge, Button, Space, Tabs, Typography } from "antd";
import {
    CheckOutlined, CodeOutlined, CommentOutlined,
    GithubFilled, LinkedinOutlined, MailOutlined
} from '@ant-design/icons';

const { Title } = Typography;
import "../../styles/sidebarContent.scss";


export default function SidebarContent() {
    /* --- Content --- */
    const contactLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/shamseen',
            icon: <GithubFilled />
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/shamseenr/',
            icon: <LinkedinOutlined />
        },
        {
            name: 'Bioinformatics StackExchange',
            url: 'https://bioinformatics.stackexchange.com/users/12216/shamseen',
            icon: <CommentOutlined />
        }
        // TODO: contact me btn
    ]

    const skillTabs = [
        {
            name: <CodeOutlined />,
            content: <WebDevSkills skillIcon={<CheckOutlined />} />
        },
        {
            name: '🧬',
            content: <BiomedSkills skillIcon={<CheckOutlined />} />
        }
    ]

    return (
        <Space direction="vertical" id="sidebar" className="gray-bg" size="small">
            {/* -- Contact Info -- */}
            <div id="contact">
                <Badge count={"CSM®"} title="Certified ScrumMaster®" offset={[-5, 90]}>
                    <Avatar
                        size={100}
                        src="./moi.jpg"
                        alt="avatar image"
                    />
                </Badge>

                <Title level={3} style={{ flexBasis: '100%', marginTop: '0.5em' }}>Shamseen Rahman</Title>

                <Button.Group>
                    {contactLinks.map(link => {
                        return <Button size="large" type="link"
                            href={link.url} target="_blank"
                            key={link.name}
                            icon={link.icon} />;
                    })}

                    {/* <Tooltip title="Contact me!">
                        <Button disabled type="ghost" icon={<MailOutlined />} onClick={() => setModal(true)} />
                    </Tooltip> */}
                    {/* TO DO: pictures w credits */}
                </Button.Group>

                {/* -- Contact Me modal (nonfunctional) -- */}
                {/* <ContactForm showModal={showModal} setModal={setModal} /> */}

            </div>

            {/* -- Skill snapshots -- */}
            <Tabs defaultActiveKey="0" type="card" size='large' className="skillSnapshot">
                {skillTabs.map((tab, i) => {
                    return (
                        <Tabs.TabPane tab={tab.name} key={i}>
                            {tab.content}
                        </Tabs.TabPane>
                    );
                })}
            </Tabs>
        </Space >
    )
}