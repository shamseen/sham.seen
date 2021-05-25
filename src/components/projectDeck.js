import { Card, Skeleton, Space } from 'antd';
const { Meta } = Card;

const placeholder = new Array(3).fill(
  {
    title: "Project Title",
    image: '',
    desc: 'project description',
    link: ''
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
            <Card
              bordered={false}
              className="project"
              key={p.title}
              hoverable
              cover={<Skeleton.Image />}
            >
              <Meta title={p.title} description={p.desc}></Meta>
            </Card>
          );
        })
      }
    </Space>
  );
}