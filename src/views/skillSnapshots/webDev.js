import { Image, Skeleton, Typography } from 'antd';
const { Title } = Typography;

export default function WebSevSkills() {
  //  Customize stats img https://github.com/anuraghazra/github-readme-stats#customization
  const languageStats = `https://github-readme-stats.vercel.app/api/top-langs/?username=shamseen`
    + `&layout=compact`
    + `&custom_title=Languages`
    + `&langs_count=7`
    + `&theme=graywhite`
    + `&hide_border=true`;

  return (<div>
    <Skeleton active={true} />
    <Title level={5}>Languages</Title>
    <Image
      // transparent bg when on sidebar
      src={languageStats + `&bg_color=00000000&hide_title=true`}

      // opaque bg if user clicks on image
      preview={{ src: languageStats }}

      alt="Languages used in github" />
  </div>)
}