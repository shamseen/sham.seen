import { BranchesOutlined } from "@ant-design/icons";

const baseUrl = 'https://slate.host/api/v2/get';
const fileUrl = 'https://slate.textile.io/ipfs/';

const images = {
  url: fileUrl,
  projects: [],
  resume: null,
  sidebar: [],
}

const sortFiles = (json) => {

  json.user.library.map((item, i) => {
    switch (item.data.author) {

      case 'projects': images.projects.push(item); break;

      case 'resume': images.resume = item; break;

      case 'sidebar': images.sidebar.push(item); break;

      default: break;
    }
  });
  // console.log(images);
  // console.log(JSON.stringify(images, null, 2));
  return images;
}

export const getFiles = async () => {
  const auth = `Basic ${process.env.REACT_APP_SLATEHOST_KEY}`;
  console.log(auth);

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