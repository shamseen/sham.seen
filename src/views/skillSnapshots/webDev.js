import { Divider, Image, Typography } from 'antd';
const { Title } = Typography;

export default function WebSevSkills({ skillIcon }) {
  //  Customize stats img https://github.com/anuraghazra/github-readme-stats#customization
  const languageStats = `https://github-readme-stats.vercel.app/api/top-langs/?username=shamseen`
    + `&layout=compact`
    + `&custom_title=Languages`
    + `&langs_count=7`
    // + `&theme=graywhite`
    + `&hide_border=true`
    + `text_color=f7ebe8`;

  const skills = [
    'React, SCSS, Bootstrap 4, AngularJS',
    'Node, Express, RESTful APIs, C#, ASP.NET',
    'MongoDB, MySQL, PostgreSQL',
    'Agile workflow, Ant Design, @material-ui'
  ]

  return (<div>

    <Title level={5}>Skills</Title>
    <Divider />

    {skills.map((skill, i) => {
      return (
        <div className="skillList" key={i}>
          {skillIcon} {skill}
        </div>
      );
    })}

    <Divider />
    <Title level={5}>Languages</Title>

    <Image
      // transparent bg when on sidebar
      src={languageStats + `&bg_color=00000000&hide_title=true`}

      // opaque bg if user clicks on image
      preview={{ src: languageStats }}

      alt="Languages used in github" />

    <Divider />
  </div>)
}
