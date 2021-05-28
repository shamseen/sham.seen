import { Divider, Skeleton, Tag, Tooltip, Typography } from 'antd';
const { Title } = Typography;

export default function BiomedSkills({ skillIcon }) {

  const skills = [
    'Tissue culture, Organ on a Chip',
    'RT-PCR, ELISA, Western Blot',
    'SBOL v2, SDS-PAGE'
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
      {skills.map((skill, i) => {
        return (
          <div className="skillList" key={i}>
            {skillIcon} {skill}
          </div>
        );
      })}
      <Divider />
    </div>)
}