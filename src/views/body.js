import { Avatar, Card, Comment } from "antd";

export default function Body() {
  return (<div id="body">
    {/* TODO: Jumbotron, cards, FAB, etc */}
    {/* Brand / Objective statement */}
    <Card id="objectiveStmt">
      <Comment
        avatar={
          <Avatar
            src="https://media-exp1.licdn.com/dms/image/C5603AQHXHDYV0Gf0GA/profile-displayphoto-shrink_800_800/0/1517282074745?e=1626912000&v=beta&t=Wcxkq5fCKJwfhkfranPupyea_zdGf1OU7qaxYkg8s9A"
            alt="mini-avatar image"
          />
        }
        content={
          <p>
            Aspiring web developer and a biomedical researcher (ideally at the same company!)
            I have a knack for workflow management (and a Certified ScrumMaster), hold myself to a high standard, and value friendships with my colleagues; ensuring that myself and my team are working on the best version of our solutions.
          </p>
        }
      />
    </Card>
  </div>)
}