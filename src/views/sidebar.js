import {
    CodeOutlined
} from '@ant-design/icons';
import { Avatar, Image, Space, Tabs, Typography } from "antd";
const { TabPane } = Tabs;
const { Title } = Typography;
import "../styles/sidebar.scss";


export default function Sidebar() {

    //  Customize stats img https://github.com/anuraghazra/github-readme-stats#customization
    const languageStats = `https://github-readme-stats.vercel.app/api/top-langs/?username=shamseen`
        + `&layout=compact`
        + `&custom_title=Languages`
        + `&langs_count=7`
        + `&theme=graywhite`
        + `&hide_border=true`;

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
            <Tabs defaultActiveKey="1" type="card" size='large' className="skillSnapshot">
                <TabPane tab={<CodeOutlined />} key="1">
                    <Image
                        // transparent bg when on sidebar
                        src={languageStats + `&bg_color=00000000`}

                        // opaque bg if user clicks on image
                        preview={{ src: languageStats }}

                        alt="Languages used in github" />
                </TabPane>
                <TabPane tab="🧬" key="2" >
                    Biomed stats
                </TabPane>
            </Tabs>
        </Space>
    )
}