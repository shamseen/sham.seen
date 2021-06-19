import { useState } from 'react';
import {
  DoubleRightOutlined, GithubOutlined, LineOutlined, LinkOutlined,
} from '@ant-design/icons';
import { Card, Collapse, Divider, Image, Skeleton, Typography } from 'antd';

const { Link } = Typography;
const { Panel } = Collapse;

export default function ProjectCard({ proj }) {

  const imgUrl = 'https://slate.textile.io/ipfs/' + proj.cid;
  const repo = 'https://github.com/shamseen/' + proj.data.repo;
  const src = proj.data.source;


  const links = [
    <Link href={src} key="site" target="_blank"><LinkOutlined /></Link>,
    <Divider type='vertical' />,
    <Link href={repo} key="repo" target="_blank"><GithubOutlined /></Link>,
  ];

  return (
    <Card
      title={proj.data.name}
      className='project-card'
      bordered={false}
      extra={<>{links}</>}
      key={proj.data.repo}
    >
      {/* TODO: Truncate longer description as collapse header */}

      {/* Description */}
      <Collapse ghost expandIcon={({ isActive }) => <DoubleRightOutlined
        rotate={isActive ? 90 : 0}
      />}>
        <Panel className='card-text' header='Description...'>{proj.data.body}</Panel>
      </Collapse>

      {/* Preview */}
      {!proj.cid ? <Skeleton.Image /> // no image from host = use skeleton
        : <Image src={imgUrl} preview={false} height={'200px'}
          alt={`Screenshot of the ${proj.data.name} app`} />
      }
    </Card>
  )
}