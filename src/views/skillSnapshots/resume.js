import { Badge, Button, Divider, Image } from 'antd';

export default function Resume({ icon }) {

  const resumeLink = "./assets/RahmanShamseen_web.pdf";

  return (
    <div id="resume">
      <Badge count={"PDF"}>
        <Button size="large" icon={icon} href={resumeLink} target="_blank" ghost>Download</Button>
      </Badge>
      <Divider>Preview</Divider>

      <Badge count={"Click to zoom"} offset={[-60, 5]}>
        <Image

          // transparent bg when on sidebar
          src="./assets/resume_transparent.png"

          // opaque bg if user clicks on image
          preview={{ src: "./assets/RahmanShamseen_web.png" }}

          alt="Résumé preview" />
      </Badge>
    </div>
  )
}