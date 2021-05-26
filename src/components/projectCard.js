import { useState } from 'react';
import {
  ArrowsAltOutlined,
  GithubOutlined,
  LinkOutlined
} from '@ant-design/icons';
import { Card, Divider, Skeleton, Space } from 'antd';
const { Meta } = Card;

export default function ProjectCard({ proj }) {
  const [actions, setActions] = useState([]);

  const showActions = (isHovered) => {
    setActions(isHovered ?
      [
        <ArrowsAltOutlined key="ellipsis" />,
        <LinkOutlined key="ellipsis" />,
        <GithubOutlined key="ellipsis" />,
      ]

      : []
    );
  }
  return (
    <Card
      bordered={false}
      className="project"
      hoverable
      cover={<Skeleton.Image />}
      actions={actions}
      onMouseOver={() => showActions(true)}
      onMouseOut={() => showActions(false)}
    >
      <Meta title={proj.title} description={proj.desc}></Meta>
    </Card>
  )
}