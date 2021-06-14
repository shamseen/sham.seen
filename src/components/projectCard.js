import { useState } from 'react';
import {
  ArrowsAltOutlined, GithubOutlined, LineOutlined, LinkOutlined
} from '@ant-design/icons';
import { Card, Image, Popover, Skeleton, Typography } from 'antd';

const { Link, Paragraph } = Typography;
const { Meta } = Card;

export default function ProjectCard({ proj }) {
  const [actions, setActions] = useState([<LineOutlined />]);
  const imgUrl = 'https://slate.textile.io/ipfs/' + proj.cid;
  const repo = 'https://github.com/shamseen/' + proj.name;

  const descSettings = {
    preview: {
      rows: 2,
      expandable: false
    },
    fullText: {
      maxWidth: '70vh'
    },
    img: !proj.image ? <Skeleton.Image />
      : <Image src={imgUrl} alt={proj.name} />
  };

  const allCardActions = [
    <Link href={imgUrl} key="site" target="_blank"><LinkOutlined /></Link>,
    <Popover content={proj.data.body} trigger="click" key="descAll" overlayStyle={descSettings.fullText}>
      <ArrowsAltOutlined />
    </Popover>,
    <Link href={repo} key="repo" target="_blank"><GithubOutlined /></Link>,
  ];

  return (
    /* --- Hovering over card will show links to site & repo -- */
    <Card
      bordered={false}
      className='project-card'
      key={proj.name}
      actions={actions}
      onMouseEnter={() => setActions(allCardActions)}
      onMouseLeave={() => setActions([<LineOutlined />])}
    >
      {/* {console.log(proj)} */}
      {/* Truncate longer description, actions has a btn to expand */}
      {/* (overriden if it looks poopoo in masonry layout) */}
      <Meta title={proj.title}
        description={
          // (proj.expanded ? proj.desc
          //   : <Paragraph ellipsis={descSettings.preview} key="descPreview">
          //     {proj.data.body}
          //   </Paragraph>)
          <Paragraph ellipsis={descSettings.preview} key="descPreview">
            {proj.data.body}
          </Paragraph>
        }
      >
      </Meta>

      <br />
      {/* Image with caption on hover IF caption isn't expanded*/}
      {
        proj.expanded ? descSettings.img
          : <Popover content={proj.desc} key="descAll" overlayStyle={descSettings.fullText}>
            {descSettings.img}
          </Popover>
      }

    </Card >
  )
}