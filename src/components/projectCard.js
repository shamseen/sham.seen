import {
  ArrowsAltOutlined, GithubOutlined, LinkOutlined
} from '@ant-design/icons';
import { Button, Card, Divider, Popover, Skeleton, Typography } from 'antd';

const { Link, Paragraph } = Typography;
const { Meta } = Card;

export default function ProjectCard({ proj }) {
  const descSettings = {
    preview: {
      rows: 2,
      expandable: false
    },
    fullText: {
      maxWidth: '70vh'
    }
  }

  return (
    /* --- Hovering over card will show links to site & repo -- */
    // getting card actions on hover was no bueno :(
    <Popover content={
      [
        <Link href={proj.url} key="site" ><LinkOutlined /></Link>,
        <Divider type="vertical" key="vr1" />,
        <Divider type="vertical" key="vr2" />,
        <Link href={proj.repo} key="repo"><GithubOutlined /></Link>
      ]
    }>

      <Card
        bordered={false}
        className="project"
        key={proj.title}
        cover={<Skeleton.Image />}
      >
        {/* Truncate longer description, button to expand */}
        <Meta title={proj.title}
          description={[
            <Paragraph ellipsis={descSettings.preview} key="descPreview">
              {proj.desc}
            </Paragraph>,

            // expanding text messes with sizing.. so new popover
            <Popover content={proj.desc} trigger="click" key="descAll" overlayStyle={descSettings.fullText}>
              <Button type="ghost"><ArrowsAltOutlined /></Button>
            </Popover>
          ]}
        >
        </Meta>
      </Card>
    </Popover>
  )
}