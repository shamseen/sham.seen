import { BranchesOutlined } from "@ant-design/icons";

const baseUrl = 'https://slate.host/api/v2/get';
const fileUrl = 'https://slate.textile.io/ipfs/';

const projects = {
  backend: [],
  frontend: [],
  fullstack: [],
};
const images = {
  projects: {},
  resume: null,
  sidebar: [],
  url: fileUrl,
}

const sortFiles = (json) => {

  json.user.library.map((item, i) => {
    const name = item.data.author.split(' '); // comes in as 'frontend Ludo'

    item.data.author = name[1]  // removing the 'frontend' part

    switch (name[0]) {

      case 'resume': images.resume = item; break;

      case 'sidebar': images.sidebar.push(item); break;

      // project images
      case 'backend': projects.backend.push(item); break;
      case 'frontend': projects.frontend.push(item); break;
      case 'fullstack': projects.fullstack.push(item); break;

      default: break;
    }
  });

  console.log(json);

  images.projects = projects;
  console.log(projects);
  console.log(images.projects);
  // console.log(images);
  // console.log(JSON.stringify(images, null, 2));

  return images;
}

export const getFiles = async () => {
  const auth = `Basic ${process.env.REACT_APP_SLATEHOST_KEY}`;

  try {
    const response = await fetch(baseUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: auth,
      }
    });

    if (!response) {
      console.log("No response");
      return undefined;
    }

    const json = await response.json();

    if (json.error) {
      console.log(json);
      return undefined
    }

    // otherwise return sorted images
    sortFiles(json);
  }

  catch (err) {
    console.log(error)
  }


  return images;
}