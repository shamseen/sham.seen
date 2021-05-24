import { Card, Space } from 'antd';

export default function ProjectDeck() {

  // Desktop: row of cards
  // Mobile: carousel of cards

  return (
    <Space
      className="projectDeck"
      direction="horizontal"
      align="center"
    >
      <Card title="Card title" bordered={false} className="project">
        Card content
        </Card>
      <Card title="Card title" bordered={false} className="project">
        Card content
        </Card>
      <Card title="Card title" bordered={false} className="project">
        Card content
        </Card>
    </Space>
  );
}