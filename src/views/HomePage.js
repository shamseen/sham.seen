import { Card, PageHeader, Typography } from "antd";
const { Title } = Typography;

export default function HomePage() {
  return (
    <div id="homePage" className='page'>
      <Title level={1} className="title title-view">Home Page</Title>
      <Card id="objectiveStmt" bordered={false}>
        {/* Brand / Objective statement */}
        <Title level={3}>sham•seen</Title>
        <div>
          <i>noun</i>
          <ol>
            <li>Full-stack JavaScript developer; biomedical researcher and tissue engineer; a double threat.</li>
            <li>MERN web apps that improve research processes and accessibility to non-coders (see: .pnGCAT).</li>
          </ol>
        </div>
        <div>
          <i>adjective</i>
          <ul style={{ listStyleType: "none" }}>
            <li>Good workflow management; meticulous for best practices.</li>
          </ul>
        </div>
      </Card>
    </div>
  )

}