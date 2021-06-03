import { Badge, Button, Divider, Image } from 'antd';

export default function Resume({ icon }) {
  return (
    <div id="resume">
      <Button size="large" icon={icon} type="ghost">Download</Button>
      <Divider>Preview</Divider>

      <Badge count={"Click to zoom"} offset={[-60, 5]}>
        <Image

          // transparent bg when on sidebar
          src="./resume_transparent.png"

          // opaque bg if user clicks on image
          preview={{ src: "./RahmanShamseen_web.png" }}

          alt="Résumé preview" />
      </Badge>
    </div>
  )
}