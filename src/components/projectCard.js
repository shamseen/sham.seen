import {
  ArrowsAltOutlined, GithubOutlined, LinkOutlined
} from '@ant-design/icons';
import { Card, Divider, Popover, Skeleton, Space, Typography } from 'antd';
const { Link, Paragraph } = Typography;
const { Meta } = Card;

export default function ProjectCard({ proj }) {

  const ellipses =
  {
    rows: 2,
    expandable: true,
    symbol: 'more',
  }

  return (
    /* --- Hovering over card will show links to site & repo -- */
    <Popover content={
      [
        <Link href={proj.url} ><LinkOutlined key="ellipsis" /></Link>,
        <Divider type="vertical" />,
        <Link href={proj.repo}><GithubOutlined key="ellipsis" /></Link>
      ]
    }>

      <Card
        bordered={false}
        className="project"
        key={proj.title}
        hoverable
        cover={<Skeleton.Image />}
      >
        <Meta title={proj.title}
          description={
            <Paragraph ellipsis={ellipses}>
              {proj.desc}
            </Paragraph>
          }
        >
        </Meta>
      </Card>
    </Popover>
  )
}