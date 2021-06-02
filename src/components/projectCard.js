import { useState } from 'react';
import {
  ArrowsAltOutlined, GithubOutlined, LineOutlined, LinkOutlined
} from '@ant-design/icons';
import { Card, Image, Popover, Skeleton, Typography } from 'antd';

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
    },
    img: !proj.image ? <Skeleton.Image />
      : <Image src={proj.image} alt={proj.title} />
  };

  const allCardActions = [
    <Link href={proj.url} key="site" target="_blank"><LinkOutlined /></Link>,
    <Popover content={proj.desc} trigger="click" key="descAll" overlayStyle={descSettings.fullText}>
      <ArrowsAltOutlined />
    </Popover>,
    <Link href={proj.repo} key="repo" target="_blank"><GithubOutlined /></Link>,
  ];

  return (
    /* --- Hovering over card will show links to site & repo -- */
    <Card
      bordered={false}
      className={`project-card${proj.expand ? ' expand' : ''}`}
      key={proj.title}
      actions={actions}
      onMouseEnter={() => setActions(allCardActions)}
      onMouseLeave={() => setActions([<LineOutlined />])}
    >
      {/* Truncate longer description, actions has a btn to expand */}
      {/* (overriden if it looks poopoo in masonry layout) */}
      <Meta title={proj.title}
        description={
          (proj.expand ? proj.desc
            : <Paragraph ellipsis={descSettings.preview} key="descPreview">
              {proj.desc}
            </Paragraph>)}
      >
      </Meta>

      <br />
      {/* Image with caption on hover IF caption isn't expanded*/}
      {proj.expand ? descSettings.img
        : <Popover content={proj.desc} key="descAll" overlayStyle={descSettings.fullText}>
          {descSettings.img}
        </Popover>
      }

    </Card>
  )
}