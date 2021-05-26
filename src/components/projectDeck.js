import {
  ArrowsAltOutlined, GithubOutlined, LinkOutlined
} from '@ant-design/icons';
import { Button, Card, Divider, Popover, Skeleton, Space, Typography } from 'antd';
const { Link, Paragraph } = Typography;
const { Meta } = Card;

const placeholder = new Array(3).fill(
  {
    title: "Project Title",
    image: '',
    desc: 'Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team.',
    url: '',
    repo: ''
  }
);

export default function ProjectDeck({ projects = placeholder }) {
  // Desktop: row of cards
  // Mobile: carousel of cards



  return (
    <Space
      className="projectDeck"
      direction="horizontal"
      align="center"
    >

      {
        projects.map(p => {
          return (
            /* --- Hovering over card will show links to site & repo -- */
            <Popover content={
              [
                <Link href={p.url} ><LinkOutlined key="ellipsis" /></Link>,
                <Divider type="vertical" />,
                <Link href={p.repo}><GithubOutlined key="ellipsis" /></Link>
              ]
            }>

              <Card
                bordered={false}
                className="project"
                key={p.title}
                hoverable
                cover={<Skeleton.Image />}
              >
                <Meta title={p.title}
                  description={
                    <Paragraph ellipsis={{
                      rows: 2,
                      expandable: true,
                      symbol: 'more',
                    }}>
                      {p.desc}
                    </Paragraph>}
                >

                </Meta>
              </Card>
            </Popover>
          );
        })
      }
    </Space>
  );
}