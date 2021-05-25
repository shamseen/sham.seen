import {
    CodeOutlined
} from '@ant-design/icons';
import { Avatar, Image, Space, Tabs, Typography } from "antd";
const { TabPane } = Tabs;
const { Title } = Typography;
import "../styles/skillSnapshot.scss";


export default function SkillSnapshot() {

    const languageStats = `https://github-readme-stats.vercel.app/api/top-langs/?username=shamseen`
        + `&layout=compact`
        + `&custom_title=Languages`
        + `&langs_count=7`
        + `&theme=graywhite`
        + `&bg_color=00000000`
        + `&hide_border=true`;

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
                    <Image src={languageStats} preview={false} />

                    {/* Customize stats
                        https://github.com/anuraghazra/github-readme-stats/blob/master/themes/README.md
                    */}
                </TabPane>
                <TabPane tab="🧬" key="2" >
                    Biomed stats
                </TabPane>
            </Tabs>
        </Space>
    )
}