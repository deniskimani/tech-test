import axios from "axios";

function getImages(query) {
  if (!query) {
    return Promise.resolve([]);
  } else {
    return axios
      .get(`https://images-api.nasa.gov/search?q=${query}`)
      .then((response) => {
        const imageResults = () => {
          const array = response.data.collection.items;
          const parsedImages = [];
          const images = [];

          array.forEach((element) => {
            if (element.data[0].media_type === "image") {
              parsedImages.push(element);
            }

            const image = parsedImages.map((image) => image.links[0].href);
            images.push(image);
          });

          // console.log(images);
          return images;
        };
        return imageResults();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default getImages;
