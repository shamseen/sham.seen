import WebDevSkills from "../skillSnapshots/webDev";
import BiomedSkills from "../skillSnapshots/biomed";
import { Avatar, Badge, Button, Space, Tabs, Typography } from "antd";
import {
  CheckOutlined, CodeOutlined, DownloadOutlined,
  GithubFilled, LinkedinOutlined, MailOutlined
} from '@ant-design/icons';

const { Title } = Typography;
import "../../styles/sidebarContent.scss";
import Resume from "../skillSnapshots/resume";


export default function SidebarContent({ images, resume }) {
  /* --- Content --- */

  const StackoverflowSvg = () => (
    <svg focusable="false" width="25" height="25" fill="currentColor" aria-hidden="true">
      {/* src: https://iconmonstr.com/stackoverflow-1-svg/ */}
      <path d="M15 21h-10v-2h10v2zm6-11.665l-1.621-9.335-1.993.346 1.62 9.335 1.994-.346zm-5.964 6.937l-9.746-.975-.186 2.016 9.755.879.177-1.92zm.538-2.587l-9.276-2.608-.526 1.954 9.306 2.5.496-1.846zm1.204-2.413l-8.297-4.864-1.029 1.743 8.298 4.865 1.028-1.744zm1.866-1.467l-5.339-7.829-1.672 1.14 5.339 7.829 1.672-1.14zm-2.644 4.195v8h-12v-8h-2v10h16v-10h-2z"></path>
    </svg>
  );


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
      icon: <StackoverflowSvg />
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
    },
    {
      name: 'Résumé',
      content: <Resume icon={<DownloadOutlined />} />
    }
  ]

  return (
    <Space direction="vertical" id="sidebar" className="gray-bg" size="small">

      {/* -- Contact Info -- */}
      <div id="contact">
        <Badge count={"CSM®"} title="Certified ScrumMaster®" offset={[-5, 90]}>
          <Avatar
            size={100}
            src="./assets/moi.jpg"
            alt="avatar image"
          />
        </Badge>

        <Title level={3} style={{ flexBasis: '100%', marginTop: '0.5em' }}>Shamseen Rahman</Title>

        {/* <Button.Group> */}
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
        {/* </Button.Group> */}

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