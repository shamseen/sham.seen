import { useState } from 'react';
import {
  ArrowsAltOutlined, GithubOutlined, LineOutlined, LinkOutlined
} from '@ant-design/icons';
import { Card, Popover, Skeleton, Typography } from 'antd';

const { Link, Paragraph } = Typography;
const { Meta } = Card;

export default function ProjectCard({ proj }) {
  const [actions, setActions] = useState([<LineOutlined />]);

  const descSettings = {
    preview: {
      rows: 2,
      expandable: false
    },
    fullText: {
      maxWidth: '70vh'
    }
  };

  const allCardActions = [
    <Link href={proj.url} key="site" ><LinkOutlined /></Link>,
    <Popover content={proj.desc} trigger="click" key="descAll" overlayStyle={descSettings.fullText}>
      <ArrowsAltOutlined />
    </Popover>,
    <Link href={proj.repo} key="repo"><GithubOutlined /></Link>,
  ];

  return (
    /* --- Hovering over card will show links to site & repo -- */
    <Card
      bordered={false}
      className="project"
      key={proj.title}
      cover={<Skeleton.Image />}
      actions={actions}
      onMouseEnter={() => setActions(allCardActions)}
      onMouseLeave={() => setActions([<LineOutlined />])}
    >
      {/* Truncate longer description, actions has a btn to expand */}
      <Meta title={proj.title}
        description={
          <Paragraph ellipsis={descSettings.preview} key="descPreview">
            {proj.desc}
          </Paragraph>}
      >
      </Meta>
    </Card>
  )
}