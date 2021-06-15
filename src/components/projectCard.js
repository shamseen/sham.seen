import { useState } from 'react';
import {
  GithubOutlined, LineOutlined, LinkOutlined
} from '@ant-design/icons';
import { Card, Image, Skeleton, Typography } from 'antd';

const { Link, Paragraph } = Typography;
const { Meta } = Card;

export default function ProjectCard({ proj }) {
  const [actions, setActions] = useState([<LineOutlined />]);
  const imgUrl = 'https://slate.textile.io/ipfs/' + proj.cid;
  const repo = 'https://github.com/shamseen/' + proj.data.repo;
  const src = proj.data.source;

  const descSettings = {
    preview: {
      rows: 2,
      expandable: true
    },
    fullText: {
      maxWidth: '70vh'
    },
  };

  const allCardActions = [
    <Link href={src} key="site" target="_blank"><LinkOutlined /></Link>,
    <Link href={repo} key="repo" target="_blank"><GithubOutlined /></Link>,
  ];

  return (
    /* --- Hovering over card will show links to site & repo -- */
    <Card
      bordered={false}
      className='project-card'
      key={proj.data.repo}
      actions={actions}
      onMouseEnter={() => setActions(allCardActions)}
      onMouseLeave={() => setActions([<LineOutlined />])}
    >

      {/* Description: truncate + expand btn */}
      <Meta title={proj.data.name}
        description={
          <Paragraph ellipsis={descSettings.preview}>
            {proj.data.body}
          </Paragraph>
        }
      >
      </Meta>

      <br />

      {/* Screenshot of app */}
      {!proj.cid ? <Skeleton.Image /> // no image from host = use skeleton
        : <Image src={imgUrl}
          alt={`Screenshot of the ${proj.data.name} app`} />}

    </Card >
  )
}