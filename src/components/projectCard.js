import { useState } from 'react';
import {
  DoubleRightOutlined, GithubOutlined, LineOutlined, LinkOutlined,
} from '@ant-design/icons';
import { Card, Collapse, Image, Skeleton, Typography } from 'antd';

const { Link, Paragraph } = Typography;
const { Meta } = Card;
const { Panel } = Collapse;

export default function ProjectCard({ proj }) {
  const [actions, setActions] = useState([<LineOutlined />]);


  const imgUrl = 'https://slate.textile.io/ipfs/' + proj.cid;
  const repo = 'https://github.com/shamseen/' + proj.data.repo;
  const src = proj.data.source;


  const allCardActions = [
    <Link href={src} key="site" target="_blank"><LinkOutlined style={{ fontSize: '16px', color: 'black' }} /></Link>,
    <Link href={repo} key="repo" target="_blank"><GithubOutlined style={{ fontSize: '16px', color: 'black !important' }} /></Link>,
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

      {/* Truncate longer description, button to expand */}
      <Meta
        title={proj.data.name}
        className='card-text'
        description={
          <Collapse ghost expandIcon={({ isActive }) => <DoubleRightOutlined
            rotate={isActive ? 90 : 0}
          />}>
            <Panel header='Description...'>{proj.data.body}</Panel>
          </Collapse>
        }
      >
      </Meta>
      <br />

      {/* Screenshot of app */}

      {!proj.cid ? <Skeleton.Image /> // no image from host = use skeleton
        : <Image src={imgUrl} preview={false}
          alt={`Screenshot of the ${proj.data.name} app`} />
      }
    </Card >
  )
}