import { Card, Typography } from 'antd';
const { Title } = Typography;

export default function BackgroundPage() {
  return (
    <div id="backgroundPage">
      <Title level={1} className="title title-view">Experience</Title>
      <Card loading={true} />
    </div>
  )
}