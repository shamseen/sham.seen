import { Divider, Image, Skeleton, Tag, Tooltip, Typography } from 'antd';
const { Title } = Typography;

export default function BiomedSkills({ skillIcon }) {

  // const skills = [
  //   'Tissue culture, Organ on a Chip',
  //   'RT-PCR, ELISA, Western Blot',
  //   'SBOL v2, SDS-PAGE'
  // ]

  const skills = [
    'Tissue culture',
    'Organ on a Chip',
    'RT-PCR', 'ELISA', 'SDS-PAGE', 'Western Blot',
    'SBOL v2',
  ]

  const exps = [
    "Tissue microfabrication: human bone marrow stem cells and vascular endothelial cells",
    "Tissue culture: ",
    "Bioinformatics: Utilizing SBOL v2"
  ]

  return (
    <div>
      {/* <Title level={5}>Laboratory Experience</Title>
      <Divider />

      {exps.map((ex, i) => {
        return (
          <div className="skillList" key={i}>
            {ex}
          </div>
        )
      })} */}

      <Divider>Skills</Divider>
      <div className="biomed-list">
        <img src="favicon.png" alt="preliminary logo" id="genie-icon" />
        {/* <Image src='favicon.png' alt="logo" preview={false} id="genie-icon" /> */}
        <div>
          {skills.map((skill, i) => {
            return (
              <div className="skillList" key={i}>
                {skillIcon} {skill}
              </div>
            );
          })}
        </div>
      </div>
      <Divider />



    </div>)
}