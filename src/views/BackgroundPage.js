import { Alert, Spin, Card, Typography } from 'antd';
const { Title } = Typography;

export default function BackgroundPage() {
  return (
    <div id="background-page" className='page'>
      <Title level={1} className="title title-view">
        Experience
      </Title>

      <br />
      <br />

      <Spin tip="Loading..." size='large' />
    </div >

  )
}