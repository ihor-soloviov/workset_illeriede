import axios from "axios";

export const fetchSliderPhotos = async () => {
  try {
    const response = await axios.get(
      "https://api.work-set.eu/api/portfolio?populate=deep"
    );

    return response.data.data.attributes.unser_referenzen;
  } catch (error) {
    console.log(error)
  }
};