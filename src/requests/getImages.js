import axios from "axios";

function getImages(query) {
  if (!query) {
    return Promise.resolve([]);
  } else {
    return axios
      .get(`https://images-api.nasa.gov/search?q=${query}`)
      .then((response) => {
        console.log(response.data.collection.items);
        const imageResults = (array) => {
          const parsedImages = array.filter(
            (element) => element.data[0].media_type === "image"
          );
          const images = parsedImages.map((image) => image.links[0].href);
          return images;
        };
        return imageResults(response.data.collection.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default getImages;
