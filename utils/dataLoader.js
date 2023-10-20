import axios from "axios";

export const fetchSliderPhotos = async () => {
  try {
    const response = await axios.get(
      "https://api.work-set.eu/api/portfolio?populate=deep"
    );

    return response.data.data.attributes.unser_referenzen;
  } catch (error) {
    console.log(error);
  }
};

export const fetchReviews = async () => {
  try {
    const response = await axios.get(
      "https://google-reviews.work-set.eu/getReviews",
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.result.reviews;
  } catch (error) {
    console.error(error);
  }
};
